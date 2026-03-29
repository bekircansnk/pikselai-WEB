export const IMAGES_PER_RUN = 4;

export const DEFAULT_PRICE_TIERS = [
  { min: 0, max: 399, price: 0.195 },
  { min: 400, max: 1399, price: 0.17 },
  { min: 1400, max: Infinity, price: 0.155 },
];

export const DEFAULT_SOCIAL = {
  storiesPerDay: 5,
  postsPerDay: 2,
  storyTryCount: 2,
  postTryCount: 3,
  daysPerMonth: 30,
};

export const DEFAULT_BANNERS = {
  mobileCount: 4,
  desktopCount: 4,
  categoryCount: 5,
  tryCount: 4,
  imagesPerRun: 4,
  mobileMultiplier: 1,
  desktopMultiplier: 2,
  categoryMultiplier: 2,
};

export const DEFAULT_BULK = {
  totalProducts: 1444,
  imagesPerProduct: 5,
  errorBase: 500,
  errorAmount: 10,
};
