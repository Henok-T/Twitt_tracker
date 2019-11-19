import React, { Component } from 'react';
import './App.css';
import StockItems from './StockItems';
import WatchList from './WatchList';
import 'bootstrap/dist/css/bootstrap.min.css'
import StockTwits from './app_component/stockTwits.component';
import Navbar from './Navbar';



class App extends Component {
  // inputElement = React.createRef()
  constructor() {
    super();
    this.state = {

      error: "",
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

  deleteItem = (symbol, key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key
    })

    if (this.state.twitt.symbol && this.state.twitt.symbol.symbol.toLowerCase() === symbol.toLowerCase()) {
      this.setState({
        items: filteredItems,
        twitt: { messages: [] }
      })
    } else {
      this.setState({
        items: filteredItems,
      })
    }

  }

  loadTiwtts = async (text) => {
    const stockName = text;
    try {
      const api_call = await fetch(`https://api.stocktwits.com/api/2/streams/symbol/${stockName}.json`);
      const data = await api_call.json();
      console.log(data);
      if (data.response.status === 200) {
        this.setState({
          twitt: data,
        });
      } else {
        alert("we have a problem", JSON.stringify(data.response.errors));
        this.setState({
          error: "we have error",
        });
      }
    } catch (err) {
      console.log("error from api call ", err)
    }





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
