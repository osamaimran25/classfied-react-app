import axios from "axios";
export const ADS_LOAD_START = "ADS_LOAD_START";
export const ADS_LOAD_SUCCESS = "ADS_LOAD_SUCCESS";
export const ADS_LOAD_ERROR = "ADS_LOAD_ERROR";
export const SINGLE_ADS_LOAD_START = "SINGLE_ADS_LOAD_START";
export const SINGLE_ADS_LOAD_SUCCESS = "SINGLE_ADS_LOAD_SUCCESS";
export const SINGLE_ADS_LOAD_ERROR = "SINGLE_ADS_LOAD_ERROR";

export const POST_ADS_LOAD_START = "POST_ADS_LOAD_START";
export const POST_ADS_LOAD_SUCCESS = "POST_ADS_LOAD_SUCCESS";
export const POST_ADS_LOAD_ERROR = "POST_ADS_LOAD_ERROR";

const initialState = {
  ads: null,
  adsDetails: null,
  loading: false,
  success: "",
  error: {},
};

export default function adsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADS_LOAD_START:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case ADS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        ads: action.payload,
      };
    case ADS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: "unable to get ads",
      };

    case SINGLE_ADS_LOAD_START:
      return {
        ...state,
        loading: true,
        error: {},
      };
    case SINGLE_ADS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        adsDetails: action.payload,
      };
    case SINGLE_ADS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: "unable to get ads",
      };
    case POST_ADS_LOAD_START:
      return {
        ...state,
        loading: true,
        error: "",
        success: "",
      };
    case POST_ADS_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "Create ADS Success",
      };

    case POST_ADS_LOAD_ERROR:
      return {
        ...state,
        loading: false,
        // formErrors: action.error.response.body || action.error.response.notes,
      };

    default:
      return state;
  }
}

export const getAds = () => async (dispatch) => {
  try {
    dispatch({
      type: ADS_LOAD_START,
    });
    const res = await axios.get(`http://209.97.162.0/ads/list`);
    dispatch({
      type: ADS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ADS_LOAD_ERROR,
    });
  }
};

export const getSingleAds = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_ADS_LOAD_START,
    });
    const res = await axios.get(`http://209.97.162.0/ads/${id}`);
    dispatch({
      type: SINGLE_ADS_LOAD_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SINGLE_ADS_LOAD_ERROR,
    });
  }
};

export const postAds = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_ADS_LOAD_START,
    });
    const {
      email,
      category,
      title,
      description,
      price,
      user,
      featured,
      spotlight,
      total,
      viewed,
      phone,
      locations,
      image_01,
      image_02,
      image_03,
      image_04,
      image_05,
      item: [{ name: name, value: value }],
    } = data;
    const newAds = {
      email,
      category,
      title,
      description,
      price,
      user,
      featured,
      spotlight,
      total,
      viewed,
      phone,
      locations,
      image_01,
      image_02,
      image_03,
      image_04,
      image_05,
      item: [{ name: name, value: value }],
    };
    const res = await axios.post(`http://209.97.162.0/ads/create`, newAds);
    dispatch({
      type: SINGLE_ADS_LOAD_SUCCESS,
      // payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SINGLE_ADS_LOAD_ERROR,
    });
  }
};
