import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const style = {
  display: 'inline-block',
  marginLeft: 40
}

const DetailList = () => (
  <div style={style}>
    <List style={style}>
      <ListItem primaryText="30000" secondaryText="Cash Account"/>
      <ListItem primaryText="10000" secondaryText="Profit" />
    </List>
    <List style={style}>
      <ListItem primaryText="80000" secondaryText="Stock Value" />
      <ListItem primaryText="6/6" secondaryText="Stocks Holding" />   
    </List>
    <List style={style}>
      <ListItem primaryText="2" secondaryText="Ranking" />
      <ListItem primaryText="1" secondaryText="Level" />
    </List>
    <Divider />
  </div>
);

export default DetailList;
