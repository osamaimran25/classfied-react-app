import { myadsConstants, Suffixes } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  myAdsList: { data: [] },
  searchedAdsList: { data: [] },
  searchQuery: "",
  pricingDetails: [],
  locationsData: [],
  currentLocation: [],
  selectedLocation: null,
  myadsSingleData: [],
  addDetail: null,
};

const myadsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${myadsConstants.POST_ADD}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${myadsConstants.POST_ADD}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
      };
    case `${myadsConstants.POST_ADD}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${myadsConstants.GET_PRICING}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
        pricingDetails: [],
      };
    case `${myadsConstants.GET_PRICING}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        pricingDetails: action.payload,
      };
    case `${myadsConstants.GET_PRICING}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        pricingDetails: [],
      };
    case `${myadsConstants.GET_LOCATIONS}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
        currentLocation: [],
        locationsData: [],
      };
    case `${myadsConstants.GET_LOCATIONS}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        locationsData: action.payload,
        currentLocation: action.payload.splice(-1),
      };
    case `${myadsConstants.GET_LOCATIONS}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        locationsData: [],
        currentLocation: [],
      };
    case `${myadsConstants.SET_SELECTED_LOCATION}`:
      return {
        ...state,
        selectedLocation: action.location,
      };
    case `${myadsConstants.GET_ADDS}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
        myAdsList: { data: [] }, // remove it salman
      };
    case `${myadsConstants.GET_ADDS}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        myAdsList: {
          ...state.myAds,
          data: state.myAdsList.data.concat(action.payload.data),
        },
      };
    case `${myadsConstants.GET_ADDS}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${myadsConstants.GET_CAT_OF_ADDS}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${myadsConstants.GET_CAT_OF_ADDS}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        searchedAdsList: {
          ...state.myAds,
          data: action.payload.data,
          // data: state.searchedAdsList.data.concat(action.payload.data),
        },
      };
    case `${myadsConstants.GET_CAT_OF_ADDS}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${myadsConstants.SET_SEARCH_KEYWORD}`:
      return {
        ...state,
        searchQuery: action.text,
      };
    case `${myadsConstants.GET_ADD_DETAILS}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
        addDetail: null,
      };
    case `${myadsConstants.GET_ADD_DETAILS}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        addDetail: action.payload,
      };
    case `${myadsConstants.GET_ADD_DETAILS}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        addDetail: null,
      };
    // ======================= GET /myads/ =======================
    // case myadsConstants.MYADS_GET_REQUEST:
    //     return {
    //       ...state,
    //       loading: true,
    //     };
    //   case myadsConstants.MYADS_GET_SUCCESS:
    //     return {
    //       ...state,
    //       loading: false,
    //       success: "get myads success",
    //       error: "",
    //       myadsData: action.payload,
    //     };
    //   case myadsConstants.MYADS_GET_FAILED:
    //     return {
    //       ...state,
    //       loading: false,
    //       error: "unable to get myads data",
    //       success: "",
    //     };

    //   // ======================= GET /myads/1/ =======================
    // case myadsConstants.MYADS_GET_BY_ID_REQUEST:
    //     return {
    //       ...state,
    //       loading: true,
    //     };
    //   case myadsConstants.MYADS_GET_BY_ID_SUCCESS:
    //     return {
    //       ...state,
    //       loading: false,
    //       success: "get myads success",
    //       error: "",
    //       myadsSingleData: action.payload,
    //     };
    //   case myadsConstants.MYADS_GET_BY_ID_FAILED:
    //     return {
    //       ...state,
    //       loading: false,
    //       error: "unable to get myads data",
    //       success: "",
    //     };

    default:
      return state;
  }
};

export default myadsReducer;
