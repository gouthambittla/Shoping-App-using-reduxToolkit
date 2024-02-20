import { makeStyles } from "@material-ui/core/styles";

export const LoginStyles = makeStyles({
  pageContainer: {
    height: "100vh",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "30px",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  loaderContainer: {
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
  },
  card: {
    width: "250px",
    height: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "15px",
    marginBottom: "20px",
    transition: "box-shadow 0.2s ease-in-out",
    "&:hover": {
      boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)",
    },
  },
  cardImage: {
    height: "30vh",
    width: "100%",
    objectFit: "cover",
    marginBottom: "10px",
    borderRadius: "4px",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  cardPrice: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  cardButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "10px 20px",
    cursor: "pointer",
    transition:
      "background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      backgroundColor: "#0056b3",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  paginationItem: {
    marginRight: "10px",
  },
  paginationButton: {
    padding: "8px 16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "none",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
});

export const useStyleslogin = makeStyles(() => ({
  loginBackground: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  styleCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    width: "400px",
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh",
  },
  textField: {
    width: "300px",
    marginBottom: "30px",
    margin: "10px",
  },
  button: {
    width: "200px",
    padding: "12px",
    borderRadius: "20px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    margin: "20px",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "#ff8a65",
    },
  },
}));
export const useStylesNav = makeStyles(() => ({
  loginBackground: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  styleCard: {
    backgroundColor: "#ffffff",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
    width: "400px",
    textAlign: "center",
  },
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
  navbarContainer: {
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
    alignItems: "center",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    textDecoration: "none",
    "&:hover": {
      cursor: "pointer",
    },
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "#ff5722",
    },
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
}));
