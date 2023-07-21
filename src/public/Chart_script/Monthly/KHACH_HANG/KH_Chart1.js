Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('KH_Chart1', {

    chart: {
        events: {
            render: function() {
                var chart = this;
                chart.series.map(value => {
                    if(value.name !== 'Tỉ lệ active'){
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

    },
    title: {
      text: 'SỐ LƯỢNG KHÁCH HÀNG VÀ TỶ LỆ ACTIVE',
      align: 'center',
      style: {
        fontSize: 16,
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
      categories: currentYearMonth,
      crosshair: true,
    
    }],
    yAxis: [
      
        {

      min: 0,    
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
              if(point.series.name == 'SLKH sử dụng sản phẩm' || point.series.name == 'SLKH active sản phẩm' ){
                return s + '<br/>' + `<span style="color:${point.series.color}">\u25CF</span>`+ point.series.name + ': ' +
                Number((point.y).toFixed(2)).toLocaleString("en-US") + ' </b>' ;
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
        symbolRadius: 0,
        itemStyle:{
          fontSize:10,
        }
    },
    series: [{
      name: 'SLKH sử dụng sản phẩm',
      type: 'column',
      color: 'rgb(33,158,188)',
      pointWidth: 46,
      yAxis: 1,
      
      data: [1032096,1071526,1137556,1197144],
      tooltip: {
        valueSuffix: ' '
      },
      dataLabels: {
        verticalAlign: 'bottom',
        enabled: true,
        style: {
          fontSize: 10,
          color: 'rgb(255,255,255)',
          textOutline: 'none'
        },
        format: '{point.y:,.0f}' 
      }
  
    },
    {
        name: 'SLKH active sản phẩm',
        type: 'column',
        color: 'rgb(2,48,71)',
        pointWidth: 46,
        yAxis: 1,
        data: [422333,443241,499292,513130],
        tooltip: {
          valueSuffix: ' '
        },
        dataLabels: {
          verticalAlign: 'bottom',
          enabled: true,
          inside: true,
          style: {
            fontSize: 10,
            color: 'rgb(255,255,255)',
            textOutline: 'none'
          },
          format: '{point.y:,.0f}'
        }
    
      }, {
      name: 'Tỉ lệ active',
      type: 'spline',
      color: 'rgb(251,133,0)',
      lineWidth: 2,
      data: [40.9,41.4,43.9,42.9],
      tooltip: {
        valueSuffix: ' %'
      },
      dataLabels: {
        
        backgroundColor: 'rgb(251,133,0)',
        allowOverlap:true,
        padding: 2,
        borderRadius: 5,
        style : {
            color: 'rgb(255,255,255)',
            fontSize : 10,
            fontWeight: 600,
            fontFamily: '',
            textOutline: 0,
            border: 0
        },
        enabled: true,
        y: -5,
        format: '{point.y:,.1f}%'
      }
    }]
  });