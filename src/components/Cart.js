import cancel from "../images/cancel.png";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/Actions";

class Cart extends Component {

    changeQuantity = (product, number) => {
        this.props.changeQuantity(product, number);
    }

    removeProduct = (product) => {
        this.props.removeProduct(product);
    }

    setShippingCost = (event) => {
        this.props.setShippingCost(parseInt(event.target.value));
    }

    render() {
        const { productInCart, shippingCost } = this.props;
        let products;
        if (productInCart.length === 0) {
            products = <tr>
                <td>There is no product</td>
            </tr>
        } else {
            products = productInCart.map((product, index) => {
                return (
                    <tr key={index}>
                        <td className="prod-thumbnail">
                            <img src={product.image} alt={product.name} />
                        </td>
                        <td className="prod-name">
                            {product.name}
                        </td>
                        <td className="prod-price">
                            ${product.price}
                        </td>
                        <td className="prod-quantity">
                            <div className="quantity-content">
                                <span>{product.quantity}</span>
                                <div className="btn-change-quantity">
                                    <button className="plus" onClick={() => this.changeQuantity(product, 1)}>+</button>
                                    <button className="minus" onClick={() => this.changeQuantity(product, -1)}>-</button>
                                </div>
                            </div>
                        </td>
                        <td className="prod-total">
                            ${product.quantity * product.price}
                        </td>
                        <td className="prod-remove">
                            <img src={cancel} alt={cancel} onClick={() => this.removeProduct(product)}/>
                        </td>
                    </tr>
                )
            });
        }

        let subTotal = 0;
        if (productInCart.length === 0) {
            subTotal = 0;
        } else {
            for (let i = 0; i < productInCart.length; i++) {
                subTotal += (productInCart[i].quantity * productInCart[i].price);
            }
        }

        let total = subTotal + shippingCost;

        return (
            <section className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th colSpan="2" className="prod-name">Item</th>
                                        <th className="prod-price">Price</th>
                                        <th className="prod-quantity">Quantity</th>
                                        <th className="prod-total">Total</th>
                                        <th className="prod-remove"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { products }
                                </tbody>
                            </table>
                        </div>
                        <div className="col-md-3">
                            <div className="cart-total" >
                                <h3 className="cart-total_title">Cart Totals</h3>
                                <div className="cart-total_info">
                                    <div className="subtotla">
                                        <span>Subtotal</span>
                                        <span>${subTotal}</span>
                                    </div>
                                    <div className="shipping">
                                        <div className="shipping_title">
                                            <span>Shipping</span>
                                        </div>
                                        <div className="shipping-content" onChange={(event) => this.setShippingCost(event)} >
                                            <div className="free-shipping">
                                                <input type="radio" value={0} name="shipping" defaultChecked />
                                                <label>Free shipping</label>
                                            </div>
                                            <div className="local-pickup">
                                                <input type="radio" value={10} name="shipping" />
                                                <label>Local pickup: <strong>$10</strong></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="total">
                                        <span>Total</span>
                                        <span>${ total }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
	}
}

const mapStateToProps = (state) => {
    return {
        productInCart: state.Cart,
        shippingCost: state.shippingCost,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuantity: (plus, number) => {
            dispatch(actions.changeQuantity(plus, number));
        },
        removeProduct: (product) => {
            dispatch(actions.removeProduct(product));
        },
        setShippingCost: (cost) => {
            dispatch(actions.setShippingCost(cost));
        } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
