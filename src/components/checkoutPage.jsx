import React, { Component } from "react";
import { Link } from "react-router-dom";

class CheckoutPage extends Component {
  calculateTotalPrice = () => {
    return this.props.items.reduce((total, item) => total + item.amount * item.price, 0);
  };

  calculatePrice = (item) => {
    return item.amount * item.price;
  };

  render() {
    return (
      <div className="checkout-page">
        <h2>Checkout-Seite</h2>
        {this.props.items.length > 0 ? (
          <div>
            <h3>Artikel:</h3>
            {this.props.items.map(item => (
              <div key={item.name} className="items">
                {item.amount} x {item.name} = {this.calculatePrice(item)} €
                
                <button className="btn btn-secondary btn-plus" onClick={() => this.props.onAdd(1, item.name, item.price)}>+</button>
                <button className="btn btn-secondary btn-minus" onClick={() => this.props.onDecrease(item.name)}> - </button>
              </div>
            ))}
            <hr />
            <h3>Gesamtpreis: {this.calculateTotalPrice()}€</h3>
          </div>
        ) : (
          <p>Ihr Warenkorb ist leer.</p>
        )}
        <Link to="/">Zurück zum Shop</Link>
      </div>
    );
  }
}

export default CheckoutPage;
