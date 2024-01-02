// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component for a button
class Button extends React.Component {
  // Define the constructor method
  constructor(props) {
    // Call the super constructor
    super(props);
    // Set the initial state
    this.state = {
      clicked: false
    };
    // Bind the handleClick method to this
    this.handleClick = this.handleClick.bind(this);
  }

  // Define the handleClick method
  handleClick() {
    // Toggle the clicked state
    this.setState(state => ({
      clicked: !state.clicked
    }));
  }

  // Define the render method
  render() {
    // Return the JSX code for the button
    return (
      <button onClick={this.handleClick}>
        {this.state.clicked ? 'Clicked' : 'Click Me'}
      </button>
    );
  }
}

// Render the button component to the DOM
ReactDOM.render(
  <Button />,
  document.getElementById('root')
);
