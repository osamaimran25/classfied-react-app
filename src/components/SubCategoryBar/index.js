import { connect } from "react-redux";
import SubCategoryBar from "./SubCategoryBar";

const mapStateToProps = ({ common }) => ({
  // authType: common.authType,
  // userType: common.userType,
});

const mapDispatchToProps = (dispatch) => ({
  //   login: (username, password) => dispatch(login(username, password)),
  //   setLanguage: (lang) => dispatch(setLanguage(lang)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryBar);
