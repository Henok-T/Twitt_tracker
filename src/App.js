import React, { Component } from 'react';
import './App.css';
import StockItems from './StockItems';
import WatchList from './WatchList';
import 'bootstrap/dist/css/bootstrap.min.css'
import StockTwits from './app_component/stockTwits.component';
import Navbar from './Navbar';



// https://api.stocktwits.com/api/2/streams/symbol/AAPL.json
// Consumer key: ca8d6374e820207e
// Consumer secret: 286aec938c3c0573cd3d734e1b9e13dd60a1d0f7

class App extends Component {
  inputElement = React.createRef()
  constructor() {
    super();
    this.state = {


      twitt: { messages: [] },

      items: [],
      currentItem: {
        text: '',
        key: ''
      },
    }
    // this.getTwits()
  }

  handleInput = e => {
    // console.log('hello from input')
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })
  }

  addItem = e => {
    e.preventDefault()
    // console.log('add item upgraded')
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      // console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' }
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

  loadTiwtts = async (text) => {
    const stockName = text;
    const api_call = await fetch(`https://api.stocktwits.com/api/2/streams/symbol/${stockName}.json`)
    const response = await api_call.json();
    console.log(response);

    this.setState({
      twitt: response,
    });


  }


  // getTwits = async () => {
  //   const api_call = await fetch(`https://api.stocktwits.com/api/2/streams/symbol/AMZN.json`);
  //   const response = await api_call.json();


  //   this.setState({
  //     twitt: response
  //   });
  // }


  render() {
    return (
      <div className="App">
        <Navbar />
        <h5 className='text-left'> Add your fav stock to your watch list and track what people are saying about it.  </h5>
        <WatchList
          addItem={this.addItem}
          inputElement={this.inputElement}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />

        <StockItems
          entries={this.state.items}
          deleteItem={this.deleteItem}
          loadTiwtts={this.loadTiwtts}
        />


        <StockTwits
          twitt={this.state.twitt}
        />
      </div>
    );
  }
}
export default App;
