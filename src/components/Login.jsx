import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useStyleslogin } from "./GlobalStyles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
// import { setuserinfo } from "../redux/Slices/userdetails";
import ErrorPopup from "./errormsg";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = () => {
  const classes = useStyleslogin();
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: localStorage.getItem("emailError") || "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      // dispatch(setuserinfo({ email: email }));
      setSuccessMessage("Login successful");
      setTimeout(() => {
        setSuccessMessage("");
        navigate("/home");
      }, 1000);
      toast.success("Login success");
    } catch (error) {
      let errorMessage = "Failed to login. Please check your credentials.";

      if (error) {
        if (error.code === "auth/user-not-found") {
          errorMessage = "User not found. Please check your email.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "Invalid password. Please try again.";
        } else if (error.code === "auth/invalid-email") {
          errorMessage =
            "Invalid email format. Please enter a valid email address.";
        }
      }

      setLoginError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
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
          <CircularProgress />
        </div>
      )}
      <div className={classes.loginBackground}>
        <div className={classes.styleCard}>
          <form className={classes.formContainer}>
            <h1>Login</h1>
            <TextField
              label="Email"
              className={classes.textField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              className={classes.textField}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={handleLogin}
            >
              Login
            </Button>
            {loginError && (
              <ErrorPopup
                message={loginError}
                onClose={() => setLoginError("")}
              />
            )}
            new user?
            <Link to="/signup" className={classes.link}>
              <p>Signup</p>
            </Link>
          </form>
        </div>
        <Toaster position="bottom-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default LoginForm;
