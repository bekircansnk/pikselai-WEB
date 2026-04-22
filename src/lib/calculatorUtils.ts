export function getUnitPrice(totalImages: number): number {
  if (totalImages > 700) return 0.25;
  if (totalImages > 200) return 0.30;
  return 0.50;
}

export function calculateSocialMedia({
  storiesPerDay,
  postsPerDay,
  revisionCount,
  imagesPerRun,
  daysPerMonth,
}: {
  storiesPerDay: number;
  postsPerDay: number;
  revisionCount: number;
  imagesPerRun: number;
  daysPerMonth: number;
}) {
  // Temel günlük üretim (Sadece ilk set: 4 görsel)
  const dailyStoryImages = storiesPerDay * imagesPerRun;
  const dailyPostImages = postsPerDay * imagesPerRun;
  
  // Temel aylık üretim
  const baseMonthlyTotal = (dailyStoryImages + dailyPostImages) * daysPerMonth;

  // Revizyonlar (Girilen her 1 revizyon sadece 4 görsel ekler)
  const revisionImages = revisionCount * imagesPerRun;

  // Toplam Hacim
  const monthlyTotal = baseMonthlyTotal + revisionImages;
  
  const unitPrice = getUnitPrice(monthlyTotal);
  const totalCost = monthlyTotal * unitPrice;

  return {
    storyImagesPerItem: imagesPerRun,
    postImagesPerItem: imagesPerRun,
    dailyStoryImages,
    dailyPostImages,
    dailyTotal: dailyStoryImages + dailyPostImages,
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
}: {
  mobileCount: number;
  desktopCount: number;
  categoryCount: number;
  revisionCount: number;
  imagesPerRun: number;
  mobileMultiplier: number;
  desktopMultiplier: number;
  categoryMultiplier: number;
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
  const unitPrice = getUnitPrice(seasonTotal);
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
}: {
  totalProducts: number;
  imagesPerProduct: number;
  errorBase: number;
  errorAmount: number;
}) {
  const finalImages = totalProducts * imagesPerProduct;
  const errorTolerance = Math.round((finalImages / errorBase) * errorAmount);
  const billableImages = finalImages + errorTolerance;
  const unitPrice = getUnitPrice(billableImages);
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
