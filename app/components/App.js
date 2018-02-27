import React from 'react'
import BootstrapTable from './BootstrapTable'
import LeaderBoard from './LeaderBoard'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <div className="top">
        <h1>StockCards</h1>
        <input />
        <button>Search</button>
      </div>
      <div className='side'>
        <LeaderBoard />
      </div>
      <div className='main'>  
        <BootstrapTable />
        <div className="assets">
          {/* <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard />
          <StockCard /> */}
        </div>
      </div>  
    </div>
    )
  }
}
