import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setuserinfo } from "../redux/Slices/userdetails";
import { useStyleslogin } from "./GlobalStyles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const SignUpForm = () => {
  const classes = useStyleslogin();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [signupError, setSignupError] = useState(""); // State for signup error message
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateUsername = () => {
    if (username.trim() === "") {
      setUsernameError("Username is required");
      return false;
    } else {
      setUsernameError("");
      return true;
    }
  };

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  const handleSignUp = async () => {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isUsernameValid && isEmailValid && isPasswordValid) {
      setLoading(true);
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoading(false);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        dispatch(setuserinfo({ username: username, email: email }));
        toast.success("signup success");
      } catch (error) {
        console.error(error.message);
        let errorMessage = "Failed to sign up. Please try again.";

        if (error.code === "auth/email-already-in-use") {
          errorMessage = "Email already in use. Please use a different email.";
        } else if (error.code === "auth/weak-password") {
          errorMessage =
            "Password is too weak. Please choose a stronger password.";
        }

        toast.error(errorMessage);
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 9999,
          }}
        >
          <CircularProgress color="primary" />
        </div>
      )}
      <div className={classes.loginBackground}>
        <div className={classes.styleCard}>
          <form className={classes.formContainer}>
            <h1>SignUp</h1>
            <TextField
              label="Username"
              className={classes.textField}
              value={username}
              error={!!usernameError}
              helperText={usernameError}
              onBlur={validateUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              className={classes.textField}
              value={email}
              error={!!emailError}
              helperText={emailError}
              onBlur={validateEmail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              className={classes.textField}
              type="password"
              value={password}
              error={!!passwordError}
              helperText={passwordError}
              onBlur={validatePassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
            {signupError && toast.error(signupError)}
            <Typography>
              <Link to="/login" className={classes.link}>
                Login
              </Link>
            </Typography>
            <Toaster position="bottom-center" reverseOrder={false} />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
