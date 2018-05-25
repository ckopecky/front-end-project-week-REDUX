import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = (props)=>{

    return(
        <div className = "card-container">
    {props.notes.dummydata.map(function(note){
        return(
            <Card key = {note.id} note = {note} className = "card">
                <CardTitle className = "card-title">
                <Link to = '/list/number'> {note.note_title}</Link></CardTitle>
                <CardText className = "card-body">{note.note_body}</CardText>
            </Card>
        )})}
        </div>
    )
}
export default Cards;

    