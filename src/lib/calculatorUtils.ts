export function getUnitPrice(totalImages: number): number {
  if (totalImages === 0) return 0;

  let cost = 0;
  let remaining = totalImages;

  // 1. Kademe: İlk 200 görsel ($0.50)
  if (remaining > 0) {
    const tier1 = Math.min(remaining, 200);
    cost += tier1 * 0.50;
    remaining -= tier1;
  }

  // 2. Kademe: 201 - 700 arası görseller ($0.30)
  if (remaining > 0) {
    const tier2 = Math.min(remaining, 500); // 700 - 200 = 500
    cost += tier2 * 0.30;
    remaining -= tier2;
  }

  // 3. Kademe: 701 ve üzeri görseller ($0.25)
  if (remaining > 0) {
    cost += remaining * 0.25;
  }

  // Etkili (Ortalama) Birim Fiyatı döndür
  return cost / totalImages;
}

export function calculateSocialMedia({
  dailyContentCount,
  revisionCount,
  imagesPerRun,
  daysPerMonth,
  overrideUnitPrice,
}: {
  dailyContentCount: number;
  revisionCount: number;
  imagesPerRun: number;
  daysPerMonth: number;
  overrideUnitPrice?: number;
}) {
  // Temel günlük üretim (Sadece ilk set: 4 görsel)
  const dailyTotal = dailyContentCount * imagesPerRun;
  
  // Temel aylık üretim
  const baseMonthlyTotal = dailyTotal * daysPerMonth;

  // Revizyonlar (Girilen her 1 revizyon sadece 4 görsel ekler)
  const revisionImages = revisionCount * imagesPerRun;

  // Toplam Hacim
  const monthlyTotal = baseMonthlyTotal + revisionImages;
  
  const unitPrice = overrideUnitPrice ?? getUnitPrice(monthlyTotal);
  const totalCost = monthlyTotal * unitPrice;

  return {
    dailyTotal,
    monthlyTotal,
    unitPrice,
    totalCost,
  };
}

export function calculateBanners({
  mobileCount,
  desktopCount,
  categoryCount,
  revisionCount,
  imagesPerRun,
  mobileMultiplier,
  desktopMultiplier,
  categoryMultiplier,
  overrideUnitPrice,
}: {
  mobileCount: number;
  desktopCount: number;
  categoryCount: number;
  revisionCount: number;
  imagesPerRun: number;
  mobileMultiplier: number;
  desktopMultiplier: number;
  categoryMultiplier: number;
  overrideUnitPrice?: number;
}) {
  // Banner temel üretimi
  const mobileTotal = mobileCount * imagesPerRun * mobileMultiplier;
  const desktopTotal = desktopCount * imagesPerRun * desktopMultiplier;
  const categoryTotal = categoryCount * imagesPerRun * categoryMultiplier;

  // Toplam temel hacim
  const baseSeasonTotal = mobileTotal + desktopTotal + categoryTotal;

  // Revizyonlar (Girilen her 1 revizyon sadece 4 görsel ekler)
  const revisionImages = revisionCount * imagesPerRun;

  const seasonTotal = baseSeasonTotal + revisionImages;
  const unitPrice = overrideUnitPrice ?? getUnitPrice(seasonTotal);
  const totalCost = seasonTotal * unitPrice;

  return {
    baseBannerImages: imagesPerRun,
    mobileTotal,
    desktopTotal,
    categoryTotal,
    seasonTotal,
    unitPrice,
    totalCost,
  };
}

export function calculateBulkProduction({
  totalProducts,
  imagesPerProduct,
  errorBase,
  errorAmount,
  overrideUnitPrice,
}: {
  totalProducts: number;
  imagesPerProduct: number;
  errorBase: number;
  errorAmount: number;
  overrideUnitPrice?: number;
}) {
  const finalImages = totalProducts * imagesPerProduct;
  const errorTolerance = Math.round((finalImages / errorBase) * errorAmount);
  const billableImages = finalImages + errorTolerance;
  const unitPrice = overrideUnitPrice ?? getUnitPrice(billableImages);
  const totalCost = billableImages * unitPrice;
  const productUnitCost = totalProducts > 0 ? totalCost / totalProducts : 0;

  return {
    finalImages,
    errorTolerance,
    billableImages,
    unitPrice,
    totalCost,
    productUnitCost,
  };
}
