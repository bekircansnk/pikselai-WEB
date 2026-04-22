export function getUnitPrice(totalImages: number): number {
  if (totalImages > 700) return 0.25;
  if (totalImages > 200) return 0.30;
  return 0.50;
}

export function calculateSocialMedia({
  storiesPerDay,
  postsPerDay,
  storyRevisionCount,
  postRevisionCount,
  imagesPerRun,
  daysPerMonth,
}: {
  storiesPerDay: number;
  postsPerDay: number;
  storyRevisionCount: number;
  postRevisionCount: number;
  imagesPerRun: number;
  daysPerMonth: number;
}) {
  // İlk üretim 1 settir (4 görsel). Her revizyon ekstra 1 set daha üretim demektir.
  const storyImagesPerItem = (1 + storyRevisionCount) * imagesPerRun;
  const postImagesPerItem = (1 + postRevisionCount) * imagesPerRun;

  const dailyStoryImages = storiesPerDay * storyImagesPerItem;
  const dailyPostImages = postsPerDay * postImagesPerItem;
  const dailyTotal = dailyStoryImages + dailyPostImages;
  const monthlyTotal = dailyTotal * daysPerMonth;
  const unitPrice = getUnitPrice(monthlyTotal);
  const totalCost = monthlyTotal * unitPrice;

  return {
    storyImagesPerItem,
    postImagesPerItem,
    dailyStoryImages,
    dailyPostImages,
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
  const baseBannerImages = (1 + revisionCount) * imagesPerRun;

  const mobileTotal = mobileCount * baseBannerImages * mobileMultiplier;
  const desktopTotal = desktopCount * baseBannerImages * desktopMultiplier;
  const categoryTotal = categoryCount * baseBannerImages * categoryMultiplier;

  const seasonTotal = mobileTotal + desktopTotal + categoryTotal;
  const unitPrice = getUnitPrice(seasonTotal);
  const totalCost = seasonTotal * unitPrice;

  return {
    baseBannerImages,
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
