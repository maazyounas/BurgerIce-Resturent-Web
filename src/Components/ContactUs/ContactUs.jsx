import React from "react";
import "./ContactUs.css";
import Swal from 'sweetalert2'
const ContactUs = () => {

  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "017fe9cd-673a-4fd6-8327-d441ccb61351");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit} className="contactform">
        <h1 className="contacth1">ContactUs</h1>
        <div className="contact-inputbox">
          <label>Full Name</label>
          <input
            type="text"
            className="feild"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        <div className="contact-inputbox">
          <label>Email</label>
          <input
            type="text"
            className="feild"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>
        <div className="contact-inputbox">
          <label>Your Message</label>
          <textarea
            name="message"
            className="feild-message"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
