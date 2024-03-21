import "./contactStyle.css";

function ContactPage() {
  return (
    <section className="contact-container">
      <h1>We will like to hear from You</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default ContactPage;
