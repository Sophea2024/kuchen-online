import React, {Component} from "react";
import { Link } from "react-router-dom";

class ShoppingCard extends Component {
  state = {}

  /* Calculate total price */
  calculateTotalPrice = () => {
    return this.props.items.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0);
  };

  /*display all item in Warenkorp with user-click*/
  render() { 
    return <div className="shopping-card">
      <h3>Warenkorp</h3>
      {this.props.items.map(item =>( 
        <div key={item.name}>
          {item.amount} x {item.name} {item.price}€ 
        </div>
      ))}
      <hr />
      <div>Total Price: {this.calculateTotalPrice()}€</div>
      <Link to="/checkout">
        <button className="btn btn-primary">Zum Warenkorp</button>
      </Link>
    </div>;
  }
}
 
export default ShoppingCard;