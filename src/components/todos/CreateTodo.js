import React, { Component } from 'react'
import { connect } from 'redux';

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    }
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  }


  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input type="text" onChange={this.handleChange} value={this.state.text} />
            <input type="submit" />
          </p>
        </form>
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
//   }
// }

export default connect()(CreateTodo);
