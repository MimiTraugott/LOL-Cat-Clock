import React, { Component } from "react";
import "./DropdownMenu.css";

class DropdownMenu extends Component {
  constructor() {
    super();
    
  }
  render() {
    function openSlideMenu() {
        document.getElementById("side-menu").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
  
      function closeSlideMenu() {
        document.getElementById("side-menu").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
      }
    return (
      <div>
        <nav class="navbar">
          <span class="open-slide">
            <a href="#" onClick={openSlideMenu()}>
              <svg width="30" height="30">
                <path d="MO,5 30,5" stroke="#fff" stroke-width="5" />
                <path d="MO,14 30,14" stroke="#fff" stroke-width="5" />
                <path d="MO,23 30,23" stroke="#fff" stroke-width="5" />
              </svg>
            </a>
          </span>
          <ul class="navbar-nav">
            <li>
              <a href="a">Home</a>
            </li>
            <li>
              <a href="a">About</a>
            </li>
            <li>
              <a href="a">Services</a>
            </li>
            <li>
              <a href="a">Contact</a>
            </li>
          </ul>
        </nav>

        <div id="side-menu" class="side-nav">
          <a href="#" class="btn-close" onClick={closeSlideMenu()}>
            &times;
          </a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <div id="main">
          <h1>Responsive Side Menu</h1>
        </div>
        <script></script>
      </div>
    );
  }
}

export default DropdownMenu;
