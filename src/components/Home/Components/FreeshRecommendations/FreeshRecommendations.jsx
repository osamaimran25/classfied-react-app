import { Container, Grid, Typography, Button } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AdsCard from "../../../../common/AdsCard";
import "./FreeshRecommendations.scss";
import { getAds } from "../../../../redux/actions/myadsActions";
import { useEffect } from "react";
import moment from "moment";
import { showImage, getHourMinuteSeconds } from "../../../../utils/index";

const FreeshRecommendations = ({
  getAds,
  myAdsList,
  currentLocation,
  selectedLocation,
}) => {
  const [seeAll, setSeeAll] = useState(false);
  const [page, setPage] = useState(1);
  const [endReached, setEndReached] = useState(false);

  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    fetchFeed();
  }, [currentLocation, selectedLocation]);
  const fetchFeed = () => {
    getAds({
      page_num: page,
      no_of_records_per_page: pageSize,
      location: selectedLocation ? selectedLocation : currentLocation,
    }).then((res) => {
      if (res.value.total_pages > page) {
        setPage(page + 1);
      } else {
        setEndReached(true);
      }
    });
  };

  console.log(myAdsList, "ssssssssssss");
  // useEffect(() => {
  //   // setAds(ads);
  // }, [ads]);

  return (
    <div className="FreeshRecommendations_wrapper">
      <Container>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">
            <strong style={{ fontWeight: "600" }}>Fresh Recommendations</strong>
          </Typography>
        </div>

        <Grid container spacing={1}>
          {myAdsList?.data?.map((feed) => {
            return (
              <Grid key={feed.id} item md={2} sm={6} xs={12} lg={3}>
                <Link
                  to={`/AdsDetails/${feed.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <AdsCard
                    image={showImage(feed.image_01)}
                    alt={"all ads here"}
                    imgTitle={feed.title}
                    title={feed.title}
                    Description={feed.description}
                    balance={feed.price}
                    location={feed.locations}
                    // date={getHourMinuteSeconds(feed.date_posted)}
                    date={moment(feed.date_posted, "YYYYMMDD").fromNow()}
                  />
                </Link>
              </Grid>
            );
          })}
          {/* {!seeAll ? (
            <>
              {adss?.slice(0, 9).map((el) => (
                <Grid key={el.id} item md={3} sm={6} xs={12} lg={3}>
                  <Link
                    to={`/AdsDetails/${el.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <AdsCard
                      image={showImage(el.image_01)}
                      alt={"all ads here"}
                      imgTitle={el.title}
                      title={el.title}
                      Description={el.description}
                      balance={el.price}
                      location={el.locations}
                      // date={getHourMinuteSeconds(el.date_posted)}
                      date={el.date_posted}
                    />
                  </Link>
                </Grid>
              ))}
            </>
          ) : (
            <>
              {adss?.map((el) => (
                <Grid key={el.id} item md={3} sm={6} xs={12} lg={3}>
                  <Link
                    to={`/AdsDetails/${el.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <AdsCard
                      image={showImage(el.image_01)}
                      alt={"all ads here"}
                      imgTitle={el.title}
                      title={el.title}
                      Description={el.description}
                      balance={el.price}
                      location={el.locations}
                      // date={getHourMinuteSeconds(Number(el.date_posted))}
                      date={el.date_posted}
                    />
                  </Link>
                </Grid>
              ))}
            </>
          )} */}
        </Grid>
        {!endReached && (
          <div className="view_aLL_button">
            <Button
              onClick={() => {
                fetchFeed();
                // setSeeAll(!seeAll);
              }}
              variant="contained"
              color="secondary"
              style={{ borderRadius: "20px", padding: "8px 15px" }}
            >
              Load more
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};
const mapStateToProps = ({ myads }) => ({
  myAdsList: myads.myAdsList,
  selectedLocation: myads.selectedLocation,
  currentLocation: myads.currentLocation[0]?.current_location,
});

const mapDispatchToProps = (dispatch) => ({
  getAds: (data) => dispatch(getAds(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FreeshRecommendations);
