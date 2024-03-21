import "./tripsStyle.css";
import TripItems from "./tripsItem.js";

function Trips() {
  return (
    <div className="trips">
      <h1>Recent Visits</h1>
      <p>Discover unique places using D'Tourist</p>
      <div className="trips-card">
        <TripItems
          image="https://images.unsplash.com/photo-1597500320466-481a4518343b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHNleWNoZWxsZXMlMjB0b3VyaXNtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          heading="Seychelles"
          text="the man is bettrn in swimming than most people van, took a wole
        lot to cnjgweb ikeiyyy ig ho ohhhh the lord is my shepwerd i shall
        not want, Tanzania is a beautiful place with many gardens that
        teel s us a story if thhe common man and"
        />

        <TripItems
          image="https://plus.unsplash.com/premium_photo-1661810398337-1fddd20130c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEtlbnlhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          heading="Kenya"
          text="the man is bettrn in swimming than most people van, took a wole
        lot to cnjgweb ikeiyyy ig ho ohhhh the lord is my shepwerd i shall
        not want, Tanzania is a beautiful place with many gardens that
        teel s us a story if thhe common man and"
        />

        <TripItems
          image="https://images.unsplash.com/photo-1562774207-e20d9ad4b566?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFNvdXRoJTIwQWZyaWNhJTIwdG91cmlzbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          heading="South-Africa"
          text="the man is bettrn in swimming than most people van, took a wole
        lot to cnjgweb ikeiyyy ig ho ohhhh the lord is my shepwerd i shall
        not want, Tanzania is a beautiful place with many gardens that
        teel s us a story if thhe common man and"
        />
      </div>
    </div>
  );
}

export default Trips;
