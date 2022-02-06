import { searchConstants } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  searchAdsData: [],
  searchCategoryData: [],
  searchCateWithAdsData: [],
};

const searchReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    //   FIXME:
    // ======================= POST /search/ads =======================
    case searchConstants.ADS_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case searchConstants.ADS_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "search ads success",
        error: "",
        searchAdsData: action.payload,
      };
    case searchConstants.ADS_SEARCH_FAILED:
      return {
        ...state,
        loading: false,
        error: "search ads failed",
        success: "",
      };

    // ======================= POST /search/category =======================
    case searchConstants.CATEGORY_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case searchConstants.CATEGORY_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        success: "search category success",
        error: "",
        searchCategoryData: action.payload,
      };
    case searchConstants.CATEGORY_SEARCH_FAILED:
      return {
        ...state,
        loading: false,
        error: "search category failed",
        success: "",
      };

    // ======================= POST /search/catewithads =======================
    case searchConstants.CATE_WITH_ADS_SEARCH_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case searchConstants.CATE_WITH_ADS_SEARCH_SUCCESS:
        return {
          ...state,
          loading: false,
          success: "search catewithads success",
          error: "",
          searchCateWithAdsData: action.payload,
        };
      case searchConstants.CATE_WITH_ADS_SEARCH_FAILED:
        return {
          ...state,
          loading: false,
          error: "search catewithads failed",
          success: "",
        };

    default:
      return state;
  }
};

export default searchReducer;
