import "./App.css";
import { Provider } from "react-redux";
// import store from "./redux/store";
import store from "./redux/Slices/Store";
import Home from "./components/Home";
import ShowDetails from "./components/ShowDetails";
import Buyitem from "./components/Buyitem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ShowDetails/:id" element={<ShowDetails />} />
            <Route path="/Buyitem" element={<Buyitem />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
