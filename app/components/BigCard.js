import React from 'react'
import './BigCard.scss'
import { List, ListItem } from 'material-ui/List';

const listStyle = {
  height: 100,
  width: 100,
  display: 'inline-block',
  fontSize: 30
}

export default class BigCard extends React.Component {

  render() {
    return (
      <div className="card">
        <header>Code: CBA</header>
        <h4>Commonweath Bank Australia</h4>
        <div className='content'>
          <span className='price' >80.08</span>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <span className='change' >+1.2</span>
            <span className='pChange' >+1%</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <List style={listStyle}>
              <ListItem primaryText="50" secondaryText="Holding" />
            </List>
            <List style={listStyle}>
              <ListItem primaryText="40000" secondaryText="Value" />
            </List>
          </div>
        </div>
      </div>
    )
  }
}