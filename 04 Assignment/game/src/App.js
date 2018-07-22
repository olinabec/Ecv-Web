import React, { Component } from 'react'
import logo from './logo.svg'
import NewItem from './Components/NewItem'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    
    this.state = {
      list: [
        {
          name:"Watch movie",
          priority:"normal",
        },
        {
          name:"Watch film",
          priority:"high",
        },
        {
          name:"Watch TV",
          priority:"low",
        },
      ]
    }
  }

  move(e)
  {
    console.log(e.target.value);
  }


  render() {
    const level = ['High', 'Medium', 'Low']

    return (
      <div className="App">
          <div>
              <div>
                <div id="1.1" class="position" onclick={this.move}></div><p class="position"></p><p class="position"></p>
              </div>
              <div>
                <p class="position"></p><p class="position"></p><p class="position"></p>
              </div>
              <div>
                <p class="position"></p><p class="position"></p><p class="position"></p>
              </div>
          </div>
       To do list
       <NewItem></NewItem>

        {
          this.state.list.map((item) => {
            return <div>{item.name}</div>
          })
        }
      </div>
    );
  }
}

export default App;
