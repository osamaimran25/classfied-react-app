import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import SliceText from "../HOC/SliceText";
import Readmore from "../HOC/Readmore";
import "./Common.scss";

const AdsCard = ({
  image,
  alt,
  imgTitle,
  title,
  Description,
  balance,
  location,
  date,
}) => {
  console.log(image, "1111111111111");
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        // image={"https://homepages.cae.wisc.edu/~ece533/images/airplane.png"}
        // image={"http://209.97.162.0/ads_images/1.jpeg"}
        height="200"
        alt={alt}
        title={imgTitle}
        className="card__Image"
      />
      <CardContent style={{ background: "#fff", color: "#3d3d4e" }}>
        <Typography variant="h6" style={{ fontWeight: "600" }}>
          <SliceText number="25">{title ? title : "No Title"}</SliceText>
        </Typography>
        <Typography
          noWrap={true}
          variant="subtitle2"
          style={{ padding: "10px 0" }}
        >
          {Description ? Description : "No Description"}
          {/* <Readmore number="55">{Description}</Readmore> */}
        </Typography>
        <Typography variant="h6">
          <strong>RS: {balance ? balance : "0"}</strong>
        </Typography>
      </CardContent>
      <CardContent
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#2f3a51",
          padding: "10px 15px",
          color: "#fff",
        }}
      >
        <Typography variant="body2" color="initial">
          {location}
        </Typography>
        <Typography variant="body2" color="initial">
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdsCard;
