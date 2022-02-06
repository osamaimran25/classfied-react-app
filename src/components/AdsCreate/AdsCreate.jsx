import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  CircularProgress,
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import ImageUploder from "../../common/ImageUploder";
import {
  getCategories,
  getSubCategories,
  getCategoryFields,
} from "../../redux/actions/categoryActions";
import {
  postAds,
  getPricing,
  getLocations,
} from "../../redux/actions/myadsActions";
import Checkbox from "@material-ui/core/Checkbox";
import CategoryBar from "../../components/CategoryBar";
import Chip from "@material-ui/core/Chip";
import SubCategoryBar from "../../components/SubCategoryBar";
import { snakeToSentence } from "../../utils";

import Layout from "../Layout";
import "./AdsCreate.scss";
import { CodeSharp } from "@material-ui/icons";

const locations = [
  { id: 1, title: "location 1" },
  { id: 2, title: "location 2" },
  { id: 3, title: "location 3" },
  { id: 4, title: "location 4" },
  { id: 5, title: "location 5" },
  { id: 6, title: "location 6" },
  { id: 7, title: "location 7" },
  { id: 8, title: "location 8" },
];

const AdsCreate = ({
  postAds,
  user,
  getCategories,
  getSubCategories,
  categoryData,
  subCategoryData,
  getCategoryFields,
  categoryFields,
  pricingDetails,
  loadingSubCategory,
  loading,
  userData,
  getPricing,
  getLocations,
  locationsData,
  ...props
}) => {
  const [categorys, setCategorys] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [isFeaturedSelected, setIsFeaturedSelected] = useState(false);
  const [totalPriceAllIncluded, setTotalPriceAllIncluded] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);
  const [featuredPrice, setFeaturedPrice] = useState(0);
  const [data, setData] = useState({
    image: [],
  });
  const [dynamicData, setDynamicData] = useState({});
  const [featuredDays, setFeaturedDays] = useState();

  useEffect(() => {
    if (isFeaturedSelected) {
      let t = totalPrice + featuredPrice.amount;
      setTotalPriceAllIncluded(t);
    } else {
      setTotalPriceAllIncluded(totalPrice);
    }
  }, [totalPrice, isFeaturedSelected, featuredPrice]);

  useEffect(() => {
    if (userData) {
      getCategories();
      getLocations();
      getPricing().then((res) => {
        setFeaturedDays(res.value[0]?.validity);
      });
    } else {
      props.history.goBack();
    }
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      getSubCategories(selectedCategoryId);
      setSelectedSubCategoryId(null);
      setCategorys(false);
    }
  }, [selectedCategoryId]);

  const Files = (files) => {
    setData({ ...data, image: files });
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const onCheckboxPress = (name, value, validity, amount) => {
    if (name == "urgent" || name == "bargain") {
      setData({ ...data, [name]: value });
      if (value == true) {
        setTotalPrice((totalPrice) => totalPrice + amount);
      } else {
        setTotalPrice((totalPrice) => totalPrice - amount);
      }
    } else {
      if (value == true) {
        setData({ ...data, [name]: validity });
        setFeaturedDays(pricingDetails[0]?.validity);
        let tempPricee = pricingDetails.find((dea) => {
          if (dea.validity == validity) {
            return dea.amount;
          }
        });
        setFeaturedPrice(tempPricee);
      } else {
        setData({ ...data, [name]: false });
      }
    }
  };

  const onChangeDynamicData = (e) => {
    setDynamicData({ ...dynamicData, [e.target.name]: e.target.value });
  };
  console.log({ data, totalPrice }, "salman");
  const handleSubmit = () => {
    let items = [];
    Object.keys(dynamicData).map((key) => {
      let temp = {};
      temp.name = key;
      temp.value = dynamicData[key];
      items.push(temp);
    });
    data.items = JSON.stringify(items);
    data.image.map((img, i) => {
      if (i == 0) {
        data.image_01 = img;
      } else if (i == 1) {
        data.image_02 = img;
      } else if (i == 2) {
        data.image_03 = img;
      } else if (i == 3) {
        data.image_04 = img;
      } else if (i == 4) {
        data.image_05 = img;
      }
    });
    if (data.image.length > 0) {
      postAds(data).then((res) => {
        props.history.push("/");
      });
    } else {
      alert("Please select atleast one image");
    }
  };
  return (
    <Layout hindMenu>
      <div className="ads_create_wrapper">
        <Container>
          <Typography
            variant="h6"
            style={{
              color: "#002f34",
              fontWeight: "700",
              marginBottom: "15px",
            }}
          >
            Post an ad
          </Typography>
          {/* category option here */}
          <Grid container item spacing={2}>
            <Card style={{ width: "100%" }}>
              <CardContent style={{ background: "#2f3a51" }}>
                <Typography
                  variant="h6"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  Category
                </Typography>
              </CardContent>
              <Divider />
              <CardContent>
                <Grid item md={6} sm={10} xs={12}>
                  <div className="adsInput_create_wrapper">
                    <Typography
                      variant="subtitle1"
                      style={{ fontWeight: "600" }}
                    >
                      Tell us what you are posting:
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div>
                        {categoryData?.map((item) => (
                          <CategoryBar
                            item={item}
                            selectedCategoryId={selectedCategoryId}
                            setSelectedCategoryId={setSelectedCategoryId}
                          />
                        ))}
                      </div>
                      <div>
                        {subCategoryData?.map((item) => (
                          <SubCategoryBar
                            item={item}
                            selectedSubCategoryId={selectedSubCategoryId}
                            setSelectedSubCategoryId={setSelectedSubCategoryId}
                            setCategorys={setCategorys}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </Grid>
              </CardContent>
            </Card>
            {selectedSubCategoryId && (
              <Button
                variant="contained"
                color="secondary"
                style={{ marginTop: "20px" }}
                onClick={() => {
                  getCategoryFields(selectedSubCategoryId).then((res) => {
                    setCategorys(true);
                  });
                }}
              >
                Continue
              </Button>
            )}
          </Grid>

          {categorys && (
            <>
              {/* Location option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        Title <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid item md={12} sm={12} xs={12}>
                        <div className="adsInput_create_wrapper">
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "600" }}
                          >
                            Enter your ads Title here:
                            <span
                              style={{ color: "red", marginBottom: "15px" }}
                            >
                              *
                            </span>
                          </Typography>
                          <TextField
                            variant="outlined"
                            placeholder="Ads Title here"
                            onChange={onChange}
                            fullWidth
                            name="title"
                            value={data.title}
                            className="adsInput"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        Location
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent style={{ padding: "10px" }}>
                      <Grid item md={12} sm={12} xs={12}>
                        <div className="adsInput_create_wrapper">
                          <Typography
                            variant="subtitle1"
                            style={{ fontWeight: "600" }}
                          >
                            Select location
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <FormControl
                            variant="outlined"
                            fullWidth
                            style={{ margin: "0" }}
                          >
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              onChange={onChange}
                              // value={data.category}
                              name="location"
                              className="adsInput_create"
                            >
                              <MenuItem key={0} value={""}>
                                Select a location
                              </MenuItem>

                              {locationsData?.map((item) => (
                                <MenuItem key={item} value={item}>
                                  {item}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* images option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Images <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Grid item md={10} sm={12} xs={12}>
                      <div
                        style={{
                          margin: "15px 0",
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            margin: "10px 0",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="subtitle1">
                            Ads Image<span style={{ color: "red" }}>*</span>
                          </Typography>
                          <Typography variant="subtitle2" color="primary">
                            Max 5 media files you can Upload
                          </Typography>
                        </div>
                        <ImageUploder
                          setFiles={Files}
                          files={data.image}
                          maxSize={10}
                          maxFile={5}
                          dropzoneText="Drag and drop files here or click"
                        />
                      </div>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              {/* description option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        Description <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid item md={12} sm={12} xs={12}>
                        <div style={{ margin: "15px 0" }}>
                          <TextField
                            variant="outlined"
                            multiline
                            rows={1}
                            placeholder="Enter ads description here"
                            onChange={onChange}
                            fullWidth
                            name="description"
                            value={data.description}
                            className="adsInput"
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                {/* price option here */}

                <Grid item md={6} sm={12} xs={12}>
                  <Card style={{ width: "100%" }}>
                    <CardContent style={{ background: "#2f3a51" }}>
                      <Typography
                        variant="h6"
                        style={{ color: "#fff", fontWeight: "700" }}
                      >
                        How much do you want for your item?
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                    </CardContent>
                    <Divider />
                    <CardContent>
                      <Grid item md={12} sm={12} xs={12}>
                        <div>
                          <Typography variant="subtitle1" gutterBottom>
                            Price <span style={{ color: "red" }}>*</span>
                          </Typography>
                          <TextField
                            variant="outlined"
                            placeholder="Enter ads price here"
                            onChange={onChange}
                            fullWidth
                            name="price"
                            value={data.price}
                          />
                        </div>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {/* promote option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Make your ad stand out!
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid item md={8} sm={12} xs={12}>
                      <div className="adsInput_wrapper">
                        <Typography variant="subtitle1">coming soon</Typography>
                      </div>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Pricing
                      {/* <span style={{ color: "red" }}>*</span> */}
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid item md={12} sm={12} xs={12}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="adsInput_wrapper">
                          <Checkbox
                            name="featured"
                            inputProps={{ "aria-label": "Checkbox A" }}
                            onChange={(e) => {
                              setIsFeaturedSelected(e.target.checked);
                              onCheckboxPress(
                                e.target.name,
                                e.target.checked,
                                pricingDetails[0]?.validity
                              );
                            }}
                          />
                          <Chip
                            label="FEATURED"
                            // color="secondary"
                            style={{ color: "blue", marginRight: 15 }}
                          />
                          Your ad will appear in the homepage for 3, 7, or 14
                          days.
                        </div>
                        <div
                          style={{
                            // border: "1px solid red",
                            fontWeight: "500",
                            paddingRight: 25,
                          }}
                        >
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={featuredDays}
                            onChange={(e) => {
                              setFeaturedDays(e.target.value);
                              let tempPrice = pricingDetails.find((deal) => {
                                if (
                                  deal.name == "featured" &&
                                  deal.validity == e.target.value
                                ) {
                                  return deal.amount;
                                }
                              });
                              setFeaturedPrice(tempPrice);
                              if (isFeaturedSelected) {
                                setData({ ...data, featured: e.target.value });
                              }
                            }}
                          >
                            <MenuItem value={pricingDetails[0]?.validity}>
                              {pricingDetails[0]?.validity} - $
                              {pricingDetails[0]?.amount}
                            </MenuItem>
                            <MenuItem value={pricingDetails[1]?.validity}>
                              {pricingDetails[1]?.validity} - $
                              {pricingDetails[1]?.amount}
                            </MenuItem>
                            <MenuItem value={pricingDetails[2]?.validity}>
                              {pricingDetails[2]?.validity} - $
                              {pricingDetails[2]?.amount}
                            </MenuItem>
                            {/* <MenuItem value={7}>7 days - $6</MenuItem>
                            <MenuItem value={14}>14 days - $10</MenuItem> */}
                          </Select>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="adsInput_wrapper">
                          <Checkbox
                            name="urgent"
                            inputProps={{ "aria-label": "Checkbox A" }}
                            onChange={(e) => {
                              onCheckboxPress(
                                e.target.name,
                                e.target.checked,
                                pricingDetails[3]?.validity,
                                pricingDetails[3]?.amount
                              );
                            }}
                          />
                          <Chip
                            label="URGENT"
                            // color="secondary"
                            style={{ color: "red", marginRight: 15 }}
                          />
                          Let people know you want to sell quickly.
                        </div>
                        <div
                          style={{
                            // border: "1px solid red",
                            fontWeight: "500",
                            paddingRight: 25,
                          }}
                        >
                          {pricingDetails[3]?.validity} - $
                          {pricingDetails[3]?.amount}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="adsInput_wrapper">
                          <Checkbox
                            name="bargain"
                            inputProps={{ "aria-label": "Checkbox A" }}
                            onChange={(e) => {
                              onCheckboxPress(
                                e.target.name,
                                e.target.checked,
                                pricingDetails[4]?.validity,
                                pricingDetails[4]?.amount
                              );
                            }}
                          />
                          <Chip
                            label="BARGAIN"
                            // color="secondary"
                            style={{ color: "green", marginRight: 15 }}
                          />
                          Let people know they are getting a great deal
                        </div>
                        <div
                          style={{
                            // border: "1px solid red",
                            fontWeight: "500",
                            paddingRight: 25,
                          }}
                        >
                          {pricingDetails[4]?.validity} - $
                          {pricingDetails[4]?.amount}
                        </div>
                      </div>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* email and phone option here */}
              <Grid container item spacing={2} style={{ marginTop: "30px" }}>
                <Card style={{ width: "100%" }}>
                  <CardContent style={{ background: "#2f3a51" }}>
                    <Typography
                      variant="h6"
                      style={{ color: "#fff", fontWeight: "700" }}
                    >
                      Your contact details
                      <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Grid item md={8} sm={12} xs={12}>
                      <Typography variant="subtitle1">
                        Please select at least one option to be contacted by:
                      </Typography>
                      <Grid
                        container
                        item
                        spacing={3}
                        style={{ margin: "15px 0" }}
                      >
                        <Grid item md={3} sm={4} xs={4}>
                          <Typography variant="subtitle1">Email:</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={8}>
                          <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            onChange={onChange}
                            fullWidth
                            type="Text"
                            name="email"
                            value={data.email}
                            className="adsInput"
                          />
                        </Grid>
                        <Grid item md={3} sm={4} xs={4}>
                          <Typography variant="subtitle1">Phone:</Typography>
                        </Grid>
                        <Grid item md={9} sm={8} xs={8}>
                          <TextField
                            variant="outlined"
                            placeholder="Enter your phone number here"
                            onChange={onChange}
                            fullWidth
                            type="Number"
                            name="phone"
                            value={data.phone}
                            className="adsInput"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
                {categoryFields?.map((field) => {
                  return (
                    <Grid item md={6} sm={12} xs={12}>
                      <Card style={{ width: "100%" }}>
                        <CardContent style={{ background: "#2f3a51" }}>
                          <Typography
                            variant="h6"
                            style={{
                              color: "#fff",
                              fontWeight: "700",
                              textTransform: "capitalize",
                            }}
                          >
                            {snakeToSentence(field.name)}
                            <span style={{ color: "red" }}>*</span>
                          </Typography>
                        </CardContent>
                        <Divider />
                        <CardContent>
                          <Grid item md={12} sm={12} xs={12}>
                            <div style={{ margin: "15px 0" }}>
                              <TextField
                                variant="outlined"
                                multiline
                                rows={1}
                                placeholder={`Enter ${snakeToSentence(
                                  field.name
                                )}`}
                                onChange={onChangeDynamicData}
                                fullWidth
                                name={field.name}
                                value={data[field.name]}
                                className="adsInput"
                              />
                            </div>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })}
              </Grid>
              <div>
                <div style={{ paddingTop: 50, paddingLeft: 10 }}>
                  <Typography
                    variant="h5"
                    style={{ color: "#2f3a51", fontWeight: "700" }}
                  >
                    Total Amount: $
                    <span style={{ color: "red" }}>
                      {" "}
                      {totalPriceAllIncluded}
                    </span>
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    marginTop: "50px",
                    width: "200px",
                    padding: "15px 25px",
                    borderRadius: "30px",
                  }}
                  onClick={handleSubmit}
                >
                  Post an Ads
                </Button>
              </div>
            </>
          )}
        </Container>
      </div>
    </Layout>
  );
};
const mapStateToProps = ({ auth, category, myads }) => ({
  // token: auth.token,
  // loading: auth.loading,
  userData: auth.userData,
  categoryData: category.categoryData,
  subCategoryData: category.subCategoryData,
  loading: category.loading,
  loadingSubCategory: category.loadingSubCategory,
  categoryFields: category.categoryFields.fields,
  pricingDetails: myads.pricingDetails,
  locationsData: myads.locationsData,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getPricing: () => dispatch(getPricing()),
  getLocations: () => dispatch(getLocations()),
  getSubCategories: (id) => dispatch(getSubCategories(id)),
  getCategoryFields: (id) => dispatch(getCategoryFields(id)),
  postAds: (data) => dispatch(postAds(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AdsCreate);
