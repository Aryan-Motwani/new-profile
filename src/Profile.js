import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPhone } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile">
      <div className="rect">
        <img
          className="profile-img"
          src="https://flikcards.github.io/jayesh/logo.png"
        ></img>
        <h3 className="name">Aryan Motwani</h3>
        <h5 className="profession">Founder - Flikcards</h5>
        <h5 className="desc">
          Premium Business NFC cards with lifetime access at lowest price ever
        </h5>
        <div></div>
        <div className="icons">
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
        </div>
        <div className="icons">
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
        </div>
        <hr className="separator" />

        <div className="icons">
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
        </div>
        <div className="icons">
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
          <div className="icon">
            <a href="tel:+919922776780">
              <FontAwesomeIcon icon={faPhone} />
            </a>
            <h4>Call</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
