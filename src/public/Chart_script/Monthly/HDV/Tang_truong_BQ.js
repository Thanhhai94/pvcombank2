Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('tang_truong_BQ', {

    chart: {
        events: {
            render: function() {
                var chart = this;
                chart.series.map(value => {
                    if(value.name !== 'Tỉ lệ hoàn thành'){
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


    height: 250,
    zoomType: 'xy',
   
    },
    title: {
      text: 'TĂNG TRƯỞNG BQ',
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
      categories: Tang_truong_BQ_xAxis,
      crosshair: true
    }],
    yAxis: [
        {
     // Primary yAxis
      labels: {
        enabled: false,
        format: '',
      },
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
              if(point.series.name == 'Tăng trưởng BQ' || point.series.name == 'Chỉ tiêu' ){
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                Number((point.y).toFixed(2)).toLocaleString("en-US") + ' tỉ đồng </b>' ;
              } else {
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                  point.y.toFixed(2) + '% </b>' ;
              }
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
      name: 'Tăng trưởng BQ',
      type: 'column',
      color: 'rgb(2,48,71)',
      pointWidth: 46,
      yAxis: 1,
      data: [10211,13891,16992,18630],
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
        format: '{point.y:,.0f}' 
      }
  
    },
    {
        name: 'Chỉ tiêu',
        type: 'column',
        color: 'rgb(255,183,3)',
        pointWidth: 46,
        yAxis: 1,
        data: [8636,9198,9855,10328],
        tooltip: {
          valueSuffix: 'tỷ '
        },
        
        dataLabels: {
          verticalAlign: 'bottom',
          enabled: true,
          inside: true,
          
          style: {
            color: 'rgb(0,0,0)',
            textOutline: 'none'
          },
          format: '{point.y:,.0f}'
        }
    
      }, {
      name: 'Tỉ lệ hoàn thành',
      type: 'spline',
      color: 'rgb(33,158,188)',
      lineWidth: 4,
      marker: false,
      data: [118,151,172,180],
      tooltip: {
        valueSuffix: ' %'
      },

      dataLabels: {
        allowOverlap: true,
        style : {
            color: 'rgb(33,158,188)',
            fontSize : 12,
            fontWeight: 600,
            fontFamily: '',
            textOutline: 0,
            border: 0,
            
        },
        enabled: true,
        
        format: '{point.y:,.1f}%'
      }
    }]
  });