import { Provider } from "react-redux";
import store from "./redux/Slices/Store";
import Home from "./components/Home";
import ShowDetails from "./components/ShowDetails";
import Buyitem from "./components/Buyitem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";
import SignUpForm from "./components/Signin";
import LoginForm from "./components/Login";
import About from "./Pages/About";
import Contacts from "./Pages/contacts";
import Services from "./Pages/Services";
import Home2 from "./components/Home2";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/ShowDetails/:id" element={<ShowDetails />} />
            <Route path="/Buyitem" element={<Buyitem />} />
            <Route path="/home" element={<Home2 />}>
              <Route path="/home" element={<DisplayProducts />} />
              <Route path="/home/about" element={<About />} />
              <Route path="/home/services" element={<Services />} />
              <Route path="/home/contact" element={<Contacts />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
