import React, { Component } from 'react';



class Header extends Component{
  render = () => {
    return(
      <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
        <div class="container">
          <ul class="nav navbar-nav">
            <li><a href="main.html" class="navbar-brand">Abra ka Dabra!!!!!!</a></li>
            <li class="active"><a href="main.html">Home</a></li>
            <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Genres<b class="caret"></b></a>
            <ul class="dropdown-menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Comedy</a></li>
              <li><a href="#">Classics</a></li>
              <li><a href="#">Drama</a></li>
              <li><a href="#">Horror</a></li>
            </ul>
            </li>
            <li><a href="UI/about.html">About</a></li>
            <li><a href="UI/contact.html">Contact</a></li>
          </ul>
          <form class="navbar-form navbar-right" role="search">
              <input type="text" class="form-control" placeholder="Search "/>
              <button type="submit" class="btn btn-success"> Submit </button>
          </form>
        </div>
      </header>
    );
  }
}

export default Header;