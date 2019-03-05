import React, { Component } from 'react'

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


  render() {
    return(
      <div>
        Create Todo Component
        <form>
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

export default CreateTodo;
