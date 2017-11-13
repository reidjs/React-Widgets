import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.allNames = props.names;
    this.state = {inputValue: "", possibleNames: props.names};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    // console.log(this.allNames);
    // this.state.possibleNames = "johnny";
    // const temp = this.allNames[0];
    let result = [];
    this.allNames.forEach((name) => {
      if (name.toLowerCase().indexOf(inputValue) >= 0) {
        result.push(name);
      }
    });
    const possibleNames = result;
    // this.setState( (possibleNames) => {
    //   console.log('here');
    //   console.log(possibleNames);
    //   this.state.possibleNames = 'johnny';
    // });
    this.setState({inputValue, possibleNames});
  }
  render() {
    const names = this.state.possibleNames;
    const listNames = names.map((name) =>
      <li>{name}</li>
    );
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <ul>{listNames}</ul>
      </div>
    );
  }
}
// <ul>{this.state.possibleNames}</ul>

export default AutoComplete;
