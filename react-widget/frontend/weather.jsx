import React from 'react';
//9b989fdfe5aac8208da67b8bc1a6044e

class Weather extends React.Component {
  constructor() {
    super();
    this.latitude = null;
    this.longitude = null;
    this.state = {city: "Loading data", temperature: ""};
    this.getWeatherData = this.getWeatherData.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;

      // this.setState({city, temperature}, this.getInfo);
      console.log(this.longitude);
      this.getWeatherData(this.latitude, this.longitude);
    });
  }

  t() {
    console.log('t');
  }

  getInfo() {
    let weatherData = this.getWeatherData();
    this.city = weatherData.name;
    this.temperature = parseInt(weatherData.temp) * (9/5) - 459.67;
  }

  getWeatherData(lat, lon) {
    const request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=9b989fdfe5aac8208da67b8bc1a6044e`;
    request.open('GET', url, true);
    request.onload = (e) => {
      if (request.status >= 200 && request.status < 400) {
        let res = JSON.parse(request.responseText);
        // console.log(JSON.parse(res));
        console.log(res['name']);
        const city = res.name;
        const temperature = Math.round(parseInt(res.main.temp) * (9/5) - 459.67);
        // const temperature = res.main.temp;
        this.setState({city, temperature});
        console.log(this.state);
        console.log(city);
        // console.log(request.responseText);
      } else {
        console.error(request.statusText);
      }
    };
    request.send();
  }

  render() {
    return (
      <div className='weather'>
        <h1>Weather</h1>
        <p>{this.state.city}</p>
        <p>{this.state.temperature}</p>
      </div>
    );
  }
}

export default Weather;
