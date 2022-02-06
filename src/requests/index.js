import axios from "axios";
import config from "../config";

export async function get(url = "", queryParams) {
  let headers = {
    "Content-Type": "application/json",
  };
  if (localStorage.getItem("token")) {
    headers["Authorization"] = "bearer " + localStorage.getItem("token");
  }
  const response = await axios.get(`${config.api}${url}`, {
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: headers,
  });

  return response.data;
}

export async function post(url = "", data = {}) {
  const response = await axios.post(`${config.api}${url}`, data, {
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "bearer " + localStorage.getItem("token")
          ? localStorage.getItem("token")
          : "",
    },
  });
  return response.data;
}

export async function postAdsRequest(url = "", formdata) {
  const response = await axios.post(`${config.api}${url}`, formdata, {
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  });

  return response.data;
  // // let tempPath = imageData.path;
  // // var filename = tempPath.replace(/^.*[\\\/]/, "");
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "multipart/form-data");
  // myHeaders.append(
  //   "Authorization",
  //   "bearer " + localStorage.getItem("token")
  //     ? localStorage.getItem("token")
  //     : ""
  // );

  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: formdata,
  //   redirect: "follow",
  // };
  // const urll = `${config.api}${url}`;
  // console.log("Hi its sent ");
  // const response = await fetch(urll, requestOptions);
  // if (response.status === 200) {
  //   const res = await response.json();
  //   return res;
  // } else {
  //   const res = await response.json();
  //   throw new Error(res.data.message);
  // }
}

// export async function passwordResetRequest(url = '', data = {}) {
//   const response = await fetch(`${baseUrl}${url}`, {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization:
//         'bearer ' + (await AsyncStorage.getItem('resetPasswordToken')),
//     },
//     body: JSON.stringify(data),
//   });

//   if (response.status === 200) {
//     const res = await response.json();
//     return res;
//   } else {
//     const res = await response.json();
//     throw new Error(res.data.message);
//   }
// }
