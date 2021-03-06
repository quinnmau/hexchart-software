function hexChart() {
    var margin = {top: 20, right: 20, bottom: 30, left: 40};
    var width = 960 - margin.left - margin.right, 
        height = 500 - margin.top - margin.bottom;
    
    function myChart(selection) {
        var color = d3.scale.linear()
            .domain([0, 20])
            .range(['white', 'steelblue'])
            .interpolate(d3.interpolateLab);
        
        var hexbin = d3.hexbin()
            .size([width, height])
            .radius(20);
        
        var x = d3.scale.identity()
            .domain([0, width]);
        
        var y = d3.scale.linear()
            .domain([0, height]);
        
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom')
            .tickSize(6, -height);
        
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left')
            .tickSize(6, -width);
        
        var svg = selection.append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        
        svg.append('clipPath')
            .attr('id', 'clip')
            .append('rect')
            .attr('class', 'mesh')
            .attr('width', width)
            .attr('height', height);
        
        selection.each(function(data, i) {
            svg.append('g')
                .attr('clip-path', 'url(#clip)')
                .selectAll('.hexagon')
                .data(hexbin(data))
                .enter().append('path')
                .attr('class', 'hexagon')
                .attr('d', hexbin.hexagon())
                .attr('trasnform', function(d) { 
                    return 'translate(' + d.x + ',' + d.y + ')'; 
                })
                .style('fill', function(d) { return color(d.length); });
        });
        
        svg.append('g')
            .attr('class', 'y axis')
            .call(yAxis);
        
        svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis);
    }
    
    
    // entered width must be greater than 60
    myChart.width = function(val) {
        if (!arguments.length) return width;
        width = val - margin.left - margin.right;
        return myChart;
    };
    
    // entered height must be greater than 50
    myChart.height = function(val) {
        if (!arguments.length) return height;
        height = val - margin.top - margin.bottom;
        return myChart;
    };
    
    
    return myChart;
};