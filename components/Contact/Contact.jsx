"use client";
import React from "react";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset();
    }
  };

  return (
    <div className="contact">
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let&apos;s talk</h1>
          <p>
            I&apos;m currently avaliable to take on new projects.so, You can
            contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="/mail_icon.svg" alt="" />
              <p>heyru638@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/call_icon.svg" alt="" />
              <p>+251 970400883</p>
            </div>
            <div className="contact-detail">
              <img src="/location_icon.svg" alt="" />
              <p>Haramaya,Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right " id="contact">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Enter your message"
          ></textarea>

          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
