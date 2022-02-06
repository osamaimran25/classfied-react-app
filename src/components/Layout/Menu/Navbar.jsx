import {
  Button,
  CardMedia,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Select,
  MenuItem,
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppSharpIcon from "@material-ui/icons/ExitToAppSharp";
// import "./Navbar.css";
import "./Navbar.scss";
import Dropdown from "./Dropdown";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InputBase from "@material-ui/core/InputBase";
import logo from "../../../assets/images/Islamic ad.png";
import Login from "../../Auth/Login/Login";
import LoginCall from "../../Auth/Login/LoginCall";
import {
  postAds,
  getPricing,
  getLocations,
  setSelectedLocation,
} from "../../../redux/actions/myadsActions";
import SmsIcon from "@material-ui/icons/Sms";
import DashboardDrawer from "../SecondMenu/MenuDowar";
import {
  getAds,
  getCatOfAds,
  setSearchKeyword,
} from "../../../redux/actions/myadsActions";
import { getUserByToken } from "../../../redux/actions/authActions";

import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "350px",
    border: "1px solid #5c6677",
    ["@media (max-width:860px)"]: {
      width: "250px",
      margin: "20px 0",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    position: "absolute",
    top: "8px",
    right: "0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: "12px",
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const drawarMenu = (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="Dropdown menu" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="feedback" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="contact" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SmsIcon />
      </ListItemIcon>
      <ListItemText primary="All ads" />
    </ListItem>
  </List>
);

const Navbar = ({
  getAds,
  getCatOfAds,
  token,
  getUserByToken,
  locationsData,
  userData,
  getLocations,
  setSearchKeyword,
  setSelectedLocation,
  selectedLocation,
  currentLocation,
  ...props
}) => {
  const [searchQuery, setSearchQuery] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    getUserByToken();
    getLocations();
  }, []);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li:not(#exceptMenu)");

    hamburger.addEventListener("click", () => {
      // Animate Links
      navLinks.classList.toggle("open");

      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      // Hamburger Animation
      hamburger.classList.toggle("toggle");
    });

    links.forEach((link) =>
      link.addEventListener("click", () => {
        // Animate Links
        navLinks.classList.toggle("open");

        links.forEach((linked) => {
          linked.classList.toggle("fade");
        });
        // Hamburger Animation
        hamburger.classList.toggle("toggle");
      })
    );

    window.addEventListener("resize", (event) => {
      if (event.target.innerWidth < 860) {
        navLinks.classList.remove("open");
        links.forEach((link) => {
          link.classList.remove("fade");
        });
        hamburger.classList.remove("toggle");
      }
    });
  }, []);

  const onSearchChange = (e) => {
    // setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
    setSearchKeyword(e.target.value);
    fetchData(e.target.name, e.target.value);
  };
  const keyPress = (e) => {
    // if (e.keyCode == 13) {
    // fetchData(e.target.name, e.target.value);
    // put the login here
    // }
  };

  const fetchData = (key, value) => {
    searchQuery.location = selectedLocation
      ? selectedLocation
      : currentLocation;
    searchQuery.no_of_records_per_page = "100";
    searchQuery.page_num = "1";
    searchQuery.max_price = "";
    searchQuery.min_price = "";
    searchQuery[key] = value;
    // console.log(searchQuery, "searchQuery");
    getCatOfAds(searchQuery);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="topNavContainer">
        <Container style={{ zIndex: "999999" }}>
          <nav id="topNav">
            <div
              className="logo"
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Hidden mdUp>
                <DashboardDrawer>{drawarMenu}</DashboardDrawer>
              </Hidden>
              <Link to="/">
                <CardMedia
                  component="img"
                  image={logo}
                  alt="logo"
                  style={{ width: "70px" }}
                />
              </Link>
            </div>
            <div className="hamburger">
              <div className="line1" />
              <div className="line2" />
              <div className="line3" />
            </div>

            <ul className="nav-links">
              <div
                style={{
                  // paddingRight: "5px",
                  display: "flex",
                  // border: "1px solid red",
                }}
                // className="small_device"
              >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  autoWidth
                  style={{
                    height: 45,
                    borderRadius: 2,
                    width: "60%",
                    marginRight: 15,
                  }}
                  onChange={(e) => {
                    setSelectedLocation(e.target.value);
                  }}
                  value={selectedLocation ? selectedLocation : currentLocation}
                  name="location"
                >
                  {locationsData?.map((item, i) => (
                    <MenuItem key={i} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
                {/* <div
                  className={classes.search}
                  style={{ width: "150px", marginRight: "6px" }}
                  id="locationInput"
                >
                  <InputBase
                    placeholder="Location"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "Location" }}
                  />
                  <div className={classes.searchIcon}>
                    <LocationOnIcon color="primary" />
                  </div>
                </div> */}
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search items"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    name="search_text"
                    onChange={onSearchChange}
                    onKeyDown={keyPress}
                    inputProps={{ "aria-label": "search" }}
                  />
                  <div className={classes.searchIcon}>
                    <SearchIcon color="primary" onClick={fetchData} />
                  </div>
                </div>
              </div>

              <div
                style={{ display: "flex", alignItems: "center" }}
                className="small_device"
              >
                <li className="customMenu">
                  <NavLink activeClassName="activeRoute" to="/chat">
                    <SmsIcon />
                  </NavLink>
                </li>
                {/* {user?.email ? (
                  <li className="customMenu">
                    <Dropdown />
                  </li>
                ) : ( */}
                <li className="customMenu">
                  {!userData ? (
                    <Link
                      activeClassName="activeRoute"
                      to=""
                      onClick={() => null}
                    >
                      <Login />
                    </Link>
                  ) : (
                    <div>Hey, {userData?.user_details.first_name}</div>
                  )}
                </li>
                {/* )} */}

                {/* <Link to="/createAds" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    style={{ borderRadius: "20px", padding: "8px 15px" }}
                  >
                    <AddIcon /> Post an Ad
                  </Button>
                </Link> */}
                {/* <Link
                  to="/adsCreate"
                  style={{ marginLeft: "10px", textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    style={{
                      borderRadius: "20px",
                      padding: "8px 15px",
                      backgroundColor: "#3f4fd6",
                      color: "#fff",
                    }}
                    className="common_Button"
                  >
                    <AddIcon /> Post an Ad
                  </Button>
                </Link> */}

                {/* {userData && ( */}
                {/* <Link
                  to="/adsCreate"
                  style={{ marginLeft: "10px", textDecoration: "none" }}
                > */}
                <Button
                  variant="outlined"
                  className="cta"
                  onClick={() => {
                    if (userData) {
                      props.history.push("/adsCreate");
                    } else {
                      setIsOpen(true);
                    }
                  }}
                >
                  <span>
                    <AddIcon /> Post an Ad
                  </span>
                </Button>
                {userData && (
                  <Button
                    variant="outlined"
                    className="cta"
                    style={{ marginLeft: "10px" }}
                    onClick={() => {
                      if (userData) {
                        localStorage.clear();
                        getUserByToken();
                        // props.history.push("/adsCreate");
                      } else {
                        // setIsOpen(true);
                      }
                    }}
                  >
                    <span>
                      <ExitToAppSharpIcon /> Logout
                    </span>
                  </Button>
                )}
                {/* </Link> */}
                <LoginCall isOpen={isOpen} setIsOpen={setIsOpen} />
              </div>
            </ul>
          </nav>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, myads }) => ({
  token: auth.token,
  locationsData: myads.locationsData,
  userData: auth.userData,
  selectedLocation: myads.selectedLocation,
  currentLocation: myads.currentLocation[0]?.current_location,
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedLocation: (location) => dispatch(setSelectedLocation(location)),
  getLocations: () => dispatch(getLocations()),

  setSearchKeyword: (text) => dispatch(setSearchKeyword(text)),
  getCatOfAds: (data) => dispatch(getCatOfAds(data)),
  getUserByToken: () => dispatch(getUserByToken()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
