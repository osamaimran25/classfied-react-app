import { Typography } from "@material-ui/core";
// import slider
import ProductSlider from "../../../shared/ProductSlider/ProductSlider";
import Readmore from "../../../HOC/Readmore";
//  css file import
import "./ProductInfo.scss";
import { connect } from "react-redux";

const ProductInfo = ({ addDetail }) => {
  return (
    <section className="ProductInfo" style={{ zIndex: "9999999" }}>
      <ProductSlider addDetail={addDetail} />
      <div className="ProductInfo--content">
        <div className="ProductInfo--content--description">
          <h2 style={{ marginBottom: "10px" }}>Description</h2>
          <>
            <Typography variant="h6">
              <Readmore number="150">{addDetail?.description}</Readmore>
            </Typography>
          </>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ({ myads }) => ({
  addDetail: myads.addDetail,
});

const mapDispatchToProps = (dispatch) => ({
  // getAddDetails: (id) => dispatch(getAddDetails(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);

// category: 1
// category_name: "vehicle"
// date_posted: "2021-03-17T17:32:49.394400Z"
// description: "Brand new cars is coming soon"
// email: "admin1@gmail.com"
// featured: true
// featured_expired: null
// id: 5
// image_01: null
// image_02: null
// image_03: null
// image_04: null
// image_05: null
// item: [{…}]
// location_details: null
// locations: null
// phone: 876655
// price: null
// spotlight: true
// spotlight_expired: null
// title: "Laptop"
// total: 800
// user: 1
// user_email: "admin1@gmail.com"
// viewed: false
