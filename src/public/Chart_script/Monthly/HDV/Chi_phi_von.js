Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('Chi_phi_von', {

    chart: {
        events: {
            render: function() {
                var chart = this;
                chart.series.map(value => {
                    if(value.name !== 'KHCN'){
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
      text: 'CHI PHÍ VỐN',
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
      categories: ['20221231','20230131','20230228','20230331','20230430'],
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
        
    },
    series: [{
      
      name: 'TOÀN_HÀNG',
      type: 'column',
      color: 'rgb(2,48,71)',
      pointWidth: 46,
      yAxis: 1,
      data: [8.0,8.6,9.0,9.3,9.5],
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
  
      name: 'KHCN',
      type: 'spline',
      color: 'rgb(255,192,0)',
      lineWidth: 4,
      marker: false,
      data: [8.5,8.6,9.5,9.8,9.9],
      tooltip: {
        valueSuffix: ' %'
      },
      
      dataLabels: {
        backgroundColor: 'rgb(255,192,0)',
        padding: 4,
        borderRadius: 5,
        allowOverlap: true,
        style : {
            color: 'rgb(0,0,0)',
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