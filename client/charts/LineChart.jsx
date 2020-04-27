import React, { Component } from 'react';
import Chart from 'chart.js';

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }



  componentDidMount() {
    const { records } = this.props;
    let myChart = new Chart(this.chartRef.current, {
      type: 'line',

      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              time: {
                unit: 'week',
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 2000,
              },
            },
          ],
        },
      },
      data: {
        labels: this.props.records.map((d) => d.date),
        datasets: [{
          label: this.props.title,
          data: this.props.records.map((d) => d.value),
          fill: 'none',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          pointRadius: 2,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          lineTension: 0,
        }],
      },
    });
  }

  render() {
    return (
      <canvas ref={this.chartRef} />
    );
  }
}
export default LineChart;
