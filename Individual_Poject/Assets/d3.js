const data = [
    { Name_of_the_States: 'Andhra Pradesh', r_by_p: 244.2698035},
    { Name_of_the_States: 'Arunachal Pradesh', r_by_p: 27.37082692},
    { Name_of_the_States: 'Assam', r_by_p: 90.81699673},
    { Name_of_the_States: 'Bihar', r_by_p: 358.2582168},
    { Name_of_the_States: 'Chhattisgarh', r_by_p: 249.0312522},
    { Name_of_the_States: 'Goa', r_by_p: 78.38708538},
    { Name_of_the_States: 'Gujarat', r_by_p: 299.5879155},
    { Name_of_the_States: 'Haryana', r_by_p: 506.8162284},
    { Name_of_the_States: 'Himachal Pradesh', r_by_p: 110.9002052},
    { Name_of_the_States: 'Jammu & Kashmir', r_by_p: 115.4012396},
    { Name_of_the_States: 'Jharkhand', r_by_p: 417.242124},
    { Name_of_the_States: 'Karnataka', r_by_p: 172.3399436},
    { Name_of_the_States: 'Kerala', r_by_p: 129.9417724},
    { Name_of_the_States: 'Madhya Pradesh', r_by_p: 199.5397518},
    { Name_of_the_States: 'Maharashtra', r_by_p: 179.3621127},
    { Name_of_the_States: 'Manipur', r_by_p: 97.86653413},
    { Name_of_the_States: 'Meghalaya', r_by_p: 67.68204763},
    { Name_of_the_States: 'Mizoram', r_by_p: 82.03765816},
    { Name_of_the_States: 'Nagaland', r_by_p: 53.90560116},
    { Name_of_the_States: 'Odisha', r_by_p: 136.2905533},
    { Name_of_the_States: 'Punjab', r_by_p: 194.5054729},
    { Name_of_the_States: 'Rajasthan', r_by_p: 218.7332693},
    { Name_of_the_States: 'Sikkim', r_by_p: 45.1951492},
    { Name_of_the_States: 'Tamil Nadu', r_by_p: 267.2041352},
    { Name_of_the_States: 'Tripura', r_by_p: 85.0148401},
    { Name_of_the_States: 'Uttar Pradesh', r_by_p: 3780.919178},
    { Name_of_the_States: 'Uttarakhand', r_by_p: 23.11606869},
    { Name_of_the_States: 'West Bengal', r_by_p: 277.3286695},
    { Name_of_the_States: 'A.& N.Islands', r_by_p: 212.1224029},
    { Name_of_the_States: 'Chandigarh', r_by_p: 415.6460704},
    { Name_of_the_States: 'D.& N.Haveli', r_by_p: 289.5545237},
    { Name_of_the_States: 'Daman & Diu', r_by_p: 664.1011978},
    { Name_of_the_States: 'Delhi', r_by_p: 954.0584838},
    { Name_of_the_States: 'Lakshadweep', r_by_p: 287.2617569},
    { Name_of_the_States: 'Puducherry', r_by_p: 290.7046235},
  ];

  const width = 854;
  const height = 480;
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  
  const svg = d3.select('#d3-container')
    .append('svg')
    .attr('width', width - margin.left - margin.right)
    .attr('height', height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)
  
  const y = d3.scaleLinear()
    .domain([0, 4000])
    .range([height - margin.bottom, margin.top])
  
  svg
    .append("g")
    .attr("fill", 'royalblue')
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.r_by_p))
      .attr('title', (d) => d.r_by_p)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.r_by_p))
      .attr("width", x.bandwidth());
  
  function yAxis(g) {
    g.attr("transform", `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr("font-size", '20px')
  }
  
  function xAxis(g) {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(i => data[i].Name_of_the_States))
      .attr("font-size", '20px')
  }
  
  svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "middle")
  .attr("transform", "translate(" + (width / 2) + "," + (height + margin.bottom -52) + ")")
  .text("Name of the States");

  svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "middle")
  .attr("transform", "rotate(-90) translate(" + (-height/2) + "," + (-margin.left + 20) + ")")
  .text("Population Density/Road Density (per km)");


  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();
