import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/Actions';

class Main extends Component {

    addToCart = (product) => {
        this.props.addToCart(product);
    }

    render() {
        const { products } = this.props;

        let product = products.map((product, index) => {
            return (
               <div className="col-md-3" key={index}>
                    <div className="cart-product">
                        <div className="img-prod">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="info-prod">
                            <h3>{ product.name }</h3>
                            <span>${ product.price }</span>
                            <button onClick={() => this.addToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                </div> 
            )
        });
        return (
            <main className="main">
                    <div className="container">
                        <div className="row">
                            { product }
                        </div>
                    </div>
                </main>
        )
	}
}

const mapStateToProps = (state) => {
    return {
        products: state.Products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(actions.addProductToCart(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
