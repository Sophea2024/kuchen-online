import React, { Component } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/product";
import ShoppingCard from "./components/shopping-cake";
import CheckoutPage from "./components/checkoutPage";
//import marinKafer from './assets/img/marin_kaefer.jpg';

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
            <div> 
              <h1 className="welcome-text">Willkommen zum mein Bachwelt!</h1>          
              <div className="main-container">
                <div className="product-container">
                  <Product 
                    onAdd={() => this.addItem(1, 'Marinkäfer', 18)}                   
                    image={`${process.env.PUBLIC_URL}/assets/img/marin_kaefer.jpg`} 
                    title="Marinkäfer Kuchen" 
                    description="Bitte füge Marinkäfer Kuchen zu deinem Warenkorb hinzu" 
                    price="18€" 
                  />
                  <Product 
                    onAdd={() => this.addItem(1, 'Schwedische Prinzessin', 33)} 
                    image={`${process.env.PUBLIC_URL}/assets/img/schwedische_t.jpg`}
                    title="Schwedische Prinzessin Torte" 
                    description="Bitte füge Schwedische Princessin Torte zu deinem Warenkorb hinzu" 
                    price="33€" 
                  />
                  <Product 
                    onAdd={() => this.addItem(1, 'Weißwälder', 30)} 
                    image={`${process.env.PUBLIC_URL}/assets/img/weit_k1.jpg`} 
                    title="Weißwälder Kuchen" 
                    description="Bitte füge Weißwälder Kuchen zu deinem Warenkorb hinzu." 
                    price="30€" 
                  />
                  <Product 
                    onAdd={() => this.addItem(1, 'Himbeer Quark Torte', 45)} 
                    image={`${process.env.PUBLIC_URL}/assets/img/him_quark_t1.jpg`}
                    title="Himbeer Quark Torte" 
                    description="Bitte füge Himbeer Quark Torte zu deinem Warenkorb hinzu." 
                    price="45€" 
                  />
                  <Product 
                    onAdd={() => this.addItem(1, 'Schwarzwälder Kuchen', 35)} 
                    image={`${process.env.PUBLIC_URL}/assets/img/schw_k1.jpg`}
                    title="Schwarzwälder Kuchen" 
                    description="Bitte füge Schwarzwälder Kuchen zu deinem Warenkorb hinzu." 
                    price="35€" 
                  />
                  <Product 
                    onAdd={() => this.addItem(1, 'Himbeere Joghurt Torte', 30)} 
                    image={`${process.env.PUBLIC_URL}/assets/img/him_joghurt_t1.jpg`}
                    title="Himbeere Joghurt Torte" 
                    description={
                      <>
                        Himbeere Joghurt Torte schmeckt sehr gut. <br /><br />
                        Bitte füge Himbeer Quark Torte zu deinem Warenkorb hinzu.
                      </>
                    }   
                    price="30€" 
                  />
                </div>
                <ShoppingCard
                  items={this.state.items}
                  onAdd={this.addItem}
                  onDecrease={this.decreaseItemAmount}
                />
              </div>
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