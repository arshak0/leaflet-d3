import React from 'react';
import * as d3 from 'd3';

class MultiLineChartLegend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {   name: "Truck 1"},
        {   name: "Truck 2"},
        {   name: "Truck 3"},
        {   name: "Truck 4"},
        {   name: "Truck 5"},
        {   name: "Truck 6"},
        {   name: "Truck 7"},
        {   name: "Truck 8"},
        {   name: "Truck 9"},
        {   name: "Truck 10"}
        ],
        width: 1200,
        height: 400,
      }

      this.chartRef = React.createRef();

      this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    this.drawChart();
  }

  drawChart() {

////////////////////////////////////

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
        //.attr('width', 10)
        //.attr('height', 10)
        .attr("r", 6)
        .style('fill', (d, i) => color(i));

    legend.selectAll('.legend')
        .data(this.state.data).enter()
        .append('text')
        .attr("font-family", "'Open Sans', sans-serif")
        .attr('x', 70)
        .attr('y', (d, i) => 115 +i*28)
        .text(d => d.name);
    /*
    svg.append("g")
      .attr("class", "legend")
      .append('rect')
          .attr('x', width - 20)
          .attr('y', 200)
          .attr('width', 100)
          .attr('height', 100)
          .style('fill', d => d.name);
  
        var legend = svg.selectAll('g')
          .data(this.state.data).enter()
          .append('g')
          .attr('class', 'legend');
  
          legend.append('rect')
          .attr('x', width - 20)
          .attr('y', (d, i) => (i.time + d.values))
          .attr('width', 100)
          .attr('height', 100)
          .style('fill', d => d.values);
  
      legend.append('text')
          .attr('x', width - 8)
          .attr('y', (d, i) => (i.time + d.values))
          .text(d => d.values);*/

///////////////////////  
      }
    render = () => (
      <p  style={{ margin: '0' }}></p>
    )
}

export default MultiLineChartLegend;