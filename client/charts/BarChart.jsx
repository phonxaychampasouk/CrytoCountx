import React, { Component } from 'react';

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const { records } = this.props;
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: records,
      options,
    });
  }

  render() {
    return (
      <canvas ref={this.chartRef} />
    );
  }
}
export default BarChart;
