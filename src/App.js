import React, { Component } from 'react';
import './App.css';
import StockItems from './app_component/StockItems';
import WatchList from './app_component/WatchList';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockTwits from './app_component/stockTwits';
import Navbar from './app_component/Navbar';
// import Navbar from './app_component/Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      headers: {
        accept: "Accept: application/json"
      },
      loading: false,
      currentPage: 1,
      twittsPerPage: 3,
      error: "",
      twitt: { messages: [] },

      items: [],
      currentItem: {
        text: '',
        key: ''
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text: itemText, key: Date.now() }
    this.setState({
      currentItem,
    })

  }

  // Adding stock item to watch list

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

  // Deleting stock item from watch list

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

  // The API call

  loadTiwtts = async (text) => {
    this.setState({
      loading: true,
    });

    const stockName = text;
    try {
      // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
      const targetUrl = `https://api.stocktwits.com/api/2/streams/symbol/${stockName}.json`
      fetch(targetUrl)
        .then(res => res.json())
        .then(data => {
          //console.table(data);
          if (data.response.status === 200) {
            this.setState({
              twitt: data,
              loading: false
            });
          }
          else {
            alert("Ops! Something went wrong. Pls Double check the ticker spelling and try again.", JSON.stringify(data.errors.message));
            this.setState({
              error: "we have error",
              loading: false
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

    // Pagination logic
    const { twitt, currentPage, twittsPerPage } = this.state;

    // Get current twitts
    const indexOfLastPost = currentPage * twittsPerPage;
    const indexOfFirstPost = indexOfLastPost - twittsPerPage;
    const currentTwitts = twitt.messages.slice(indexOfFirstPost, indexOfLastPost);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(twitt.messages.length / twittsPerPage); i++) {
      pageNumbers.push(i);
      //console.log('printing the for looop', pageNumbers);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      //console.log(number);
      return (
        <li
          className='page-link px-2 py-1'
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div className="container App">
        <div className="row">
          <div className="col">
            <Navbar />
            <p className='subTitle'> What're traders saying about your stock?</p>
            <span className='subTitle'>Add it to your watch list and follow. </span>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-6 offset-md-3">
            <WatchList
              addItem={this.addItem}
              inputElement={this.inputElement}
              handleInput={this.handleInput}
              currentItem={this.state.currentItem}
            />
          </div>
        </div>

        <div className="row" id='stockAndTwit'>
          <div className="col col-md-4">
            <StockItems
              entries={this.state.items}
              deleteItem={this.deleteItem}
              loadTiwtts={this.loadTiwtts}
            />
          </div>
          <div className="col col-md-8">
            <StockTwits
              twitt={currentTwitts}
              symbol={this.state.twitt.symbol}
              loading={this.state.loading}
              renderPageNumbers={renderPageNumbers}
            />

            <ul className='pagination mw-100 d-flex justify-content-center' id="page-numbers">
              {renderPageNumbers}
            </ul>
          </div>

        </div>
      </div>
    );
  }
}
export default App;
