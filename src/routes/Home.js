import Navbar from "../components/navBar.js";
import Hero from "../components/hero.js";
import Places from "../components/Places.js";
import Trips from "../components/trips.js";
import Footer from "../components/footer.js";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        classN="hero"
        heroImg="https://images.unsplash.com/photo-1592172578991-51bac865e437?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Begin Your Travel Journey"
        text="Explore Africa"
        url="/"
        butn="choose"
        butnText="Start Touring"
      />
      <Places />
      <Trips />
      <Footer />
    </>
  );
}

export default Home;
