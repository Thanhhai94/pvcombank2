Highcharts.chart('CASA', {
  chart: {
      type: 'line',
    height: 250,
    zoomType: 'xy',
  },
  title: {
      text: '%CASA'
  },
  credits: {
    enabled: false
  },

  exporting : {
    enabled: false
  },
  xAxis: {
      categories: ['202301','202302','202303','202304']
  },
  tooltip: {
    formatter: function () {
        return this.points.reduce(function (s, point) {
            
              return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                point.y.toFixed(2) + '% </b>' ;
            
        }, '<b>' + this.x + '</b>');
    },
    shared: true
},
  yAxis: {
      title: {
          text: ''
      },
    labels: {
      enabled: false,
      format: '',
    },
    title: {
      text: '',
    },
    gridLineWidth: 0,
  },
  plotOptions: {
      line: {
          lineWidth: 4,
          states: {
              hover: {
                  lineWidth: 5
              }
          },
          marker: {
              enabled: false
          },
   
      }
  },
  series: [{
      name: '%CASA CK',
      data: [5.9,5.8,5.0,5.7],
      color: 'rgb(237,125,49)',
    tooltip: {
      valueSuffix: ' %'
    },

    dataLabels: {
      allowOverlap: true,
      style : {
          color: 'rgb(237,125,49)',
          fontSize : 12,
          fontWeight: 600,
          fontFamily: '',
          textOutline: 0,
          border: 0,
          
      },
      enabled: true,
      y: 25,
      format: '{point.y:,.1f}%'
    }
  }, {
      name: '%CASA BQ',
      data: [6.3,5.8,5.8,5.5],
      color: 'rgb(2,48,71)',
    tooltip: {
      valueSuffix: ' %'
    },

    dataLabels: {
      allowOverlap: true,
      style : {
          color: 'rgb(2,48,71)',
          fontSize : 12,
          fontWeight: 600,
          fontFamily: '',
          textOutline: 0,
          border: 0,
          
      },
      enabled: true,
      y: -10,
      format: '{point.y:,.1f}%'
    }
  }]
});
