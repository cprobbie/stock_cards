import React from 'react'
import './Main.scss'
import DetailList from './DetailList'
import Card from './Card'

export default class Main extends React.Component{

  render(){
    return (
      <div className='main'>
        <div className="account">
          <h3 style={{display:'inline-block', verticalAlign:'top'}} >MY ACCOUNT</h3>
          <DetailList />
        </div>
        <div className="assets">
          <h3 style={{margin:'30px 0'}} >MY ASSETS</h3>
          <div className='cardContainer'>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>  
    )
  }
}