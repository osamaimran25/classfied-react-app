import { locationConstants } from "../actionTypes";
import api from "../redux.config";

// ======================= GET /locations/city/sindh/ =======================
const getLocationByCity = (city) => async (dispatch) => {
  try {
    dispatch({
      type: locationConstants.LOCATION_BY_CITY_REQUEST,
    });

    const res = await api.get(`/locations/city/${city || "sindh"}/`);

    dispatch({
      type: locationConstants.LOCATION_BY_CITY_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: locationConstants.LOCATION_BY_CITY_FAILED,
    });
  }
};

// ======================= GET /locations/province/pakistan/ =======================
const getLocationByProvince = (province) => async (dispatch) => {
  try {
    dispatch({
      type: locationConstants.LOCATION_BY_PROVINCE_REQUEST,
    });

    const res = await api.get(`/locations/province/${province || "pakistan"}/`);

    dispatch({
      type: locationConstants.LOCATION_BY_PROVINCE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: locationConstants.LOCATION_BY_PROVINCE_FAILED,
    });
  }
};

// ======================= GET /locations/search/pak/ =======================
const getLocationBySearch = (search) => async (dispatch) => {
  try {
    dispatch({
      type: locationConstants.LOCATION_BY_SEARCH_REQUEST,
    });

    const res = await api.get(`/locations/search/${search || "pak"}/`);

    dispatch({
      type: locationConstants.LOCATION_BY_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: locationConstants.LOCATION_BY_SEARCH_FAILED,
    });
  }
};

export { getLocationByCity, getLocationByProvince, getLocationBySearch };
