import { Component } from "react";
import "./PlacesStyles.css";
import Beach1 from "../images/trees.jpg";

class PlaceItems extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div class="first-place-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="places-img">
          <img src={this.props.img1} alt="beach" />
          <img src={this.props.img2} alt="beach" />
        </div>
      </div>
    );
  }
}

export default PlaceItems;
