import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const style = {
  display: 'inline-block',
  marginLeft: 40
}

const DetailList = (props) => (
  <div style={style}>
    <List style={style}>
      <ListItem primaryText={'$'+props.cashAccount.toFixed(2)} secondaryText="Cash Account"/>
      <ListItem primaryText={'$'+props.profit.toFixed(2)} secondaryText="Profit" />
    </List>
    <List style={style}>
      <ListItem primaryText={'$'+props.stockValue.toFixed(2)} secondaryText="Stock Value" />
      <ListItem primaryText={props.holding+'/6'} secondaryText="Stocks Holding" />   
    </List>
    <List style={style}>
      <ListItem primaryText="N/A" secondaryText="Ranking" />
      <ListItem primaryText={'$'+(props.cashAccount+props.stockValue)} secondaryText="Total Asset" />
    </List>
    <Divider />
  </div>
);

export default DetailList;
