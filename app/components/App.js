import React from 'react'
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import LeaderBoard from './LeaderBoard'
import Main from "./Main"
import Drawer from 'material-ui/Drawer';
import BigCard from './BigCard';
import BigCardTrade from './BigCardTrade'
import LineChart from 'react-chartkick';
import { Line } from 'react-chartjs-2';
import logo from './image/logo.png'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Stock Price',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
    this.handleDraw = this.handleDraw.bind(this)
    this.onQtyChange = this.onQtyChange.bind(this)
    this.buyShare = this.buyShare.bind(this)
    this.state = { 
      open: false,
      openTrade: false,
      input: ',',
      cashAccount: 100000,
      stockValue: 0,
      profit: 0,
      holding: 0,
      holdingObj:{}
    };
  }

  buyShare(){
    let code = this.state.symbol
    console.log(code)
    let holdingObj = this.state.holdingObj;
    holdingObj[code] = this.state.qty;
    console.log(this.state.holdingObj)
    this.setState({
      holdingObj: holdingObj,
      cashAccount: this.state.cashAccount - this.state.value - 20
    })
  }

  onQtyChange(e) {
    this.setState({
      qty: e.target.value,
      value: (e.target.value * this.state.price).toFixed(2)
    })
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  handleToggle() {
    console.log(this.state.input);
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let localDomain = 'https://localhost:4567/quote/' + this.state.input
    let hostedDomain = 'https://stockcards-backend.herokuapp.com/quote/' + this.state.input
    fetch(hostedDomain)
    .then(res => res.json())
    .then(res => this.setState({
      symbol: res.symbol,
      name: res.name,
      price: res.l,
      exchange: res.e,
      change: res.c,
      pChange: res.cp + '%',
      openPrice: res.op,
      dayHi: res.hi,
      dayLo: res.lo,
      vol: res.vo,
      hi52: res.hi52,
      lo52: res.lo52,
      marketCap: res.mc,
      pe: res.pe,
      eps: res.eps,
      dividend: res.dy + '%',
      open: !this.state.open
    }))
  }

  updateCards(code){
    var response
    const localDomain = 'http://localhost:4567/quote/' + 'asx:' + code
    return fetch(localDomain)
      .then(res => res.json())
      .then(res => [res.name, res.l, res.c, res.cp])
    
  }

  handleDraw(){
    console.log('drawn!')
    const STOCKS = ['agl', 'amc', 'amp', 'anz', 'apa', 'all', 'asx', 'azj', 'bhp', 'bxb', 'ctx', 'cba', 'cpu', 'csl', 'dxs', 'fmg','gmg', 'gpt', 'ipl', 'iag', 'jhx', 'llc', 'mqg', 'mpl', 'mgr', 'nab', 'ncm', 'osh', 'ori', 'org', 'qan', 'qbe', 'rhc', 'rio', 'sto', 'scg', 'shl', 's32', 'sgp', 'sun', 'syd', 'tls', 'tcl', 'twe', 'vcx', 'wes', 'wfd', 'wbc', 'wpl', 'wow'] ;
    let randomStock = STOCKS[Math.floor((Math.random() * 50))];
    let localDomain = 'https://localhost:4567/quote/' + 'asx:' + randomStock
    let hostedDomain = 'https://stockcards-backend.herokuapp.com/quote/' + 'asx:' + randomStock
    fetch(hostedDomain)
      .then(res => res.json())
      .then(res => this.setState({
        symbol: res.symbol,
        name: res.name,
        price: res.l,
        exchange: res.e,
        change: res.c,
        pChange: res.cp + '%' ,
        openPrice: res.op,
        dayHi: res.hi,
        dayLo: res.lo,
        vol: res.vo,
        hi52: res.hi52,
        lo52: res.lo52,
        marketCap: res.mc,
        pe: res.pe,
        eps: res.eps,
        dividend: res.dy + '%',
        openTrade: !this.state.openTrade,
        qty: '',
        value: 0
      }))
  }

  handleClose() {
    this.setState({
      open: false,
      openTrade: false
    })
  }

  render() {
    return (
    <div>
        <div className="top" style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems:'flex-end'}} >
        <img src={logo} />
        <input placeholder='Enter stock code' style={{fontSize:22, height:50, borderRadius:8}} onChange={this.onInputChange} />
      </div>
        <RaisedButton label="SEARCH" fullWidth={true} primary={true} onClick={this.handleToggle}/>
        <div className='side' style={{ backgroundColor: 'rgba(35, 189, 206, 0.1)', width: 300, display: 'inline-block' }}>
        <p style={{width: 150, margin: '30px auto'}}>Draw a StockCard from the stock deck below to buy stocks</p>
          <RaisedButton label="DRAW" primary={true} style={{height: 280, width: 200, borderRadius: 8, margin: '0px 50px' }} onClick={this.handleDraw} />
        <p style={{width: 150, margin: '15px auto'}} >The deck includes ASX50 stocks which weight about 63% of the entire ASX</p>
        <h3 style={{ width: 150, margin: '25px auto'}}>LeaderBoard</h3>
        <LeaderBoard />       
      </div>
      <Main
        cashAccount= {this.state.cashAccount}
        stockValue= {this.state.stockValue}
        profit= {this.state.profit}
        holding= {this.state.holding}
        holdingObj={this.state.holdingObj}
        updateCards={this.updateCards}
      />
      <Drawer
        docked={false}
        width={570}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}
      >
        <BigCard
        symbol={this.state.symbol}
        name={this.state.name}
        price={this.state.price}
        exchange={this.state.exchange}
        change={this.state.change}
        pChange={this.state.pChange}
        openPrice={this.state.openPrice}
        dayHi={this.state.dayHi}
        dayLo={this.state.dayLo}
        vol={this.state.vol}
        hi52={this.state.hi52}
        lo52={this.state.lo52}
        marketCap={this.state.marketCap}
        pe={this.state.pe}
        eps={this.state.eps}
        dividend={this.state.dividend}
        />
        <Line data={data} />
      </Drawer>
      <Drawer
        docked={false}
        width={570}
        open={this.state.openTrade}
        onRequestChange={(openTrade) => this.setState({ openTrade })}
      >
        <BigCardTrade
          symbol={this.state.symbol}
          name={this.state.name}
          price={this.state.price}
          exchange={this.state.exchange}
          change={this.state.change}
          pChange={this.state.pChange}
          openPrice={this.state.openPrice}
          dayHi={this.state.dayHi}
          dayLo={this.state.dayLo}
          vol={this.state.vol}
          hi52={this.state.hi52}
          lo52={this.state.lo52}
          marketCap={this.state.marketCap}
          pe={this.state.pe}
          eps={this.state.eps}
          dividend={this.state.dividend}
          qty={this.state.qty}
          value={this.state.value}
          onQtyChange={this.onQtyChange}
          buyShare={this.buyShare}
        />
        <Line data={data} />
      </Drawer>
        <footer style={{ height: 50 }} ><p style={{ marginTop: 10, textAlign: 'center'}} >StockCards 2018 by Robbie Cheng</p></footer>
    </div>
    )
  }
}
