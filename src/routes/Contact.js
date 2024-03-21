import Navbar from "../components/navBar.js";
import Hero from "../components/hero.js";
import JustImg from "../images/zebra.jpg";
import Footer from "../components/footer.js";
import ContactPage from "../components/contactPage.js";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        classN="about-img"
        heroImg={JustImg}
        title="Contact us"
        text="Explore Africa"
        butn=".hide"
      />
      <ContactPage />
      <Footer />
    </>
  );
}

export default Contact;
