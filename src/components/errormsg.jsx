import React from "react";
import { FaTimes } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  popupContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
}));

const ErrorPopup = ({ message, onClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.popupContainer}>
      <CloseIcon onClick={onClose} />
      <ErrorMessage variant="h3">{message}</ErrorMessage>
    </div>
  );
};

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ErrorMessage = styled(Typography)`
  color: red;
  font-size: 17px;
  margin-top: 20px;
`;

export default ErrorPopup;
