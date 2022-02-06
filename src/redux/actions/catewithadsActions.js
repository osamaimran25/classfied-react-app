import { cateWithAdsConstants } from "../actionTypes";
import api from "../redux.config";

// ======================= GET /catewithads/1 =======================
export const getCateWithAds = (data) => async (dispatch) => {
  try {
    dispatch({
      type: cateWithAdsConstants.CATE_WITH_ADS_REQUEST,
    });

    const res = await api.get(`/catewithads/${data || "1"}`);

    dispatch({
      type: cateWithAdsConstants.CATE_WITH_ADS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: cateWithAdsConstants.CATE_WITH_ADS_FAILED,
    });
  }
};
