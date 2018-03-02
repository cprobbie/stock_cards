import React from 'react'
import './Card.scss'
import { List, ListItem } from 'material-ui/List';

const listStyle = {
  height: 100,
  width: 100,
  display: 'inline-block',
  fontSize: 30
}

export default class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'loading',
      price: 'loading',
      change: 'loading',
      pChange: 'loading',
    }
  }

  componentDidMount(){
    let code = this.props.codes[this.props.index]
    let hostedDomain = 'https://stockcards-backend.herokuapp.com/quote/' + code
    fetch(hostedDomain)
      .then(res => res.json())
      .then(res => this.setState({
        symbol: res.symbol,
        name: res.name,
        price: res.l,
        exchange: res.e,
        change: res.c,
        pChange: res.cp + '%',
        changeColor: res.c > 0 ? 'green' : 'red',
        pChangeColor: res.cp > 0 ? 'green' : 'red'
      }))
  }

  render(){
    return (
      <div className="card">
        <header>Code: {this.props.codes[this.props.index]}</header>
        <h4>{this.state.name}</h4>
        <div className='content'>
          <span className='price' >{this.state.price}</span>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <span className={`change ${this.state.changeColor}`}>{this.state.change}</span>
            <span className={`change ${this.state.changeColor}`}>{this.state.pChange}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <List style={listStyle}>
              <ListItem primaryText={this.props.holdingObj[this.state.symbol]} secondaryText="Holding" />
            </List>
            <List style={listStyle}>
              <ListItem primaryText={(this.state.price * this.props.holdingObj[this.state.symbol]).toFixed(2)} secondaryText="Value" />
            </List>
          </div>
        </div>
      </div>
    )
  }
}



// export default function Card(props) {
//   // const updateCards = props.updateCards
//   // let response = updateCards(props.codes[props.index])
//   // response.then(function(result){
//   //   console.log(response)
//   // })
//   // const holdingObj = props.holdingObj
//   // let codes = holdingObj.keys()
//   // let amount = holdingObj.values()
//   return (
//     <div className="card">
//       <header>Code: {props.codes[props.index]}</header>
//       <h4>{response[0]}</h4>
//       <div className='content'>
//         <span className='price' >80.08</span>
//         <div style={{display:'flex',justifyContent:'space-around'}} >
//           <span className='change' >+1.2</span>
//           <span className='pChange' >+1%</span>
//         </div>
//         <div style={{display:'flex',justifyContent:'space-around'}} >
//           <List style={listStyle}>
//             <ListItem primaryText={props.amount} secondaryText="Holding" />
//           </List>
//           <List style={listStyle}>
//             <ListItem primaryText="40000" secondaryText="Value" />
//           </List> 
//         </div>
//       </div>  
//     </div>      
//   )
// }

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