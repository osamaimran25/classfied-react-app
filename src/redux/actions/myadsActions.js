import { myadsConstants } from "../actionTypes";
import { post, postAdsRequest, get } from "../../requests";

function convertJsonToFormData(data) {
  const formData = new FormData();
  const entries = Object.entries(data); // returns array of object property as [key, value]
  // https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1

  for (let i = 0; i < entries.length; i++) {
    // don't try to be smart by replacing it with entries.each, it has drawbacks
    const arKey = entries[i][0];
    let arVal = entries[i][1];
    if (typeof arVal === "boolean") {
      arVal = arVal === true ? 1 : 0;
    }
    if (Array.isArray(arVal)) {
      console.log("displaying arKey");
      console.log(arKey);
      console.log("displaying arval");
      console.log(arVal);

      if (arVal[0] instanceof Object) {
        for (let j = 0; j < arVal.length; j++) {
          if (arVal[j] instanceof Object) {
            // if first element is not file, we know its not files array
            for (const prop in arVal[j]) {
              if (Object.prototype.hasOwnProperty.call(arVal[j], prop)) {
                // do stuff
                if (!isNaN(Date.parse(arVal[j][prop]))) {
                  // console.log('Valid Date \n')
                  // (new Date(fromDate)).toUTCString()
                  formData.append(
                    `${arKey}[${j}][${prop}]`,
                    new Date(arVal[j][prop])
                  );
                } else {
                  formData.append(`${arKey}[${j}][${prop}]`, arVal[j][prop]);
                }
              }
            }
          }
        }
        continue; // we don't need to append current element now, as its elements already appended
      } else {
        arVal = JSON.stringify(arVal);
      }
    }

    if (arVal === null) {
      continue;
    }
    formData.append(arKey, arVal);
  }
  return formData;
}

// ======================= POST /myads/ =======================

export const postAds = (data) => {
  return {
    type: `${myadsConstants.POST_ADD}`,
    payload: postAdsRequest(`/myads/`, convertJsonToFormData(data)),
  };
};

export const getAds = (data) => {
  return {
    type: `${myadsConstants.GET_ADDS}`,
    payload: post(`/feeds`, data),
  };
};
export const getPricing = () => {
  return {
    type: `${myadsConstants.GET_PRICING}`,
    payload: get(`/get-pricing`),
  };
};
export const getAddDetails = (id) => {
  return {
    type: `${myadsConstants.GET_ADD_DETAILS}`,
    payload: get(`/ads/${id}`),
  };
};

export const getLocations = () => {
  return {
    type: `${myadsConstants.GET_LOCATIONS}`,
    payload: get(`/get-location`),
  };
};

export const getCatOfAds = (data) => {
  return {
    type: `${myadsConstants.GET_CAT_OF_ADDS}`,
    payload: post(`/search/catewithads`, data),
  };
};
export const setSearchKeyword = (text) => {
  return {
    type: `${myadsConstants.SET_SEARCH_KEYWORD}`,
    text,
  };
};
export const setSelectedLocation = (location) => {
  return {
    type: `${myadsConstants.SET_SELECTED_LOCATION}`,
    location,
  };
};

// const createMyads = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: myadsConstants.MYADS_POST_REQUEST,
//     });

//     const res = await api.post(`/locations/myads/`);

//     if (res) {
//         getMyads()
//     }
//     // dispatch({
//     //   type: myadsConstants.MYADS_POST_SUCCESS,
//     //   payload: res.data,
//     // });
//   } catch (e) {
//     dispatch({
//       type: myadsConstants.MYADS_POST_FAILED,
//     });
//   }
// };

// // ======================= GET /myads/ =======================
// const getMyads = () => async (dispatch) => {
//   try {
//     dispatch({
//       type: myadsConstants.MYADS_GET_REQUEST,
//     });

//     const res = await api.get(`/myads/`);

//     dispatch({
//       type: myadsConstants.MYADS_GET_SUCCESS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: myadsConstants.MYADS_GET_FAILED,
//     });
//   }
// };

// // ======================= GET /myads/1/ =======================
// const getMyadsById = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: myadsConstants.MYADS_GET_BY_ID_REQUEST,
//     });

//     const res = await api.get(`/myads/${id || "1"}/`);

//     dispatch({
//       type: myadsConstants.MYADS_GET_BY_ID_SUCCESS,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: myadsConstants.MYADS_GET_BY_ID_FAILED,
//     });
//   }
// };

// // ======================= DEL /myads/1/ =======================
// const deleteMyadsById = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: myadsConstants.MYADS_DEL_BY_ID_REQUEST,
//     });

//     const res = await api.del(`/myads/${id || "1"}/`);

//     if (res) {
//         getMyads()
//     }
//     // dispatch({
//     //   type: myadsConstants.MYADS_DEL_BY_ID_SUCCESS,
//     //   payload: res.data,
//     // });
//   } catch (e) {
//     dispatch({
//       type: myadsConstants.MYADS_DEL_BY_ID_FAILED,
//     });
//   }
// };
