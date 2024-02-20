import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ErrorPopup = ({ message, onClose }) => {
  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorPopup;
