import React from 'react'
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import LeaderBoard from './LeaderBoard'
import Main from "./Main"
import Drawer from 'material-ui/Drawer';
import BigCard from './BigCard'
import MenuItem from 'material-ui/MenuItem';

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
        width={500}
        open={this.state.open}
        onRequestChange={(open) => this.setState({ open })}
      >
        <BigCard />
      </Drawer>
      <footer style={{backgroundColor:'yellow'}} >2018</footer>
    </div>
    )
  }
}
