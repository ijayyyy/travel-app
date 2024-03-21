import "./footerStyle.css";

function Footer() {
  return (
    <section class="footer">
      <div className="top-footer">
        <div>
          <h1>D'Tourist</h1>
          <p>Explore African Countries</p>
        </div>
        <div>
          <a href="/">
            <i className="fa brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa brands fa-Instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa brands fa-Twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa brands fa-Whatsapp-square"></i>
          </a>
        </div>
      </div>
      <div className="lower-footer">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Projects</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubleShooting</a>
          <a href="/">Contact Us</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Ohers</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy</a>
          <a href="/">Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
