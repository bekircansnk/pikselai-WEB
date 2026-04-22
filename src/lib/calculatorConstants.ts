export const IMAGES_PER_RUN = 4;

export const DEFAULT_PRICE_TIERS = [
  { min: 0, max: 200, price: 0.50 },
  { min: 201, max: 700, price: 0.30 },
  { min: 701, max: Infinity, price: 0.25 },
];

export const DEFAULT_SOCIAL = {
  storiesPerDay: 0,
  postsPerDay: 0,
  storyRevisionCount: 0,
  postRevisionCount: 0,
  daysPerMonth: 30,
};

export const DEFAULT_BANNERS = {
  mobileCount: 0,
  desktopCount: 0,
  categoryCount: 0,
  revisionCount: 0,
  imagesPerRun: 4,
  mobileMultiplier: 1,
  desktopMultiplier: 2,
  categoryMultiplier: 2,
};

export const DEFAULT_BULK = {
  totalProducts: 0,
  imagesPerProduct: 1,
  errorBase: 500,
  errorAmount: 10,
};
