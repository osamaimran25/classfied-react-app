import axios from "axios";
import { post, get } from "../../requests";
import { authConstants } from "../actionTypes";

// ======================= POST /login =======================

export const login = (data) => {
  return {
    type: `${authConstants.LOGIN}`,
    payload: post("/login", data),
  };
};
export const createNewUser = (data) => {
  return {
    type: `${authConstants.CREATE_NEW_USER}`,
    payload: post("/register", data),
  };
};
export const getUserByToken = () => {
  return {
    type: `${authConstants.GET_USER_BY_TOKEN}`,
    payload: get("/current/me"),
  };
};

// export const login = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: authConstants.LOGIN_REQUEST,
//     });
//     console.log(data);

//     const { email, password } = data;
//     const user = { email, password };
//     // console.log(user);

//     const res = await api.post(`/login`, user);

//     if (res.status === 200) {
//       const { token, message } = res.data;
//       localStorage.setItem("token", token);

//       // const userResponse = await api.get(`/current/me`, token);
//       // localStorage.setItem("user", JSON.stringify(userResponse.data));

//       console.log(res);
//       const user = jwt.decode(token);
//       dispatch({
//         type: authConstants.LOGIN_SUCCESS,
//         // payload: { token, message, user: userResponse.data
//         payload: { user, message },
//       });
//     } else {
//       dispatch({
//         type: authConstants.LOGIN_FAILED,
//         payload: { error: res.data.non_field_errors },
//       });
//     }
//   } catch (err) {
//     dispatch({
//       type: authConstants.LOGIN_FAILED,
//       payload: { error: err.message },
//     });
//   }
// };

// ======================= POST /register =======================
// export const createNewUser = (data) => async (dispatch) => {
//   dispatch({ type: authConstants.REGISTRATION_REQUEST });
//   const { email, password, firstName, lastName, phone } = data;

//   const user = {
//     email,
//     password,
//     user_details: {
//       first_name: firstName,
//       last_name: lastName,
//       contact_number: phone,
//     },
//   };
//   const res = await api.post("/register", user);

//   console.log(res);

//   if (res.status === 200) {
//     const { message } = res.data;

//     dispatch({
//       type: authConstants.REGISTRATION_SUCCESS,
//       payload: { message },
//     });
//   } else if (res.status === 400) {
//     console.log(res);
//     dispatch({
//       type: authConstants.REGISTRATION_FAILED,
//       payload: { error: res.data.error },
//     });
//   }
// };
