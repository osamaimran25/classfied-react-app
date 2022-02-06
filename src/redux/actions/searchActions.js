import { searchConstants } from "../actionTypes";
import api from "../redux.config";

// FIXME:
// ======================= POST /search/ads =======================
const searchAds = (data) => async (dispatch) => {
  try {
    dispatch({
      type: searchConstants.ADS_SEARCH_REQUEST,
    });

    //       {   "location":"karachi",
    //     "search_text": "",
    //     "max_price":"",
    //     "min_price":"",
    //     "page_num":10,
    //     "category" : "1",
    //     "no_of_record_per_page":3
    // }

    const res = await api.post(`/search/ads`, data);
    dispatch({
      type: searchConstants.ADS_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: searchConstants.ADS_SEARCH_FAILED,
    });
  }
};

// ======================= POST /search/category =======================
const searchCategory = (data) => async (dispatch) => {
  try {
    dispatch({
      type: searchConstants.CATEGORY_SEARCH_REQUEST,
    });

    const { searchText, maxPrice, minPrice, pageNum } = data;

    const newSearchCategory = {
      search_text: searchText || "new",
      max_price: maxPrice || "",
      min_price: minPrice || "",
      page_num: pageNum || 1,
    };

    const res = await api.post(`/search/category`, newSearchCategory);

    dispatch({
      type: searchConstants.CATEGORY_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: searchConstants.CATEGORY_SEARCH_FAILED,
    });
  }
};

// ======================= POST /search/catewithads =======================
const searchCateWithAds = (data) => async (dispatch) => {
  try {
    dispatch({
      type: searchConstants.CATE_WITH_ADS_SEARCH_REQUEST,
    });

    const { searchText, maxPrice, minPrice, pageNum } = data;

    const newSearchCategory = {
      search_text: searchText || "new",
      max_price: maxPrice || "",
      min_price: minPrice || "",
      page_num: pageNum || 1,
    };

    const res = await api.post(`/search/catewithads`, newSearchCategory);

    dispatch({
      type: searchConstants.CATE_WITH_ADS_SEARCH_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: searchConstants.CATE_WITH_ADS_SEARCH_FAILED,
    });
  }
};

export { searchAds, searchCategory, searchCateWithAds };
