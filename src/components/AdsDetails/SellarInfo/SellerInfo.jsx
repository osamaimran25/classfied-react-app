import React from "react";
// import css file
import "./SellerInfo.scss";
import { getDateFromTime } from "../../../utils";
import moment from "moment";

const SellerInfo = ({ addDetail }) => {
  console.log(addDetail, "ssssssssss");
  return (
    <div className="SellerInfo">
      <div className="SellerInfo--price">
        <div className="SellerInfo--price--content">
          <div className="SellerInfo--price--content--icon">
            <h2>Rs: {addDetail?.price || "00"}</h2>
          </div>

          <h6>{addDetail?.category_name}</h6>
          <div className="SellerInfo--price--content--locationDate">
            <p>{addDetail?.location_details?.city}</p>
            <p>{moment(addDetail?.date_posted).format("LL")}</p>
          </div>
        </div>
      </div>
      <div className="SellerInfo--SellerDescription">
        <h2>Details</h2>
        <div className="SellerInfo--SellerDescription--profile">
          <div className="SellerInfo--SellerDescription--profile--imgContent">
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              // className="SellerInfo--SellerDescription--profile--imgContent--text"
            >
              {addDetail?.item?.map((item) => {
                {
                  /* {[
                { name: "description", value: "test" },
                { name: "description", value: "test" },
                { name: "description", value: "test" },
              ].map((item) => { */
                }
                return (
                  <div style={{ margin: 20, textTransform: "capitalize" }}>
                    <span style={{ color: "#002f34", fontWeight: "bold" }}>
                      {item.name} :{" "}
                    </span>
                    <span style={{ color: "#7f9799" }}>{item.value}</span>
                  </div>
                );
              })}
              {/* <img
                src="https://apollo-singapore.akamaized.net/v1/files/06a119jpdsji1-IN/image;s=120x120"
                alt="seller img"
              />
              <div>
                <h4>fairdeal car palace</h4>
                <p>Member since Oct 2012</p>
              </div> */}
            </div>
            {/* <div>
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                className=""
                fillRule="evenodd"
              >
                <path
                  className="rui-77aaa"
                  d="M277.333 85.333v60.331l366.336 366.336-366.336 366.336v60.331h60.331l409.003-408.981v-35.307l-409.003-409.045z"
                ></path>
              </svg>
            </div> */}
          </div>
        </div>
        <button className="SellerInfo--SellerDescription--button">
          Chat with Seller
        </button>
        <div className="SellerInfo--SellerDescription--number">
          <span>
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 1024 1024"
              data-aut-id="icon"
              className=""
              fillRule="evenodd"
            >
              <path
                className="rui-77aaa"
                d="M784.555 852.395c-331.435-14.635-598.315-281.515-612.949-612.949l149.973-59.989 91.691 183.424-70.997 35.499v26.453c0 141.653 115.243 256.896 256.896 256.896h26.453l11.861-23.637 23.68-47.36 183.381 91.733-59.989 149.931zM918.101 643.456l-256.939-128.469-57.472 19.2-30.037 60.032c-74.069-11.093-132.736-69.803-143.872-143.872l60.075-30.037 19.157-57.429-128.427-256.939-54.187-20.608-214.187 85.632-26.88 39.808c0 401.365 326.571 727.893 727.936 727.893l39.765-26.88 85.632-214.187-20.608-54.187z"
              ></path>
            </svg>
          </span>
          <h2>Contact Number:</h2>
          <span>{addDetail?.phone}</span>
        </div>
      </div>
      <div className="SellerInfo--map">
        <h2>Posted in</h2>
        <p>{addDetail?.location_details?.city}</p>
        {/* <img
          src="https://maps.googleapis.com/maps/api/staticmap?center=28.563%2C77.191&language=en&size=640x256&zoom=15&scale=1&lang=en&channel=olx-latam-ar-web-dev&key=AIzaSyAChxbDof4fywIkC6U-7MCgXBpUp4t2DiA&signature=lOvqAA8U6_GQWVSJF0aqT3Sc870="
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default SellerInfo;
