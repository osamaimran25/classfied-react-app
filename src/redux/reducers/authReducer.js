import { authConstants, Suffixes } from "../actionTypes";

const initialState = {
  loading: false,
  error: "",
  success: "",
  token: null,
  userData: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // ======================= POST /login =======================
    case `${authConstants.LOGIN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${authConstants.LOGIN}_${Suffixes.SUCCESS}`:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        loading: false,
      };
    case `${authConstants.LOGIN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${authConstants.CREATE_NEW_USER}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${authConstants.CREATE_NEW_USER}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loading: false,
      };
    case `${authConstants.CREATE_NEW_USER}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
      };
    case `${authConstants.GET_USER_BY_TOKEN}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loading: true,
      };
    case `${authConstants.GET_USER_BY_TOKEN}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case `${authConstants.GET_USER_BY_TOKEN}_${Suffixes.FAILURE}`:
      return {
        ...state,
        loading: false,
        userData: null,
      };
    // case authConstants.LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case authConstants.LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: "login success",
    //     error: "",
    //     userData: action.payload,
    //   };
    // case authConstants.LOGIN_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "login failed",
    //     success: "",
    //   };

    // // ======================= POST /register =======================
    // case authConstants.REGISTRATION_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    // case authConstants.REGISTRATION_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: "registration success",
    //     error: "",
    //     userData: action.payload,
    //   };
    // case authConstants.REGISTRATION_FAILED:
    //   return {
    //     ...state,
    //     loading: false,
    //     error: "registration failed",
    //     success: "",
    //   };

    default:
      return state;
  }
};

export default authReducer;
