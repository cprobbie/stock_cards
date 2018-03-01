import React from 'react'
import './Card.scss'
import { List, ListItem } from 'material-ui/List';

const listStyle = {
  height: 100,
  width: 100,
  display: 'inline-block',
  fontSize: 30
}


export default function Card(props) {
  const updateCards = props.updateCards
  let response = updateCards(props.codes[props.index])
  response.then(function(result){
    console.log(response)
  })
  // const holdingObj = props.holdingObj
  // let codes = holdingObj.keys()
  // let amount = holdingObj.values()
  return (
    <div className="card">
      <header>Code: {props.codes[props.index]}</header>
      <h4>{response[0]}</h4>
      <div className='content'>
        <span className='price' >80.08</span>
        <div style={{display:'flex',justifyContent:'space-around'}} >
          <span className='change' >+1.2</span>
          <span className='pChange' >+1%</span>
        </div>
        <div style={{display:'flex',justifyContent:'space-around'}} >
          <List style={listStyle}>
            <ListItem primaryText={props.amount} secondaryText="Holding" />
          </List>
          <List style={listStyle}>
            <ListItem primaryText="40000" secondaryText="Value" />
          </List> 
        </div>
      </div>  
    </div>      
  )
}

// export default function Cards(props) {
//   const holdingObj = props.holdingObj
//   let codes = holdingObj.keys()
//   let amount = holdingObj.values()
//   const cards = codes.map((code, index) =>
//   <Card code={code} index={index} />
//   );
//   return (
//     {cards}
//   )
// }