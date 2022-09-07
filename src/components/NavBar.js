import React from "react";


const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <div class="d-flex flex-row justify-content-start">
            <button className="navbar-brand">Home</button>
            <button className="navbar-brand">Notifications</button>
            <button className="navbar-brand">Messages</button>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
