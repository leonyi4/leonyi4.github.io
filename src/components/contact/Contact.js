import EmailIcon from "@mui/icons-material/Email";
import React, { useRef } from "react";
import "./Contact.css";

import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const form = useRef();

  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r0hb6g2",
        "template_qok18fs",
        form.current,
        "LFAhbZcl6dFCoP55k"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const cName = inView ? "fade-in" : "";

  return (
    <section ref={ref} id="contact" className="contactss">
      <div className={cName}>
        <div className="top">
          <h5>Get in Touch</h5>
          <h2 style={{ color: "var(--color-primary)" }}>Contact me</h2>
        </div>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__email">
              <EmailIcon size="large" />
              <h3>email</h3>
              <h4>nyilampang@gmail.com</h4>
              <a href="mailto:nyilampang+port@gmail.com">Send a message</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
