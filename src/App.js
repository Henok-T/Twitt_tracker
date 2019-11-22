import React, { Component } from 'react';
import './App.css';
import StockItems from './StockItems';
import WatchList from './WatchList';
import 'bootstrap/dist/css/bootstrap.min.css'
import StockTwits from './app_component/stockTwits.component';
import Navbar from './Navbar';



class App extends Component {
  constructor() {
    super();
    this.state = {

      headers: {
        accept: "Accept: application/json"
      },
      error: "",
      twitt: { messages: [] },

      items: [],
      currentItem: {
        text: '',
        key: ''
      },
    }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })

  }

  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
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
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const targetUrl = `https://api.stocktwits.com/api/2/streams/symbol/${stockName}.json`
      fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(data => {
          console.table(data);
          if (data.response.status === 200) {
            this.setState({
              twitt: data
            });

          }
          else {
            alert("Ops! Something went wrong. Pls Double check the ticker spelling and try again.", JSON.stringify(data.errors.message));
            this.setState({
              error: "we have error",
            });
          }
        })
    }
    catch (e) {
      console.log("Api error", e)
      return e;
    }
  }

  render() {
    return (
      <div className="container-fluid App">
        <div class="row">
          <div class="col align-self-start">
            <Navbar />
            <p className=''> What are investors and traders saying about your favorite stock?</p>
            <span className=''>Add it to your watch list and follow. </span>
            <span className='testText'> Added header line 80 (09:45) </span>
          </div>
        </div>

        <div class="row">
          <div class="col align-self-center">
            <WatchList
              addItem={this.addItem}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              currentItem={this.state.currentItem}
            />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <StockItems
              entries={this.state.items}
              deleteItem={this.deleteItem}
              loadTiwtts={this.loadTiwtts}
            />
          </div>
          <div class="col">
            <StockTwits
              twitt={this.state.twitt}
            />
          </div>
        </div>

      </div>
    );
  }
}
export default App;



/*
<div class="container">

  <div class="row">
    <div class="col align-self-start">
      1of 1 ================================THE NAVBAR
    </div>
  </div>

  <div class="row">
    <div class="col align-self-center">
      1 of 1 THE SEARCH FORM
    </div>
  </div>

  <div class="row">
    <div class="col">
      1 of 2 THE FAVORITE WATCHLIS OF STOCK===============
    </div>

    <div class="col">
      2 of 2 THE JSON DATA RESPONSE
    </div>
  </div>

</div>



*/