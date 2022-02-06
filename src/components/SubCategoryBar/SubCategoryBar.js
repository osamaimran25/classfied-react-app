import React from "react";
import right from "../../assets/images/right.png";

const SubCategoryBar = ({
  item,
  selectedSubCategoryId,
  setSelectedSubCategoryId,
  setCategorys,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedSubCategoryId(item.id);
        setCategorys(false);
      }}
      style={{
        backgroundColor: item.id == selectedSubCategoryId ? "#DDDDDD" : "#fff",
        height: "7vh",
        width: "40vw",
        border: "1px solid lightgrey",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 10,
          textTransform: "capitalize",
        }}
      >
        {item.name}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={right}
          alt="chat"
          style={{ marginRight: 15 }}
          width="20px"
          height="20px"
        />
      </div> */}
    </div>
  );
};

export default SubCategoryBar;
