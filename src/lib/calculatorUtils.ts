export function getUnitPrice(totalImages: number): number {
  if (totalImages > 700) return 0.25;
  if (totalImages > 200) return 0.30;
  return 0.50;
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
  const baseMonthlyTotal = mobileTotal + desktopTotal + categoryTotal;

  // Revizyonlar (Girilen her 1 revizyon sadece 4 görsel ekler)
  const revisionImages = revisionCount * imagesPerRun;

  const monthlyTotal = baseMonthlyTotal + revisionImages;
  const unitPrice = overrideUnitPrice ?? getUnitPrice(monthlyTotal);
  const totalCost = monthlyTotal * unitPrice;

  return {
    baseBannerImages: imagesPerRun,
    mobileTotal,
    desktopTotal,
    categoryTotal,
    monthlyTotal,
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
