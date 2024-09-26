import React from 'react';
import "./NoteCard.css";

function NoteCard({ title, description, category }) {
  return (
    <div className="note-card">
      <div className="note-card-content">
        <div className="note-card-header">
          <h1>{title}</h1>
        </div>
        <div className="note-card-body">
          <p>{description}</p>
          <span className="category">{category}</span>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
