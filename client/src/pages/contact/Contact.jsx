import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactWrapper">
        <h1 className="contactTitle" style={{textAlign:"center"}}>Connect with us!!</h1>
        <div className="contactIcons" style={{textAlign: "center"}}>
          <a
            href="https://www.instagram.com/heuzaaki/"
            target="_blank"
            rel="noopener noreferrer"
            className="link conIcon"
          >
            <i class="fab fa-instagram-square"></i>
          </a>

          

          <a
            href="https://github.com/naufalzaki05"
            rel="noopener noreferrer"
            target="_blank"
            className="link conIcon"
          >
            <i class="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
