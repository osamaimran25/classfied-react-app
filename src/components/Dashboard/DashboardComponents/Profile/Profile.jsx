import { Button, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import "./Profile.scss";
import ProfileEdit from "./ProfileEdit";

const Profile = ({ user }) => {
  const [profileInfo, setProfileInfo] = useState({
    name: "sonjoy",
    email: "sonjoybarmon@gmail.com",
    phone: "017854263",
    password: "********",
  });

  const [phone, setPhone] = useState({
    phone: "017854263",
  });

  const handleChange = (e) => {
    // setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Grid container item spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className="dashboard__profile">
            <div className="dashboard__profile__field">
              <div className="dashboard__contact">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography variant="h6">Contact details</Typography>
                  <div>
                    <ProfileEdit
                      handleChange={handleChange}
                      phone={phone}
                      profileInfo={profileInfo}
                      setPhone={setPhone}
                      editBtn="Edit"
                    />
                  </div>
                </div>

                <Grid container item spacing={1}>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle1">Display name</Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle2" color="initial">
                      {user?.username}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle1">Primary email</Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle2" color="initial">
                      {user?.email}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle1">Password</Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle2" color="initial">
                      {profileInfo.password}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item spacing={1}>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle1">contact number</Typography>
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Typography variant="subtitle2" color="initial">
                      {phone.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
              <div className="dashboard__cv_section">
                <h5>Your CV</h5>
                <p>
                  Upload your CV and it will be instantly available to send
                  every time you apply for a job.
                </p>

                <div className="dashboard__uploadCV">
                  <div>
                    <label required className="custom-file-upload ">
                      <input style={{ display: "none" }} type="file" />
                      choose file
                    </label>
                  </div>

                  <p>We accept Word, PDF and Richtext formats (Max 6MB)</p>
                </div>
              </div>
              <div className="dashboard__account">
                <h2>Account</h2>
                <div>
                  <Button variant="text" color="primary">
                    Deactivate your account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default connect(
  (state) => ({
    // user: state.auth.userData.user,
  }),
  {}
)(Profile);
