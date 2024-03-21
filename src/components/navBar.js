import { Component } from "react";
import "./navbarStyle.css";
import { Link } from "react-router-dom";
import { NavItems } from "./navItem.js";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav>
        <h1 className="logo">D'Tourist</h1>
        <div className="hamburger" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {NavItems.map((item, items) => {
            return (
              <li key={items}>
                <Link to={item.url} className={item.classN}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
