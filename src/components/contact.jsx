import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { useForm } from "react-hook-form";
import "./main.css"; 

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  //  const onSubmit = () => {
  //   // Submit the form manually after validation
  //   document.forms[0].submit();
  // };

  return (
    <div className="outer-container contact-box">
      <div className="contact-text ">
        <h2 className="gradient-text-lg">Do you have a project to discuss?</h2>
        <p>
          Feel free to contact <AiFillMessage />
        </p>
        <ul className="flex-btwn social-icons">
          <li className="icons">
            <a href="https://github.com/gsneha16/gsneha16">
              <FaGithubSquare />
            </a>
          </li>
          <li className="icons">
            <a href="https://www.linkedin.com/in/sneha-goyal-70899b276">
              <CiLinkedin />
            </a>
          </li>
          <li className="icons">
            <a href="/">
              <CgMail />
            </a>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <h2 className="contact-title gradient-text-sm">Contact Form</h2>

        {isSubmitSuccessful && (
          <p className="success-message">Message sent successfully!</p>
        )}

        <form
          action="https://formsubmit.co/gsneha2319@gmail.com"
          method="POST"
          onSubmit={handleSubmit(() => document.forms[0].submit())}
          className="form-container flex-col"
        >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              placeholder="Your email"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Your message"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="error">{errors.message.message}</p>
            )}
          </div>

          <button type="submit" className="submit-button gradient-text-sm">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
