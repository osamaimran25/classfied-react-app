import { cateWithAdsConstants } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  catewithadsData: [],
};

const catewithadsReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    // ======================= GET /catewithads/1 =======================
    case cateWithAdsConstants.CATE_WITH_ADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case cateWithAdsConstants.CATE_WITH_ADS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "category with ads success",
        error: "",
        catewithadsData: action.payload,
      };
    case cateWithAdsConstants.CATE_WITH_ADS_FAILED:
      return {
        ...state,
        loading: false,
        error: "unable to get data",
        success: "",
      };

    default:
      return state;
  }
};

export default catewithadsReducer;
