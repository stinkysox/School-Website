import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <p>
          <strong>Address:</strong> Springdale Public School, 123 Education
          Lane, Cityville, State, ZIP Code
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@springdale.edu">info@springdale.edu</a>
        </p>
      </section>

      <section className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Message:
            <textarea name="message" required></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section className="google-maps">
        <h2>Our Location</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086579634087!2d-122.08424968468174!3d37.42206587982785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a44660ff33%3A0x2f96a8e4620f19b7!2sGoogleplex!5e0!3m2!1sen!2sus!4v1517425535988"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
