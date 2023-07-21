var borderColor = 'black';
var borderWidth = 1;

function setBorders(legendItems) {
  legendItems.forEach(function (item) {
    if (item.legendItem && ! item.legendItem.line) {
      item.legendItem.symbol.element.setAttribute('stroke-width', borderWidth);
      item.legendItem.symbol.element.setAttribute('stroke', borderColor);
    }
  });
}

Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

Highcharts.chart('TatToan', {

  chart: {
      events: {
          render: function() {
              var chart = this;
              chart.series.map(value => {
                  if(value.name !== 'Tỉ lệ tất toán trước hạn'){
                      value.points.forEach(function(p) {
                          if (p.dataLabel) {
                            p.dataLabel.attr({
                              y: chart.plotHeight - p.dataLabel.height
                            });
                          }
                        })
                  }
              });
            },
            load: function () {
              if (this.options.chart.type === 'map') {
                setBorders(this.legend.allItems)
              } else {
                setBorders(this.series)
              }
            }
      
        },


  height: 300,
  zoomType: 'xy',
 
  },
  title: {
    text: 'TẤT TOÁN',
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
            if(point.series.name == 'Số tiền tất toán' ){
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
      borderColor: 'rgb(0,0,0)',
      itemStyle: {
        fontSize: 10,
        textOverflow: "ellipsis",
      },
  },
  series: [{
    
    name: 'Số tiền tất toán',
    type: 'column',
    color: 'rgb(255,255,255)',
    pointWidth: 40,
    borderWidth:2,
    borderColor: 'rgb(2,48,71)',
    yAxis: 1,
    data: [1000,1200,700,400,700],
    tooltip: {
      valueSuffix: 'tỷ '
    },
    
    dataLabels: {
      verticalAlign: 'bottom',
      enabled: true,
      
      style: {
        fontSize : 10,
        color: 'rgb(0,0,0)',
        textOutline: 'none'
      },
      format: '{point.y:,.0f}'
    }

  },
   {

    name: 'Tỉ lệ tất toán trước hạn',
    type: 'spline',
    color: 'rgb(251,133,0)',
    lineWidth: 2,
    data: [38,40,37,38,29],
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