import React, { Component } from "react";
import 'boxicons';
import { connect } from "react-redux";

class Header extends Component {
    render() {
        const { productInCart } = this.props;
        let quantityOfProduct = 0;
        for (let i = 0; i < productInCart.length; i++) {
            quantityOfProduct += productInCart[i].quantity;
        }
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a href="/#" className="logo">Shoes</a>
                        </div>
                        <div className="col-md-9">
                            <nav className="nav">
                                <ul className="menu">
                                    <li className="menu-item">
                                        <a href="/#">
                                            <box-icon name='cart' ></box-icon>
                                            <span>{ quantityOfProduct }</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        )
	}
}

const mapStateToProps = (state) => {
    return {
        productInCart: state.Cart,
    }
}

export default connect(mapStateToProps, null)(Header);
