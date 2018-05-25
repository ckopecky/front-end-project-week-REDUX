import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './NoteContainer.css';
import { dummydata } from '../../dummydata/dummydata';
import NoteCards from './NoteCards';
import { connect } from 'react-redux';
import { createNote, readNote, updateNote, deleteNote } from '../../JS/actions/index-a';

class NoteContainer extends Component {

    render(){
        return(
            <div>
            <Sidebar />
            <div>hello</div>
            <NoteCards />
            </div>
        )
    }
}
export default NoteContainer;