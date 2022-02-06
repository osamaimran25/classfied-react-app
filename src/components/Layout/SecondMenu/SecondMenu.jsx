import { Link } from "react-router-dom";
import "./SecondMenu.scss";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DashboardDrawer from "./MenuDowar";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  purchaseOne,
  purchaseTwo,
  purchaseThree,
  purchaseFour,
  CarsAndVehiclesOne,
  CarsAndVehiclesTwo,
  CarsAndVehiclesThree,
  CarsAndVehiclesFour,
  PropertyOne,
  PropertyTwo,
  PropertyThree,
  PropertyFour,
  JobOne,
  JobTwo,
  JobThree,
  JobFour,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
  ServicesFour,
  WholesaleOne,
  WholesaleTwo,
  WholesaleThree,
  WholesaleFour,
} from "./MenuList";

import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import NaturePeopleIcon from "@material-ui/icons/NaturePeople";
import WorkIcon from "@material-ui/icons/Work";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import WhereToVoteIcon from "@material-ui/icons/WhereToVote";
import ReactDrawer from "../SecondMenu/ReactDrawer";
const drawarMenu = (
  <List component="nav" aria-label="main mailbox folders">
    <ListItem button>
      <ListItemIcon>
        <EmojiTransportationIcon />
      </ListItemIcon>
      <ListItemText primary="Cars ane vehicles" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShopTwoIcon />
      </ListItemIcon>
      <ListItemText primary="For purchase" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NaturePeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Property" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="Jobs" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Services" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WhereToVoteIcon />
      </ListItemIcon>
      <ListItemText primary="Wholesale" />
    </ListItem>
  </List>
);

const SecondMenu = () => {
  return (
    <div style={{ position: "relative" }}>
      <span className="small_device_dropdown">
        {/* <DashboardDrawer>{drawarMenu}</DashboardDrawer> */}
        <ReactDrawer />
      </span>
      <nav className="megaMenu">
        <div className="mega__wrapper">
          <ul className="mega__nav-links">
            <label for="mega__close-btn" className="btn mega__close-btn">
              <i className="fas fa-times"></i>
            </label>
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon">
                  <EmojiTransportationIcon
                    style={{ fontSize: "18px", color: "#000" }}
                  />
                </span>
                <span style={{ margin: "0 6px" }}>Cars and vehicles</span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {CarsAndVehiclesFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 2nd menu start here */}

            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon1">
                  <ShopTwoIcon style={{ fontSize: "18px", color: "#000" }} />
                </span>

                <span style={{ margin: "0 6px" }}>For purchase</span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {purchaseFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* 3rd menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon2">
                  <NaturePeopleIcon
                    style={{ fontSize: "15px", color: "#000" }}
                  />
                </span>

                <span style={{ margin: "0 6px" }}>Property</span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {PropertyFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* 4th menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon3">
                  <WorkIcon style={{ fontSize: "15px", color: "#000" }} />
                </span>

                <span style={{ margin: "0 6px" }}> Jobs </span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {JobOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {JobTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {JobThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {JobFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* 5th menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon4">
                  <AddShoppingCartIcon
                    style={{ fontSize: "15px", color: "#000" }}
                  />
                </span>

                <span style={{ margin: "0 6px" }}> Services </span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {ServicesOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {ServicesTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {ServicesThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {ServicesFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* 6th menu */}
            <li>
              <Link onClick={() => null} className="mega__desktop-item">
                <span className="secondMenu_icon5">
                  <WhereToVoteIcon
                    style={{ fontSize: "15px", color: "#000" }}
                  />
                </span>

                <span style={{ margin: "0 6px" }}> Wholesale </span>
                <ExpandMoreIcon style={{ fontSize: "18px" }} />
              </Link>
              <div className="mega__mega-box">
                <div className="mega__content">
                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {WholesaleOne?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {WholesaleTwo?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {WholesaleThree?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mega__row">
                    <ul className="mega__mega-links">
                      {WholesaleFour?.map((el) => (
                        <li>
                          <Link onClick={() => null}>{el.menu}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <label for="mega__menu-btn" className="mega__btn mega__menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default SecondMenu;
