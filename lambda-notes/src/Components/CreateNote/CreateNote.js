import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../JS/actions/index-a";
import Sidebar from "../Sidebar/Sidebar";

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note))
  };
};
class CreateNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, body, id } = this.state;
    this.props.createNote({ title, body, id });
    this.setState({ title: "", body:""});
  }
  render() {
    const { title, body, id } = this.state;
    return (
        <div>
      <Sidebar />
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
            placeholder="note title"
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
      </div>
    );
  }
}
const Form = connect(null, mapDispatchToProps)(CreateNote);
export default Form;