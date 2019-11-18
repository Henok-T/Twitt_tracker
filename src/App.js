import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import StockTwits from './app_component/stockTwits.component';  ========================= uncomment for the api call results
import WatchList from './app_component/watchList.component';

// https://api.stocktwits.com/api/2/streams/symbol/AAPL.json
// Consumer key: ca8d6374e820207e
// Consumer secret: 286aec938c3c0573cd3d734e1b9e13dd60a1d0f7

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker_symbol: '',
      watchlist_items: [],
      twitt: { messages: [] },
    };
    // this.getTwits() ========================= uncomment this to make the API call
  }

  onChange = (event) => {
    this.setState({ ticker_symbol: event.target.value });

  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      ticker_symbol: '',
      watchlist_items: [...this.state.watchlist_items, this.state.ticker_symbol]
    });

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
        <div className="container">
          <h1> Stock list to watch </h1>
          <form onSubmit={this.onSubmit}>
            <input value={this.state.ticker_symbol} onChange={this.onChange} placeholder="Enter New stock symbol" />
            <button>Add</button>
          </form>
          <WatchList
            watchlist_items={this.state.watchlist_items}
          />
        </div>


        {/* <StockTwits
          twitt={this.state.twitt}
        // ticker_symbol={this.state.ticker_symbol} ========================= uncomment for the api call results
        /> */}
      </div>
    );
  }
}
export default App;
