import React, { Component } from 'react';

export default class NewItem extends Component {
  handleTextChange(e){
    console.log(e.target.value)
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e)
  {
    console.log(e)
  }
  handleLevelChange(e){
    console.log(e.target.value)
  }

  render() {
      const level = ['High', 'Medium', 'Low']
      let levelOption = level.map(level => {
        return <option key={level} value = {level}>{level}</option>
      })
    return (
      <div>
        <h3>Add NewItem</h3>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>New</label>
                <input type = "text" ref = "title" />
            </div>
            <div>
                <label>Level</label>
                <select ref="level">
                {levelOption}
                </select>
                </div>
                <br />
                <input type="submit" value="Submit" />
                </form>
      </div>
    )
  }
}
