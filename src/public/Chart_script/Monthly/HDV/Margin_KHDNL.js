Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('Margin', {
  
    chart: {
        events: {
            render: function() {
                var chart = this;
                chart.series.map(value => {
                  if(value.name !== 'PVN' && value.name !== 'Non_PVN'){
                    value.points.forEach(function(p) {
                            if (p.dataLabel) {
                              p.dataLabel.attr({
                                y: chart.plotHeight - p.dataLabel.height
                              });
                            }
                          })
                    }
                });
              }
        
          },


    height: 300,
    zoomType: 'xy',
   
    },
    title: {
      text: 'MARGIN',
      align: 'center',
      style: {
        color: '#0772ba',
      },
      margin: 20
    },
   credits: {
      enabled: false
    },

    exporting : {
      enabled: false
    },
    plotOptions: {
        column: {
        },
        series: {
          groupPadding: 0.09,
          borderRadius: {
            radius: 0
        },
        borderWidth:0
        }
      },
    xAxis: [{
      categories: currentYearMonthMargin,
      crosshair: true
    }],
    yAxis: [
      
        {
     // Primary yAxis
      labels: {
        enabled: false,
        format: '',
      },
      min: 0,
      title: {
        text: '',
      },
      gridLineWidth: 0,
    }, { // Secondary yAxis
      title: {
        text: '',
      },
      labels: {
        enabled: false,
        format: '',
      },
      opposite: true,
      gridLineWidth: 0,
    }],
    tooltip: {
      formatter: function () {
          return this.points.reduce(function (s, point) {
              
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                  point.y.toFixed(2) + '% </b>' ;
              
          }, '<b>' + this.x + '</b>');
      },
      shared: true
  },
    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        symbolRadius: 0
    },
    series: [{
      
      name: 'KHDNL',
      type: 'column',
      color: 'rgb(2,48,71)',
      pointWidth: 46,
      yAxis: 1,
      data: [1.7,1.8,1.9,2.1],
      tooltip: {
        valueSuffix: 'tỷ '
      },
      
      dataLabels: {
        verticalAlign: 'bottom',
        enabled: true,
        
        style: {
          color: 'rgb(255,255,255)',
          textOutline: 'none'
        },
        format: '{point.y:,.1f}%'
      }
  
    },
     
    {
      name: 'PVN',
      type: 'spline',
      color: 'rgb(33,158,188)',
      lineWidth: 4,
      marker: false,
      data: [2.1,2.4,2.6,2.9],
      tooltip: {
        valueSuffix: ' %'
      },
      
      dataLabels: {
        backgroundColor: 'rgb(33,158,188)',
        padding: 4,
        borderRadius: 5,
        allowOverlap: true,
        style : {
            color: 'rgb(255,255,255)',
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
    },
    {
      name: 'Non_PVN',
      type: 'spline',
      color: 'rgb(251,133,0)',
      lineWidth: 4,
      marker: false,
      data: [3.3,3.4,3.6,3.7],
      tooltip: {
        valueSuffix: ' %'
      },
      
      dataLabels: {
        backgroundColor: 'rgb(251,133,0)',
        padding: 4,
        borderRadius: 5,
        allowOverlap: true,
        style : {
            color: 'rgb(255,255,255)',
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