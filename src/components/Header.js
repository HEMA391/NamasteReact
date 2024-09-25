import { useContext, useState } from "react";
import logo from "../images/foodLogo.png";
import cart from "../images/cart.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { userName } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              padding: "5px",
              fontSize: "14px",
              backgroundColor: "rgb(226, 218, 215)",
            }}
          >
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">
              <div style={{ position: "relative", display: "inline-block" }}>
                <img
                  src={cart}
                  alt="Cart"
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "18px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "-10px",
                    background: "black",
                    color: "white",
                    borderRadius: "10px",
                    padding: "2px 6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </li>

          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>{userName}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
