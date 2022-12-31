import React from "react";
import "./header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerWrapper">
        <div className="headerTitles">
          <span className="headerTitleSm">Share your Stories...</span>
          <span className="headerTitleLg">HeuSekaii-Blog</span>
        </div>
        <div className="headerImg"></div>
      </div>
    </div>
  );
}