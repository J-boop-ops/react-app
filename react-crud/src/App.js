import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import Update from "./components/Update/Update";
import Create from "./components/Create/Create";
import Search from "./components/Search/Search";
import Login from "./components/Login/Login";
import AddToCart from "./components/AddToCart/AddToCart";
import SearchCart from "./components/Search/SearchCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Login} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/update" Component={Update} />
        <Route exact path="/create" Component={Create} />
        <Route exact path="/read" Component={Search} />
        <Route exact path="/cart" Component={AddToCart} />
        <Route exact path="/cartview" Component={SearchCart} />
      </Routes>
    </Router>
  );
}

export default App;
