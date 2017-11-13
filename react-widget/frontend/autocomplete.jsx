import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {inputValue: "", possibleNames: props.names};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    console.log(e.state.value);
    const possibleNames = this.state.possibleNames;
    const inputValue = e.target.value;
    console.log(this.state.possibleNames);

    // console.log(e.target.value);
    // throw 'asdf';
    //Based off input string cull down the list of names
    // props.names
    this.setState({inputValue});
    console.log('Inputvalue: ', inputValue);
    // setState()
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
      </div>
    );
  }
}

export default AutoComplete;
