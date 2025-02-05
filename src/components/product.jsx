import React, {Component} from "react";

class Product extends Component {
  state = {  } 
  render() { 
    return (
    <div className="card" style={{width: "18rem"}}>
    <img 
      src={this.props.image} 
      className="card-img-top" 
      alt={this.props.title} 
    />
    <div className="card-body">
      <h5 className="card-title">{this.props.title}</h5>
      <p className="card-text">{this.props.description}</p>
      <p className="card-price">{this.props.price}</p>
      <button onClick={this.props.onAdd} className="btn btn-primary">
        In Warenkorb Hinzufügen
      </button>
    </div>
  </div>
    );
  }
}
 
export default Product;