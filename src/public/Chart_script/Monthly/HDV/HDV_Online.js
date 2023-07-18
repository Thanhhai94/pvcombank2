let data = [9.6, 9.6, 9.4, 9.4]

const getMax = (data) => {
  let max = data[0] || 0
  data.map(value => {
    if(value > max){
      max = value
    }
  })
    return max
}

const getMin = (data) => {
  let min = data[0] || 0
  data.map(value => {
    if(value < min){
      min = value
    }
  })
    return min
}

let max = getMax(data) ? getMax(data) : 0
let min = getMin(data) ? getMin(data)-0.5 :0
Highcharts.chart('HDV_Online', {
  chart: {
      type: 'column',
      height: 250,
      width: 250
  },
credits: {
  enabled: false
},
  legend: {
  enabled: false
},
exporting : {
  enabled: false
},
  title: {
      text: '%HĐV ONLINE',
      align: 'center',
      style: {
        color: '#0772ba',
      },
  },
  xAxis: {
      categories: ['202301','202302','202303','202304'],
      crosshair: true,
      accessibility: {
          description: 'Countries'
      }
  },
   yAxis: {
    max: max,
    min: min,

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
  tooltip: {
      enabled: false
  },
  plotOptions: {
      column: {
          pointPadding: 0.05,
          borderWidth: 0
      }
  },
  series: [
      {
          name: '%HDV ONLINE',
          data: data,
          color: 'rgb(255,255,255)',
        borderWidth : 3,
        borderColor : 'rgb(2,48,71)',
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
    y: 0,
    format: '{point.y:,.1f}%'
  }
      }
  ]
});
