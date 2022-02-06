import { locationConstants } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  locationData: [],
};

const locationReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    // ======================= GET /locations/city/sindh/ =======================
    case locationConstants.LOCATION_BY_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case locationConstants.LOCATION_BY_CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "location by city success",
        error: "",
        locationData: action.payload,
      };
    case locationConstants.LOCATION_BY_CITY_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to get location by city",
        success: "",
      };

    // ======================= GET /locations/province/pakistan/ =======================
    case locationConstants.LOCATION_BY_PROVINCE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case locationConstants.LOCATION_BY_PROVINCE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "location by province success",
        error: "",
        locationData: action.payload,
      };
    case locationConstants.LOCATION_BY_PROVINCE_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to get location by province",
        success: "",
      };

    // ======================= GET /locations/search/pak/ =======================
    case locationConstants.LOCATION_BY_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case locationConstants.LOCATION_BY_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "location by search success",
        error: "",
        locationData: action.payload,
      };
    case locationConstants.LOCATION_BY_SEARCH_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to get location by search",
        success: "",
      };

    default:
      return state;
  }
};

export default locationReducer;
