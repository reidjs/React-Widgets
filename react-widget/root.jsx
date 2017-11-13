import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';

class Root extends React.Component {
  constructor() {
    super();
    this.tabs = [
      {
        title: 'one',
        content: 'I am the first'
      },
      {
        title: 'two',
        content: 'I am the second'
      },
      {
        title: 'three',
        content: 'I am the third'
      }
    ];

    this.names = ["Bob", "George", "Bobo", "Charles", "Charlie"];
  }

  render() {
    return (
      <div>
        <Clock className='clock' />
        <Weather className='weatherdiv'/>
        <Tabs className='tabs' data={this.tabs}/>
        <AutoComplete names={this.names}/>
      </div>
    );
  }
}

export default Root;
