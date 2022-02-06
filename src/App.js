import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";

import CustomRoutes from "./CustomRoutes";
import theme from "./theme";

import { login, register } from "./redux/actions";

function App() {
  const dispatch = new useDispatch();

  useEffect(() => {
    // login
    // dispatch(
    //   login({
    //     email: "admin1@gmail.com",
    //     password: "userpassword",
    //   })
    // );
    // register
    // dispatch(
    //   register({
    //     email: "test0@gmail.com",
    //     password: "test0test",
    //     firstName: "fir0st name",
    //     lastName: "las0t name",
    //     phone: "123467709",
    //   })
    // );
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CustomRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
