import { categoryConstants, Suffixes } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  loadingSubCategory: false,
  success: "",
  categoryData: [],
  subCategoryData: [],
  categoryFields: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${categoryConstants.GET_CATEGORIES}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${categoryConstants.GET_CATEGORIES}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        categoryData: action.payload,
      };
    case `${categoryConstants.GET_CATEGORIES}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${categoryConstants.GET_SUB_CATEGORIES}_${Suffixes.REQUEST}`:
      return {
        ...state,
        subCategoryData: [],

        loadingSubCategory: true,
      };
    case `${categoryConstants.GET_SUB_CATEGORIES}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loadingSubCategory: false,
        subCategoryData: action.payload,
      };
    case `${categoryConstants.GET_SUB_CATEGORIES}_${Suffixes.FAILURE}`:
      return {
        ...state,
        subCategoryData: [],
        loadingSubCategory: false,
      };
    case `${categoryConstants.GET_CATEGORY_FIELDS}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${categoryConstants.GET_CATEGORY_FIELDS}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
        categoryFields: action.payload,
      };
    case `${categoryConstants.GET_CATEGORY_FIELDS}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    // ======================= GET /category/ =======================
    // case categoryConstants.CATEGORY_GET_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case categoryConstants.CATEGORY_GET_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: "get category success",
    //     error: "",
    //     categoryData: action.payload,
    //   };
    // case categoryConstants.CATEGORY_GET_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "unable to get category data",
    //     success: "",
    //   };

    default:
      return state;
  }
};

export default categoryReducer;
