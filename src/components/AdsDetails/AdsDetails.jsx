import React, { useEffect } from "react";
import ProductInfo from "./ProductInfo/ProductInfo";
import SellerInfo from "./SellarInfo/SellerInfo";
import { Grid, Typography } from "@material-ui/core";
// import css file
import "./AdsDetailsStyle.scss";
import Layout from "../Layout";
import AdsSuggetions from "./AdsSuggetions/AdsSuggetions";
import { connect } from "react-redux";
import { getAddDetails } from "../../redux/actions/myadsActions";
import { useParams } from "react-router";

const AdsDetails = ({ getAddDetails, addDetail }) => {
  const { id } = useParams();

  useEffect(() => {
    getAddDetails(id);
  }, []);

  return (
    <Layout>
      <div className="AdsDetails ">
        <div className="AdsDetails-content">
          <Grid container direction="row" justify="center">
            <Grid item lg={8} md={7}>
              <ProductInfo addDetail={addDetail} />
            </Grid>
            <Grid item lg={4} md={5} sm={12} display="flex" justify="flex-end">
              <SellerInfo addDetail={addDetail} />
            </Grid>
          </Grid>

          {/* <div style={{ padding: "50px 0" }}>
            <div style={{ margin: "15px 0" }}>
              <Typography variant="h5" style={{ fontWeight: "600" }}>
                Ads Suggestions
              </Typography>
            </div>
            <div>
              <AdsSuggetions />
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ myads }) => ({
  addDetail: myads.addDetail,
});

const mapDispatchToProps = (dispatch) => ({
  getAddDetails: (id) => dispatch(getAddDetails(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdsDetails);
