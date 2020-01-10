export type IActor = {
  image_hash?: string;
  address?: string;
  name?: string;
  bio?: string;
  region?: string;
  country?: string;
  email?: string;
  url?: string;
};

export type IFarm = {
  name?: string;
  country?: string;
  region?: string;
  village?: string;
  story?: string;
  elevation?: string;
  image_hash?: string;
};

export type ICoffee = {
  roast?: string;
  variety?: string;
  process?: string;
  size?: string;
  altitude?: string;
  cupProfile?: ICupProfile[];
  actions?: IAction[];
};

export type ICupProfile = {
  score?: string;
  notes?: string;
  aroma?: string;
  body?: string;
  acidity?: string;
  additionalInformation?: any;
  taster?: IActor;
};

export type IAction = {
  type?: string;
  actor?: IActor;
  description?: string;
  additionalInformation?: any;
};
