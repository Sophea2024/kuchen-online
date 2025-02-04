import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/product";
import ShoppingCard from "./components/shopping-cake";
import CheckoutPage from "./components/checkoutPage";

class App extends Component {
  state = {
    items: []
  }
  addItem = (amount, name, price) => {
    let currentItems = this.state.items;

    let existingItem = this.state.items.find(item => item.name === name);
    if (existingItem) {
      existingItem.amount++;
    } else {

      currentItems.push({
        amount, name, price
      });
    }

    this.setState({ items: currentItems });
    console.log(this.state);
  }

  decreaseItemAmount = (name) => {
    let currentItems = this.state.items
      .map(item => {
        if (item.name === name) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter(item => item.amount > 0); // Filtert automatisch Artikel mit Menge 0 heraus

    this.setState({ items: currentItems });
  };

  render() {
    return (
      <Router>
        
        <Routes>
          <Route path="/" element={
            <div className="main-container">
              <div className="product-container">
                <Product onAdd={() => this.addItem(1, 'Marinkäfer', 12)} image="marin_kaefer.jpg" title="Marinkäfer Kuchen" description="Bitte füge Marinkäfer Kuchen zu deinem Warenkorb hinzu" price="12€" />
                <Product onAdd={() => this.addItem(1, 'Schwedische Princessin', 29)} image="schwedische_t.jpg" title="Schwedische Princessin Torte" description="Bitte füge Schwedische Princessin Torte zu deinem Warenkorb hinzu" price="29€" />
                <Product onAdd={() => this.addItem(1, 'Weitwälder', 30)} image="weit_k1.jpg" title="Weitwälder Kuchen" description="Bitte füge Weitwälder Kuchen zu deinem Warenkorb hinzu" price="30€" />
                <Product onAdd={() => this.addItem(1, 'Himbeer Quark Torte', 39)} image="him_quark_t1.jpg" title="Himbeer Quark Torte" description="Bitte füge Himbeer Quark Torte zu deinem Warenkorb hinzu" price="39€" />
              </div>
              <ShoppingCard
                items={this.state.items}
                onAdd={this.addItem}
                onDecrease={this.decreaseItemAmount}
              />
            </div>
          } />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                items={this.state.items}
                onAdd={this.addItem}
                onDecrease={this.decreaseItemAmount}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;