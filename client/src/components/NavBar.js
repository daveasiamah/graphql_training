import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" class="brand-logo">
            <i className="material-icons">cloud</i>Logo
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">
                <i className="material-icons">search</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="material-icons">view_module</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="material-icons">refresh</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
