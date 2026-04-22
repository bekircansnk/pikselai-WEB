export function getUnitPrice(totalImages: number): number {
  if (totalImages > 700) return 0.25;
  if (totalImages > 200) return 0.30;
  return 0.50;
}

export function calculateSocialMedia({
  storiesPerDay,
  postsPerDay,
  storyTryCount,
  postTryCount,
  imagesPerRun,
  daysPerMonth,
}: {
  storiesPerDay: number;
  postsPerDay: number;
  storyTryCount: number;
  postTryCount: number;
  imagesPerRun: number;
  daysPerMonth: number;
}) {
  const storyImagesPerItem = storyTryCount * imagesPerRun;
  const postImagesPerItem = postTryCount * imagesPerRun;

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
  tryCount,
  imagesPerRun,
  mobileMultiplier,
  desktopMultiplier,
  categoryMultiplier,
}: {
  mobileCount: number;
  desktopCount: number;
  categoryCount: number;
  tryCount: number;
  imagesPerRun: number;
  mobileMultiplier: number;
  desktopMultiplier: number;
  categoryMultiplier: number;
}) {
  const baseBannerImages = tryCount * imagesPerRun;

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
