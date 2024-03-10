export const NUMBER_HOUSING_ITEM: number = 5;
export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
export enum HousingViewType {
  Favorites = 'Favorites',
  Cities = 'Cities',
  NearPlaces = 'NearPlaces'
}
export const favoriteBlock = {
  bemBlock: 'favorites',
  widthImg: '150',
  heightImg: '110'
};
export const citiesBlock = {
  bemBlock: 'cities',
  widthImg: '260',
  heightImg: '200'
};
export const nearPlacesBlock = {
  bemBlock: 'near-places',
  widthImg: '260',
  heightImg: '200'
};
