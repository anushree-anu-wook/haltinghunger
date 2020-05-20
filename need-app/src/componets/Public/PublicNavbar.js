import React, { Component } from "react";
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import logo from "../../assets/logo.png";
// import CompanyHome from "./CompanyHome";

export default class Navbar extends Component {
  state = {
    loggedIn: true,
    categories:[],
  };
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
     
    const res = await axios.get(`http://localhost:5000/api/v1/category`, config);   
    this.setState({
        categories: res.data.data,
        
    });  
    console.log(this.state.categories)      
   };
  render() {
    // let cart;
    let profile, logout;
    if (this.state.loggedIn === true) {
      profile = (
        <ul className="navbar-nav">
          {" "}
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="fa fa-user-circle fa-2x"
                style={{ color: "#f2f2f3  " }}
                aria-hidden="true"
              ></span>
            </a>
            <div
              className="dropdown-menu"
              // aria-labelledby="navbarDropdown"
            >
              
            

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <a className="dropdown-item" href="/farmer/Prof">
                  Profile
                </a> */}
           
                <a className="dropdown-item" href="#">
                  <span
                
                    style={{ color: "#f2f2f3  " }}
                    aria-hidden="true"
                  ></span>
                  Log Out
                </a>
              </div>
            </div>
          </li>
        </ul>
      );
      // logout = (
      //   <a
      //     type="b                                                       utton"
      //     className="btn  navbar-toggle-box-collapse d-none d-md-block "
      //     href="/Login/farmer"
      //     title="Logout"
      //   >
      //     <span
      //       className="fa fa-sign-out fa-2x"
      //       style={{ color: "#f2f2f3  " }}
      //       aria-hidden="true"
      //     ></span>
      //   </a>
      // );
    } else {
      profile = (
        <a
          type="button"
          className="btn  navbar-toggle-box-collapse d-none d-md-block "
          href="user/Login/user"
          title="Profile"
        >
          <span
            className="fa fa-user fa-2x"
            style={{ color: "#f2f2f3  " }}
            aria-hidden="true"
          ></span>

         
        </a>
      );
    }
    return (
      <nav className="navbar navbar-default navbar-expand-md fixed-top navbar-trans navf">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a className="logo top1" href="/ngo/Home">
            <img src={logo} alt="" className=""></img>
            {/* Farm
            <span className="color-b">Easy</span> */}
          </a>
          <button
            type="button"
            className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span className="fa fa-search" aria-hidden="true"></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="/ngo/Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/ngo/AddProfile">
                  AddProfile
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="/ngo/SupplierList">
                  Suppliers
                </a>
              </li>
             
            
  
<li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                   Category
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {this.state.categories.map((cat) => ( 
                  <Link className="dropdown-item" to={{pathname:"/ngo/categorywise",state:{cat_id:cat._id}}}>
                    {cat.catname}
                  </Link>
                   ))} 
                </div>
              </li>
              </ul>
          </div>

          {profile}
          {logout}
          {/* <button
            type="button"
            className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span className="fa fa-search" aria-hidden="true"></span>
          </button> */}
          {/* <a
            type="button"
            className="btn navbar-toggle-box-collapse d-none d-md-block "
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
            href="/cart"
            title="Cart"
          >
          
          </a> */}
        </div>
      </nav>
    );
  }
}
