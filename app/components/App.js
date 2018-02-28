import React from 'react'
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import LeaderBoard from './LeaderBoard'
import Main from "./Main"
import Drawer from 'material-ui/Drawer';
import BigCard from './BigCard';
import LineChart from 'react-chartkick';
import { Line } from 'react-chartjs-2';

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
    this.state = { open: false };
  }

  handleToggle() {
    console.log('button clicked', this)
    // if (!this.refs.myRef) return;
    this.setState({
      open: !this.state.open
    })
  }

  handleClose() {
    console.log('button clicked')
    this.setState({
      open: false
    })
  }

  render() {
    return (
    <div>
      <div className="top" style={{backgroundColor: 'yellow', display:'flex', justifyContent:'space-around'}} >
        <h1>StockCards</h1>
        <input />
      </div>
        <RaisedButton label="SEARCH" fullWidth={true} primary={true} onClick={this.handleToggle}/>
      <div className='side' style={{ backgroundColor: 'lightblue', width: 300, display: 'inline-block' }}>
        <p style={{width: 150, margin: '30px auto'}}>Draw a StockCard from the Stock deck to buy stocks</p>
          <RaisedButton label="DRAW" primary={true} style={{height: 280, width: 200, borderRadius: 8, margin: '0px 50px' }} />
        <p style={{width: 150, margin: '15px auto'}} >The deck includes ASX50 stocks which weight about 63% of the entire ASX</p>
        <h3 style={{ width: 150, margin: '25px auto'}}>LeaderBoard</h3>
        <LeaderBoard />       
      </div>
      <Main />
      <Drawer
        ref="myRef"
        docked={false}
        width={570}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}
      >
        <BigCard />
        <p style={{textAlign:'center'}} >* $20 brokage fee is charged on each transaction</p>
        <Line data={data} />
      </Drawer>
      <footer style={{backgroundColor:'yellow'}} >2018</footer>
    </div>
    )
  }
}
