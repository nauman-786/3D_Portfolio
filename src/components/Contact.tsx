import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="contact-title">Contact</h3>
        <div className="contact-flex">
          <div className="contact-box contact-box-details">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/nouman-khan-088a062a0/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-link"
              >
                LinkedIn — nouman-khan
              </a>
            </p>
            <p>
              Phone: <a href="tel:03085162887">03085162887</a>
            </p>
            <p>
              Email: <a href="mailto:noumankhankhan708@gmail.com">noumankhankhan708@gmail.com</a>
            </p>
            <h4>Education</h4>
            <p>
              BS Artificial Intelligence (6th Semester) — SZABIST, Islamabad
            </p>
            <p>
              Intermediate — Punjab College, Islamabad
            </p>
            <p>
              Matriculation — F-7/3 Model College, Islamabad
            </p>
            <h4>Certifications</h4>
            <p>
              Python in Machine Learning — Simplilearn
            </p>
          </div>
          <div className="contact-box contact-box-social">
            <h4>Social</h4>
            <a
              href="https://github.com/nauman-786"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/nouman-khan-088a062a0/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box contact-box-signature">
            <h2>
              Designed and Developed <br /> by <span>Nauman Khan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
