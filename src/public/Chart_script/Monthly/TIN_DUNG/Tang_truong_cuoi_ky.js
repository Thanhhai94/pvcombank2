Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('tang_truong_cuoi_ky_TD', {

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
      text: 'TĂNG TRƯỞNG CUỐI KỲ',
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
      categories: tang_truong_cuoi_ky_xAxis,
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
              if(point.series.name == 'Tăng trưởng CK' || point.series.name == 'Chỉ tiêu' ){
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
        symbolRadius:0,

    },
    series: [{
      
      name: 'Tăng trưởng CK',
      type: 'column',
      color: 'rgb(33,158,188)',
      pointWidth: 46,
      yAxis: 1,
    
      data: [6320,14953,17632,17424],
      tooltip: {
        valueSuffix: 'tỷ '
      },
      dataLabels: {
        verticalAlign: 'bottom',
        enabled: true,
        style: {
          color: 'rgb(0,0,0)',
          textOutline: 'none'
        },
        format: '{point.y:,.0f}' 
      }
  
    },
    {
        name: 'Chỉ tiêu',
        type: 'column',
         
        color: 'rgb(251,133,0)',
        pointWidth: 46,
        yAxis: 1,
        data: [2634,3172,4734,5652],
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
      color: 'rgb(153,0,255)',
      lineWidth: 4,
      marker: false,
      data: [548,471,372,308],
      tooltip: {
        valueSuffix: ' %'
      },
      dataLabels: {
        allowOverlap:true,
        style : {
            color: 'rgb(153,0,255)',
            fontSize : 12,
            fontWeight: 600,
            fontFamily: '',
            textOutline: 0,
            border: 0
        },
        enabled: true,
        
        format: '{point.y:,.1f}%'
      }
    }]
  });