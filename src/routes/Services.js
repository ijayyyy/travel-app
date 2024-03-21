import Navbar from "../components/navBar.js";
import Hero from "../components/hero.js";
import JustImg from "../images/zebra.jpg";
import Footer from "../components/footer.js";
import Trips from "../components/trips.js";

function Services() {
  return (
    <>
      <Navbar />
      <Hero
        classN="about-img"
        heroImg={JustImg}
        title="Services"
        text="Explore Africa"
        butn=".hide"
      />
      <Trips />
      <Footer />
    </>
  );
}

export default Services;
