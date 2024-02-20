import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase-config";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { CircularProgress, Grid, Stack } from "@mui/material";
import { useStylesNav } from "./GlobalStyles";
import { toast } from "react-hot-toast";

function Navbar() {
  const classes = useStylesNav();
  const username = useSelector((state) => state.userinfo.username);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const usersub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      }
    });

    return usersub;
  }, [navigate]);

  const handleLogout = async () => {
    setLoading(true);

    try {
      await signOut(auth);
      toast.success("Logged out successfully", { duration: 2000 });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Grid container className={classes.navbarContainer}>
        <Grid item xs={12} md={6}>
          <div className={classes.logo}>Shopping-APP</div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Link
              to="/home"
              className={classes.navLink}
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
            <Link
              to="/home/about"
              className={classes.navLink}
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              to="/home/services"
              className={classes.navLink}
              style={{ textDecoration: "none" }}
            >
              Services
            </Link>
            <Link
              to="/home/contact"
              className={classes.navLink}
              style={{ textDecoration: "none" }}
            >
              Contact
            </Link>
            <span className={classes.navLink}>{username}</span>
            <span
              className={classes.navLink}
              onClick={handleLogout}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Logout
            </span>
          </Stack>
        </Grid>
        {loading && (
          <Grid item xs={12} className={classes.loaderContainer}>
            <CircularProgress />
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default Navbar;
