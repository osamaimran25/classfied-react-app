import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";
// import phone input package
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h12">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function ProfileEdit({
  editBtn,
  handleChange,
  phone,
  profileInfo,
  setPhone,
}) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {editBtn}
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Profile update
        </DialogTitle>
        <DialogContent>
          <Grid item md={12} lg={12} sm={12} xs={12}>
            <div className="adsInput_wrapper">
              <Typography variant="subtitle1">
                Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your phone number here"
                onChange={handleChange("email")}
                fullWidth
                type="name"
                name="name"
                value={profileInfo.name}
              />
            </div>
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12}>
            <div className="adsInput_wrapper">
              <Typography variant="subtitle1">
                Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your phone number here"
                onChange={handleChange("email")}
                fullWidth
                type="name"
                name="name"
                value={profileInfo.name}
              />
            </div>
          </Grid>
          <Grid item md={12} lg={12} sm={12} xs={12}>
            <div className="adsInput_wrapper">
              <Typography variant="subtitle1">
                Name <span style={{ color: "red" }}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your phone number here"
                onChange={handleChange("email")}
                fullWidth
                type="name"
                name="name"
                value={profileInfo.name}
              />
            </div>
          </Grid>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <PhoneInput
              country={"us"}
              value={phone.phone}
              onChange={(phone) => setPhone({ phone })}
              id="box_input1"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
