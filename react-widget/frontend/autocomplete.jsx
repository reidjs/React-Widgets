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
    console.log(this.allNames);
    // this.state.possibleNames = "johnny";
    // const temp = this.allNames[0];
    let result = [];
    this.allNames.forEach((name) => {
      if (name.toLowerCase().indexOf(inputValue) >= 0) {
        result.push(name);
        console.log(name, inputValue, name.indexOf(inputValue));
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
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
        <p>{this.state.possibleNames}</p>
      </div>
    );
  }
}

export default AutoComplete;
