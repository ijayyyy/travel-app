
import "./tripsStyle.css";

function TripsItems(props) {
  return (
    <div className="trips-items">
      <div className="trips-images">
        <img src={props.image} alt="beach" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripsItems;
