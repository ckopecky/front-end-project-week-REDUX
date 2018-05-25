import { dummydata as note} from '../../dummydata/dummydata';
import { CREATE_NOTE, READ_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/index-a';


const initialState = {notes: [note]};
const noteReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CREATE_NOTE:
            Object.assign({}, state, state.notes.concat(action.payload));
            break;
        case UPDATE_NOTE:
            Object.assign({}, state, state.notes.concat(action.payload));
            break;
        case DELETE_NOTE:
            Object.assign({}, state, state.notes.slice(note.id).concat(state.notes.slice(note.id+1)));  
            break;  
        default:
            return state;
        }
      };

export default noteReducer;