import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-dark" >
                <a className="navbar-brand" style={{color:'white'}}href="#">
                   ShoppingCart 
                </a>
                <a className="navbar-brand mr-auto" style={{color:'grey',textAlign:'left'}} href="#">
                    Cart{" "}
                    <span className="badge badge-pill badge-primary">
                        {this.props.cartProduct} 
                    </span>
                    </a>
            </nav>
         );
    }
}

export default NavBar;