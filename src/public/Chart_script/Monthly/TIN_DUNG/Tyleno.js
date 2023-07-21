Highcharts.setOptions({
  lang: {
    decimalPoint: '.',
    thousandsSep: ','
  }
});

Highcharts.chart('Tyleno', {

  chart: {
  height: 300,
  zoomType: 'xy',
 
  },
  title: {
    text: 'TỶ LỆ NỢ',
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
    categories: ArrayMonth,
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
      itemStyle: {
        fontSize: 10,
        textOverflow: "ellipsis"
      }
  },
  series: [
   {
    name: 'Tỷ lệ nợ xấu',
    type: 'spline',
    color: 'rgb(33,158,188)',
    lineWidth: 2,
    data: [0.8,0.9,0.9,0.8],
    tooltip: {
      valueSuffix: ' %'
    },
    
    dataLabels: {
      allowOverlap: true,
      style : {
          color: 'rgb(33,158,188)',
          fontSize : 10,
          fontWeight: 600,
          fontFamily: '',
          textOutline: 0,
          border: 0,
          
      },
      enabled: true,
      y: -5,
      format: '{point.y:,.1f}%'
    }
  },
  {
    name: 'Tỷ lệ quá hạn',
    type: 'spline',
    color: 'rgb(251,133,0)',
    lineWidth: 2,
    data: [5,5,4.5,4],
    tooltip: {
      valueSuffix: ' %'
    },
    
    dataLabels: {
      allowOverlap: true,
      style : {
          color: 'rgb(251,133,0)',
          fontSize : 10,
          fontWeight: 600,
          fontFamily: '',
          textOutline: 0,
          border: 0,
          
      },
      enabled: true,
      y: -5,
      format: '{point.y:,.1f}%'
    }
  }
]
});