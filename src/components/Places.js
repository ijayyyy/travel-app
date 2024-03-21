import Beach1 from "../images/trees.jpg";
import Beach2 from "../images/trees.jpg";
import PlaceItems from "./PlacesItems";
import "./PlacesStyles.css";

function Places() {
  return (
    <>
      <section className="places">
        <h1>Popular Places</h1>
        <p>Traveling makes you see the World.</p>

        <PlaceItems
          className="first-place"
          heading="Tanzania"
          text="the man is bettrn in swimming than most people van, took a wole
         lot to cnjgweb ikeiyyy ig ho ohhhh the lord is my shepwerd i shall
         not want, Tanzania is a beautiful place with many gardens that
         teel s us a story if thhe common man and how he gathers his wealth
         through a good payment plan and its beautiful environs, its a good
         deal to reconsuder, come explore wuth us."
          img1="https://www.planetware.com/wpimages/2020/02/tanzania-in-pictures-beautiful-places-to-photograph-zanzibar-archipelago.jpg"
          img2={Beach1}
        />

        <PlaceItems
          className="first-place"
          heading="Seychelles"
          text="the man is bettrn in swimming than most people van, took a wole
         lot to cnjgweb ikeiyyy ig ho ohhhh the lord is my shepwerd i shall
         not want, Tanzania is a beautiful place with many gardens that
         teel s us a story if thhe common man and how he gathers his wealth
         through a good payment plan and its beautiful environs, its a good
         deal to reconsuder, come explore wuth us."
          img1="https://www.planetware.com/wpimages/2020/02/tanzania-in-pictures-beautiful-places-to-photograph-zanzibar-archipelago.jpg"
          img2={Beach1}
        />
      </section>
    </>
  );
}

export default Places;
