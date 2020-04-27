import React, { Component } from 'react';
import axios from 'axios';
import DataRange from './DateRange';
import LineChart from '../charts/LineChart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: {},
      poweredBy: 'Powered by CoinDesk',
      startDate: '',
      endDate: '',
    };
    this.fetchRecords = this.fetchRecords.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderCharts = this.renderCharts.bind(this);
  }

  componentDidMount() {

  }
  // Date example: 2014-04-21

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      records: [],
    });
    this.fetchRecords();
  }

  // eslint-disable-next-line class-methods-use-this
  fetchRecords() {
    const { startDate, endDate } = this.state;
    axios.get(`/api/cryptocurrencyRates/${startDate}/${endDate}`)
      .then(({ data }) => this.setState({
        records: data,
      })).then(() => console.log('records', this.state.records))
      .catch((e) => console.log('Can not retrieve data.', e));
  }

  renderCharts() {
    const { records } = this.state;
    return (Object.keys(records).length > 0
      ? <LineChart records={records} />
      : ''
    );
  }

  render() {
    const {
      startDate, endDate,
    } = this.state;
    return (
      <div>
        <DataRange
          handleSubmit={this.handleSubmit}
          endDate={endDate}
          startDate={startDate}
          handleChange={this.handleChange}
        />
        {this.renderCharts()}
      </div>
    );
  }
}


export default App;
