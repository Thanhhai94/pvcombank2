Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

Highcharts.chart('GiaiNgan', {

  chart: {
      events: {
          render: function() {
              var chart = this;
              chart.series.map(value => {
                  if(value.name !== 'Tỉ lệ giải ngân ưu đãi'){
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
    text: 'GIẢI NGÂN',
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

        borderRadius: {
          radius: 0
      },
      borderWidth:0
      }
    },
  xAxis: [{
    categories: currentYearMonthCasa,
    crosshair: true,
    labels: {
      rotation: -90,
      style: {
        fontSize:10
      }
    },
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
            if(point.series.name == 'Số tiền giải ngân' ){
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
      symbolRadius: 0,
      align: 'center',
      verticalAlign: 'bottom',
      itemStyle: {
        fontSize: 10,
        textOverflow: "ellipsis",
      }
  },
  series: [{
    
    name: 'Số tiền giải ngân',
    type: 'column',
    color: 'rgb(2,48,71)',
    pointWidth: 40,
    yAxis: 1,
    data: [13948,9477,6485,5959,10101],
    tooltip: {
      valueSuffix: 'tỷ '
    },
    
    dataLabels: {
      verticalAlign: 'bottom',
      enabled: true,
      
      style: {
        fontSize : 10,
        color: 'rgb(255,255,255)',
        textOutline: 'none'
      },
      format: '{point.y:,.0f}'
    }

  },
   {

    name: 'Tỉ lệ giải ngân ưu đãi',
    type: 'spline',
    color: 'rgb(255,192,0)',
    lineWidth: 2,

    data: [16.4,13,8.8,4,3.8],
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
          fontSize : 10,
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
]
});