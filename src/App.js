import React, { Component } from 'react';
import './App.css';
import StockItems from './StockItems';
import WatchList from './WatchList';
import 'bootstrap/dist/css/bootstrap.min.css'
// import StockTwits from './app_component/stockTwits.component';  ========================= uncomment for the api call results



// https://api.stocktwits.com/api/2/streams/symbol/AAPL.json
// Consumer key: ca8d6374e820207e
// Consumer secret: 286aec938c3c0573cd3d734e1b9e13dd60a1d0f7

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super();
    this.state = {
      // ticker_symbol: '',
      // watchlist_items: [],

      // twitt: { messages: [] }, // this.getTwits() ========================= uncomment this to make the API call

      items: [],
      currentItem: {
        text: '',
        key: ''
      },
    }
    // this.getTwits() ========================= uncomment this to make the API call
  }

  handleInput = e => {
    console.log('hello from input')
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    console.log('add item upgraded')
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })
    this.setState({
      items: filteredItems,
    })
  }


  getTwits = async () => {
    const api_call = await fetch(`https://api.stocktwits.com/api/2/streams/symbol/AMZN.json`);
    const response = await api_call.json();
    // console.log(response);

    this.setState({
      twitt: response
    });
  }


  render() {
    return (
      <div className="App">
        <h1> Stock list to watch </h1>
        <WatchList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />

        <StockItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
        />


        {/* <StockTwits
          twitt={this.state.twitt}
        // ticker_symbol={this.state.ticker_symbol} ========================= uncomment for the api call results
        /> */}
      </div>
    );
  }
}
export default App;
