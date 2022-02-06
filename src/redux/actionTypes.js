const authConstants = {
  LOGIN: "LOGIN",
  CREATE_NEW_USER: "CREATE_NEW_USER",
  GET_USER_BY_TOKEN: "GET_USER_BY_TOKEN",
  // LOGIN_SUCCESS: "LOGIN_SUCCESS",
  // LOGIN_FAILED: "LOGIN_FAILED",

  // REGISTRATION_REQUEST: "REGISTRATION_REQUEST",
  // REGISTRATION_SUCCESS: "REGISTRATION_SUCCESS",
  // REGISTRATION_FAILED: "REGISTRATION_FAILED",
};

const searchConstants = {
  ADS_SEARCH_REQUEST: "ADS_SEARCH_REQUEST",
  ADS_SEARCH_SUCCESS: "ADS_SEARCH_SUCCESS",
  ADS_SEARCH_FAILED: "ADS_SEARCH_FAILED",

  CATEGORY_SEARCH_REQUEST: "CATEGORY_SEARCH_REQUEST",
  CATEGORY_SEARCH_SUCCESS: "CATEGORY_SEARCH_SUCCESS",
  CATEGORY_SEARCH_FAILED: "CATEGORY_SEARCH_FAILED",

  CATE_WITH_ADS_SEARCH_REQUEST: "CATE_WITH_ADS_SEARCH_REQUEST",
  CATE_WITH_ADS_SEARCH_SUCCESS: "CATE_WITH_ADS_SEARCH_SUCCESS",
  CATE_WITH_ADS_SEARCH_FAILED: "CATE_WITH_ADS_SEARCH_FAILED",
};

const locationConstants = {
  LOCATION_BY_CITY_REQUEST: "LOCATION_BY_CITY_REQUEST",
  LOCATION_BY_CITY_SUCCESS: "LOCATION_BY_CITY_SUCCESS",
  LOCATION_BY_CITY_FAILED: "LOCATION_BY_CITY_FAILED",

  LOCATION_BY_PROVINCE_REQUEST: "LOCATION_BY_PROVINCE_REQUEST",
  LOCATION_BY_PROVINCE_SUCCESS: "LOCATION_BY_PROVINCE_SUCCESS",
  LOCATION_BY_PROVINCE_FAILED: "LOCATION_BY_PROVINCE_FAILED",

  LOCATION_BY_SEARCH_REQUEST: "LOCATION_BY_SEARCH_REQUEST",
  LOCATION_BY_SEARCH_SUCCESS: "LOCATION_BY_SEARCH_SUCCESS",
  LOCATION_BY_SEARCH_FAILED: "LOCATION_BY_SEARCH_FAILED",
};

const cateWithAdsConstants = {
  CATE_WITH_ADS_REQUEST: "CATE_WITH_ADS_REQUEST",
  CATE_WITH_ADS_SUCCESS: "CATE_WITH_ADS_SUCCESS",
  CATE_WITH_ADS_FAILED: "CATE_WITH_ADS_FAILED",
};

const categoryConstants = {
  // CATEGORY_GET_REQUEST: "CATEGORY_GET_REQUEST",
  // CATEGORY_GET_SUCCESS: "CATEGORY_GET_SUCCESS",
  // CATEGORY_GET_FAILED: "CATEGORY_GET_FAILED",
  GET_CATEGORIES: "GET_CATEGORIES",
  GET_SUB_CATEGORIES: "GET_SUB_CATEGORIES",
  GET_CATEGORY_FIELDS: "GET_CATEGORY_FIELDS",
};

const myadsConstants = {
  POST_ADD: "POST_ADD",
  GET_PRICING: "GET_PRICING",
  GET_ADD_DETAILS: "GET_ADD_DETAILS",
  GET_LOCATIONS: "GET_LOCATIONS",
  GET_ADDS: "GET_ADDS",
  GET_CAT_OF_ADDS: "GET_CAT_OF_ADDS",
  SET_SEARCH_KEYWORD: "SET_SEARCH_KEYWORD",
  SET_SELECTED_LOCATION: "SET_SELECTED_LOCATION",
};

const Suffixes = {
  SUCCESS: "SUCCESS",
  REQUEST: "REQUEST",
  FAILURE: "FAILURE",
};

export {
  authConstants,
  searchConstants,
  locationConstants,
  cateWithAdsConstants,
  categoryConstants,
  myadsConstants,
  Suffixes,
};
