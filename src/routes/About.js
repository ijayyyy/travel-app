import Navbar from "../components/navBar.js";
import Hero from "../components/hero.js";
import JustImg from "../images/trees.jpg";
import Footer from "../components/footer.js";
import AboutUs from "../components/aboutUs.js";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        classN="about-img"
        heroImg={JustImg}
        title="About Us"
        text="Explore Africa"
        butn=".hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
