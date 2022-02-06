import React, { useEffect } from "react";
import { BrowserRouter, withRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import { connect } from "react-redux";
import AdsDetails from "./components/AdsDetails/AdsDetails";
import Chat from "./components/Chat";
import CreateAds from "./components/CreactAds/CreateAds";
import Dashboard from "./components/Dashboard/Dashboard";
import AdsCreate from "./components/AdsCreate/AdsCreate";
import { getUserByToken } from "./redux/actions/authActions";

const Routes = ({ userData }) => {
  useEffect(() => {
    getUserByToken();
  }, []);
  return (
    <>
      {userData != null ? (
        <Switch>
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/helpcenter" component={HelpCenter} />
          <Route path="/adsDetails/:id" component={AdsDetails} />
          <Route exact path="/createAds" component={CreateAds} />
          <Route exact path="/adsCreate" component={AdsCreate} />
          <Route exact path="/dashboard/profile" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />

          {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/myalert" component={MyAlert} />
        <Route exact path="/manageads" component={ManageMyAds} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/recent" component={Recent} /> */}

          <Route exact path="/" component={Home} />

          <Route path="*">
            <div>
              <h1>page not found1</h1>
            </div>
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/helpcenter" component={HelpCenter} />
          <Route exact path="/adsDetails/:id" component={AdsDetails} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/adsCreate" component={AdsCreate} />

          {/* <Route exact path="/profile" component={Profile} />
        <Route exact path="/myalert" component={MyAlert} />
        <Route exact path="/manageads" component={ManageMyAds} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/recent" component={Recent} /> */}

          <Route exact path="/" component={Home} />
          <Route path="*">
            <div>
              <h1>page not found2</h1>
            </div>
          </Route>
        </Switch>
      )}
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  token: auth.token,
  userData: auth.userData,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getUserByToken: () => dispatch(getUserByToken()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
