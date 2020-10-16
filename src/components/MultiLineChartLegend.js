import React from 'react';
import * as d3 from 'd3';

class MultiLineChartLegend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ ],
      width: 1200,
      height: 400,
      ...props
      }

      this.chartRef = React.createRef();
      this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var svg2 = d3.select(".d3_chart_legend").append("svg")
      .attr("width", "200px")
      .attr("height", "800px")

    let legend = svg2.append('g')
      .attr('class', 'legend');

    legend.selectAll('.legend')
        .data(this.state.data).enter()
        .append('circle')
        .attr('cx', 50)
        .attr('cy', (d, i) => 110 +i*28 )
        .attr("r", 6)
        .style('fill', (d, i) => color(i));

    legend.selectAll('.legend')
        .data(this.state.data).enter()
        .append('text')
        .attr("font-family", "'Open Sans', sans-serif")
        .attr('x', 70)
        .attr('y', (d, i) => 115 +i*28)
        .text(d => d.name);
      }
    render = () => (
      <div></div>
    )
}

export default MultiLineChartLegend;