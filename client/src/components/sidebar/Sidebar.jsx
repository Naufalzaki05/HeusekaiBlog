import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/categories");
      setCategories(res.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarItem">
          <div className="sidebarItemTitle">ABOUT ME</div>
          <div className="ab">
          <img
            src="https://img.freepik.com/free-vector/blog-post-concept-illustration_114360-244.jpg?w=740&t=st=1671188832~exp=1671189432~hmac=f5023dcc29621ee5dcb82d92e9d0bfff514331e016d7fb56c85999ca85e5625b"
            alt=""
            className="sidebarImg"
          />
          <p className="sidebarAbout">
          Hello, my name is Naufal Zaki. I like various kinds of writing, let's immediately write your expressions in this blog
          </p>
          </div>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">CATEGORIES</div>
          <ul className="sidebarCategoryList">
            {categories.map((cat) => (
              <Link
                to={`/?category=${cat.name}`}
                className="link sidebarCategoryListItem"
                key={cat._id}
              >
                <li>{cat.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <div className="sidebarItemTitle">FOLLOW US</div>
          <div className="sidebarIcons">
            <a
              href="https://www.instagram.com/heuzaaki/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram-square sidebarIcon"></i>
            </a>
            <a
              href="https://github.com/naufalzaki05"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square sidebarIcon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
