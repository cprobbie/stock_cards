import React from 'react'
import './BigCard.scss'
import { RaisedButton } from 'material-ui';


export default class BigCard extends React.Component {

  render() {
    return (
      <div className="bigCard">
        <header style={{fontSize:18}}>Code: CBA</header>
        <h4>Commonweath Bank Australia</h4>
        <div className='content'>
          <div style={{ display: 'flex',justifyContent:'space-around' }} >
            <span className='price' >80.08</span>
            <span className='change' >+1.2</span>
            <span className='pChange' >+1%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <ul>
              <li>Previous Close: 75.46</li>
              <li>52 Week High: 87.74</li>
              <li>52 Week Low: 73.2</li>
              <li>P/E Ratio: 13.36</li>
              <li>Market Cap: 132B</li>
            </ul>
            <ul>
              <li>Sector: Bank</li>
              <li>EPS: 556.4</li>
              <li>DPS: 429.0</li>
              <li>Dividend: 5.7%</li>
            </ul>
          </div>
          <div style={{display:'flex', justifyContent:'space-around', margin:'10px 10px'}} >
            <input style={{height:40,fontSize:18}} type='number' />
            <span style={{fontSize:30}} >Value: 760.7</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <RaisedButton primary={true} label='BUY' style={{width:200}} />
            <RaisedButton secondary={true} label='SELL' style={{ width: 200 }}/>
          </div>
        </div>
      </div>
    )
  }
}