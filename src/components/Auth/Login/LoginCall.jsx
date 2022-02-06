import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Grid,
  IconButton,
  Dialog,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
// import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import { useEffect, useState } from "react";
import LoginCarousel from "./LoginCarousel";
import facebookIcon from "../../../assets/login/facebook.png";
import googleIcon from "../../../assets/login/google.png";
import logo from "../../../assets/images/Islamic ad.png";
import "./Login.scss";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
// import RegisterDailog from "./RegisterDailog";
import { connect } from "react-redux";
// import { login, createNewUser } from "../../../redux/actions";
import { login, createNewUser } from "../../../redux/actions";
import { getUserByToken } from "../../../redux/actions/authActions";

// import phone input package
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Message from "../../../HOC/Massege";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const LoginCall = ({ setIsOpen, isOpen, ...props }) => {
  // const [open, setOpen] = useState(false);
  const [notUser, setNotUser] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [newRegister, setRegister] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [phone, setPhone] = useState({
    phone: "Pakistan",
  });

  const handleClickOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  // user login handle is here
  const handleLogin = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };
  // login submit button here
  const handleSubmit = () => {
    props.login({ email: user.email, password: user.password }).then((res) => {
      props.getUserByToken();
      // if (success) {
      setIsOpen(false);

      // }
    });
  };

  // user register handle is here
  const createUser = (prop) => (event) => {
    setRegister({ ...newRegister, [prop]: event.target.value });
  };

  // create new user submit button is here
  const createUserData = () => {
    console.log(newRegister, "sssssssssssssssss");
    let finalData = {
      email: newRegister.email,
      password: newRegister.password,
      user_details: {
        first_name: newRegister.firstName,
        last_name: newRegister.lastName,
        contact_number: phone.phone,
      },
    };
    props.createNewUser(finalData).then((res) => {
      setNotUser(false);
    });
    // if (success) {
    //   setNotUser(false);
    // }
  };

  const loginCode = (
    <>
      <div>
        <LoginCarousel />
      </div>

      <div>
        <div className="LoginInput_wrapper">
          <TextField
            variant="outlined"
            placeholder="Enter your Email address here"
            onChange={handleLogin("email")}
            fullWidth
            type="email"
            name="email"
            value={user.email}
            className="adsInput"
          />
        </div>

        <div className="LoginInput_wrapper">
          <TextField
            variant="outlined"
            placeholder="Enter your password here"
            onChange={handleLogin("password")}
            fullWidth
            type="password"
            name="password"
            value={user.password}
            className="adsInput"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {props.loading ? (
            <CircularProgress />
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="loginButton"
              onClick={handleSubmit}
            >
              Login
            </Button>
          )}
        </div>
      </div>

      <div className="login_wrapper">
        <Button variant="outlined" color="default" className="google_Button">
          <span>
            <img src={facebookIcon} alt="facebook" />
          </span>
          Facebook
        </Button>
        <Button
          variant="outlined"
          color="default"
          style={{ marginLeft: "6px" }}
          className="facebook_Button"
        >
          <span>
            <img src={googleIcon} alt="facebook" />
          </span>
          Google
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h4>or</h4>
        <Button
          variant="text"
          color="primary"
          onClick={() => setNotUser(!notUser)}
        >
          Signup
        </Button>
      </div>
      <div style={{ textAlign: "center", margin: "15px 0" }}>
        <Typography variant="subtitle1">
          We won't share your personal details with anyone
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ marginTop: "10px", color: "#002f34a3" }}
        >
          If you continue, you are accepting
          <Link to="/" style={{ margin: "0 6px" }}>
            Terms and Conditions
          </Link>
          and
          <Link to="/" style={{ marginLeft: "6px" }}>
            Privacy Policy
          </Link>
        </Typography>
      </div>
    </>
  );

  const registerCode = (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="register page"
          style={{ width: "10%", margin: "0 auto" }}
        />
        <Typography
          variant="h6"
          color="initial"
          style={{ marginTop: "15px ", fontWidth: "700" }}
        >
          Please signup and enjoy
        </Typography>
      </div>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <div style={{ margin: "20px 0" }}>
          <Grid container spacing={1} style={{ margin: "10px 0" }}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={newRegister.firstName}
                onChange={createUser("firstName")}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={newRegister.lastName}
                onChange={createUser("lastName")}
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>

          <div style={{ margin: "10px 0" }}>
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              value={newRegister.email}
              onChange={createUser("email")}
              variant="outlined"
              fullWidth
            />
          </div>

          <div style={{ margin: "10px 0" }}>
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={newRegister.password}
              onChange={createUser("password")}
              variant="outlined"
              fullWidth
            />
          </div>

          {/* Phone Number */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <PhoneInput
              country={"us"}
              value={phone.phone}
              onChange={(phone) => setPhone({ phone })}
              id="box_input1"
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {props.loading ? (
              <CircularProgress />
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="loginButton"
                onClick={createUserData}
              >
                Signup
              </Button>
            )}
          </div>
          {/* <RegisterDailog email={email} /> */}
        </div>
        <div>
          <Typography
            variant="subtitle2"
            color="initial"
            style={{ margin: "15px", textAlign: "center" }}
          >
            We won't reveal your email to anyone else nor use it to send you
            spam
          </Typography>
        </div>
      </div>
    </>
  );

  return (
    <div>
      {/* {success && (
        <Message
          msg={success}
          duration="2000"
          severity="success"
          position="right"
        />
      )}
      {userSuccess && (
        <Message
          msg={userSuccess.message}
          duration="2000"
          severity="success"
          position="right"
        />
      )} */}
      <div>
        <p variant="text" color="primary" onClick={handleClickOpen}>
          {/* Login / Signup */}
        </p>
        {/* {props.token ? (
          <p variant="text" color="primary" onClick={handleClickOpen}>
            Login / Signup
          </p>
        ) : (
          <p
            variant="text"
            color="primary"
            onClick={() => {
              // alert("hi");
            }}
          >
            Logout
          </p>
        )} */}
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {!notUser ? (
            <>
              <Typography
                variant="h6"
                style={{ color: "#002f34", fontWeight: "700" }}
              >
                User Login
              </Typography>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setNotUser(!notUser)}
              >
                <KeyboardBackspaceIcon />
              </Button>
            </>
          )}
        </DialogTitle>
        <DialogContent dividers>
          {!notUser ? <> {loginCode}</> : <> {registerCode}</>}
        </DialogContent>
      </Dialog>
    </div>
  );
};

// export default connect(
//   (state) => ({
//     success: state.auth.success,
//     users: state.auth.userData.user,
//     userSuccess: state.auth.userData,
//   }),
//   { login, createNewUser }
// )(Login);
const mapStateToProps = ({ auth }) => ({
  token: auth.token,
  loading: auth.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  createNewUser: (data) => dispatch(createNewUser(data)),
  getUserByToken: () => dispatch(getUserByToken()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginCall);
