export type IFarmer = {
  image_hash?: string;
  address?: string;
  name?: string;
  bio?: string;
  region?: string;
  country?: string;
  email?: string;
};

export type IFarm = {
  name?: string;
  region?: string;
  village?: string;
  story?: string;
};

export type ICoffee = {
  variety?: string;
  process?: string;
  size?: string;
  altitude?: string;
};
