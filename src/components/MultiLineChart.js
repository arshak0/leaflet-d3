import React from 'react';
import * as d3 from 'd3';

class MultiLineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
        yAxisAttribute: "date",
        xAxisAttribute: "price",
        width: 1200,
        height: 400,
        temperature_data: [],
        step: 0,
        data_help_var_1: 0,
        data_help_var_2: 0,
        ...props
      }

      this.chartRef = React.createRef();

      this.drawChart = this.drawChart.bind(this);
  }

  componentDidMount() {
    this.drawChart();
    setInterval(this.updateChart.bind(this), 4000);
  }

  updateChart() {
    document.getElementsByClassName('d3_chart')[0].innerHTML="";
    this.setState({
      step: this.state.step+1
    })
    this.data_formatting()
    this.drawChart();
  }

  data_formatting() {    
    var date= new Date()
    var current_time=[];
    var date_year=date.getFullYear();
    var date_month=date.getMonth();
    var date_day=date.getDay();
    var date_hours=date.getHours();
    var date_minutes=date.getMinutes();
    var date_seconds=date.getSeconds();
    var n_date_year=date_year; var n_date_month=date_month; var n_date_day=date_day; var n_date_hours=date_hours;
    var n_date_minutes=date_minutes; var n_date_seconds=date_seconds;

    for (var i=0;i<10;i++) {
      n_date_seconds=date_seconds-20;
      if ( (date_seconds-20)<0 ) {
        n_date_seconds=date_seconds-20+60;
        if ( (date_minutes-1)<0 ) {
          n_date_minutes=date_minutes-1+60;
          if ( (date_hours-1)<0 ) {
            n_date_hours=date_hours-1+24;
            if ( (date_day-1)<0 ) {
              n_date_day=date_day-1+31;
              if ( (date_month-1)<0 ) {
                n_date_month=date_month-1+12;
                n_date_year=date_year-1;
              }
              else{
                n_date_month=date_month-1;
              }
            }
            else {
              n_date_day=date_day-1;
            }
          }
          else {
            n_date_hours=date_hours-1;
          }
        }
        else {
          n_date_minutes=date_minutes-1;
        }
      }
      else {
        n_date_seconds=date_seconds-20;
      }

      current_time.unshift(n_date_year+'-'+n_date_month+'-'+n_date_day+'T'+n_date_hours+':'+n_date_minutes+':'+n_date_seconds+'Z');
      date_seconds=n_date_seconds;
      date_minutes=n_date_minutes;
      date_hours=n_date_hours;
      date_day=n_date_day;
      date_month=n_date_month;
      date_year=n_date_year;
    }

    //Format: 2011-07-01T19:15:28Z

    this.setState({
      data_help_var_1: 0,
      data_help_var_2: 0
    })

    for (var i=0;i<10;i++) {
      this.setState({
        data_help_var_1: this.state.step%20
      })
      for (var j=0;j<10;j++) {
        this.state.data[i].values[j].time=current_time[j]
        this.setState({
          data_help_var_2: (this.state.data_help_var_1+j)%20
        })
        if ( this.state.temperature_data[0] ) {
          this.state.data[i].values[j].temperature=this.state.temperature_data[i][this.state.data_help_var_2]
        }
      }
    }
  }

  drawChart() {

    this.setState({
      temperature_data: this.props.temperature_data
    })

    this.data_formatting()

    //Chart Drawing
    var width = 1000;
    var height = 600;
    var margin = 50;    
    
    /* Format Data */
    var parseDate = d3.timeParse("%Y-%m-%dT%H:%M:%SZ");
    this.state.data.forEach(function(d) { 
      d.values.forEach(function(d) {
        
        d.time = parseDate(d.time);
        d.temperature = +d.temperature;    
      });
    });
    
    
    /* Scale */
    var xScale = d3.scaleTime()
      .domain(d3.extent(this.state.data[0].values, d => d.time))
      .range([0, width-margin]);
    
    var yScale = d3.scaleLinear()
      .domain([2, d3.max(this.state.data[0].values, d => d.temperature+0.1)])
      .range([height-margin, 0]);
    
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    
    /* Add SVG */
    var svg = d3.select(".d3_chart").append("svg")
      .attr("width", (width+margin)+"px")
      .attr("height", (height+margin)+"px")
      .append('g')
      .attr("transform", `translate(${margin}, ${margin})`);
    
    
    /* Add line into SVG */
    var line = d3.line()
      .x(d => xScale(d.time))
      .y(d => yScale(d.temperature));
    
    let lines = svg.append('g')
      .attr('class', 'lines');
    
    lines.selectAll('.line-group')
      .data(this.state.data).enter()
      .append('g')
      .attr('class', 'line-group')  
      /*.on("mouseover", function(d, i) {
          svg.append("text")
            .attr("class", "title-text")
            .style("fill", color(i))        
            .text(d.name)
            .attr("text-anchor", "middle")
            .attr("x", (width-margin)/2)
            .attr("y", 5);
        })
      .on("mouseout", function(d) {
          svg.select(".title-text").remove();
        })*/
      .append('path')
      .attr("fill", "none")
      .attr('class', 'line')  
      .attr('d', d => line(d.values))
      .style('stroke', (d, i) => color(i))
      //.style('opacity', lineOpacity)
      /*.on("mouseover", function(d) {
          d3.selectAll('.line')
                        .style('opacity', otherLinesOpacityHover);
          d3.selectAll('.circle')
                        .style('opacity', circleOpacityOnLineHover);
          d3.select(this)
            .style('opacity', lineOpacityHover)
            .style("stroke-width", lineStrokeHover)
            .style("cursor", "pointer");
        })
      .on("mouseout", function(d) {
          d3.selectAll(".line")
                        .style('opacity', lineOpacity);
          d3.selectAll('.circle')
                        .style('opacity', circleOpacity);
          d3.select(this)
            .style("stroke-width", lineStroke)
            .style("cursor", "none");
        });*/
    
    /* Add Axis into SVG */
    var xAxis = d3.axisBottom(xScale).ticks(5);
    var yAxis = d3.axisLeft(yScale).ticks(5);
    
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0, ${height-margin})`)
      .call(xAxis)
    
    svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
      .append('text')
      .attr("font-family", "'Open Sans', sans-serif")
      .attr("y", 15)
      .attr("fill", "#000")
      .attr("font-size","22px")
      .attr("transform", "translate(0, -30)")
      .text("°C");

      }

    render = () => (
      <div></div>
    )
}

export default MultiLineChart;