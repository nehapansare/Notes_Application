import React from 'react'
import {cards} from '../../Config/card'
import "./Home.css"
import "../../../src/App.css"
import {Link} from 'react-router-dom'


function home() {
  return (
    <div className="home-container">
    <h2 className="quick-note-title">Quick Note 📓</h2>
    <div className="cards-row">
      {cards.map((card, index) => (
        <div key={index} className="note-container">
        
          <img src={card.imgUrl} className="note-image" alt='pic' />
          

        
          <p className="note-content">{card.content}</p>
        </div>
      ))}
    </div>
    <div className="buttons-container">
      <Link  to="/add">
      <button className="note-button">✍️Add Notes</button>
      </Link>
     <Link to="/show">
     <button className="note-button-alt">📖View Notes</button>
     </Link>
      
    </div>
  </div>
  )
}

export default home
