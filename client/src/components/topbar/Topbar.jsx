import React, { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import Logo from "../../image/logo.png"
import { motion } from "framer-motion"; 
import { useState } from "react";
export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <img src={Logo} style={{height: "50px", display:"flex", flexDirection:"row", borderRadius:"15%"}}>
          </img>
        </div>
        <div className="topbarCenter">
          <Link to="/" className="link">
            <span className="topbarCenterItem">HOME</span>
          </Link>
          <Link to="/about" className="link">
            <span className="topbarCenterItem">ABOUT</span>
          </Link>
          <Link to="/contact" className="link">
            <span className="topbarCenterItem">CONTACT</span>
          </Link>
          <Link to="/write" className="link">
            <span className="topbarCenterItem">WRITE</span>
          </Link>

          <span className="topbarCenterItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </span>
        </div>
        <div className="topbarRight">
          {user && (
            <Link to="/settings">
              <img
                src={
                  (user.profilePicture !== "")
                    ? PF + user.profilePicture
                    : `../../no-avatar.jfif`
                }
                alt=""
                className="topbarImg"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
