import "./heroStyle.css";

function Hero(props) {
  return (
    <>
      <section className={props.classN}>
        <img src={props.heroImg} alt="Animalimg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.butn}>
            {props.butnText}
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
