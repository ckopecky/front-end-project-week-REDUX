import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NoteCards.css';


const mapStateToProps = (state) => {
    return {notes: state.notes};
};

const NoteCards = ({notes})=>{
    console.log({notes});
    return(
        <ul>
            {notes.map(el => {
                return(
                 <Card  key={el.id} className = "card">
                 <CardTitle key={el.note_title} className = "card-title">
                    <Link to = '/list/number'>{el.note_title}</Link></CardTitle>
                    <CardText key={el.note_body} className = "card-body">{el.note_body}</CardText>
                 </Card>
                )
            })}
        </ul>
    );  
}
export default connect(mapStateToProps)(NoteCards);

    