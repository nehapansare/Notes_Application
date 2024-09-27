import React from 'react';
import "./NoteCard.css";

function NoteCard({ title, description, category,onDelete }) {
  return (
    <div className="note-card">
      <div className="note-card-content">
        <div className="note-card-header">
          <h1>{title}</h1>
          <span className="category ">{category}</span>
        </div>
        <div className="note-card-body">
          <p>{description}</p>
        </div>
        <div className='cat-container'>
        <button onClick={onDelete} className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
