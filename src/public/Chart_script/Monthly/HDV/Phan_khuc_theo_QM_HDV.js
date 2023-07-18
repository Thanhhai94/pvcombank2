Highcharts.chart('Phan_khuc_theo_QM_HDV', {
  colors: ['rgb(91,155,213)', 'rgb(237,125,49)', 'rgb(165,165,165)','rgb(255,192,0)','rgb(68,114,196)','rgb(112,173,71)','rgb(37,94,145)','rgb(158,72,14)','rgb(99,99,99)'],
  chart: {
    height: 250,
    type: 'column',
    inverted: true,
    polar: true
  },
   exporting : {
    enabled: false
  },
  credits: {
    enabled: false
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
},
  title: {
    text: '%PHÂN KHÚC THEO QUY MÔ HĐV',
    align: 'center',
    style: {
      color: '#0772ba',
    }
  },
  tooltip: {
    formatter: function () {
      return `<b style="color:${this.point.series.color}">${this.point.series.name} : ${this.point.y}%</b>`;
  
  },
  },
  pane: {
    size: '90%',
    innerSize: '55%',
    endAngle: 360
  },
  xAxis: {
    gridLineWidth: 0,
    labels: {
      enabled: true
    },
    tickInterval: 0,
    labels: {
      align: 'right',
      useHTML: true,
      allowOverlap: true,
      step: 1,
      y: 3,
      style: {
        fontSize: '10px'
      }
    },
    lineWidth: 0,
    categories: [
      ''
    ]
  },
  yAxis: {
    labels: {
      enabled: false
    },
    crosshair: {
      enabled: true,
      color: '#333'
    },
    lineWidth: 0,
    tickInterval: 0,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true
  },
  plotOptions: {
    column: {
      stacking: 'normal',
      borderWidth: 0,
      pointPadding: 0,
      groupPadding: 0
    },
    series: {
      dataLabels: {
        y: 0,
        enabled: true,
        format: '{point.y:,.0f}%',
        style: {
          fontSize: 10
        }
      }
    }
  },
  series: [{
    name: '01a.[<200tr]',
    data: [2]
,
dataLabels:{
      allowOverlap:true
    }  }, {
    name: '01b.[200tr-500tr]',
    data: [5]
,
dataLabels:{
      allowOverlap:true
    }  }, {
    name: '02.[500tr-1tỷ]',
    data: [7]
,
dataLabels:{
      allowOverlap:true
    }  },
  {
    name: '03.[1tỷ-2tỷ]',
    data: [11],
    dataLabels:{
      allowOverlap:true
    }
  },
  {
    name: '04.[2tỷ-5tỷ]',
    data: [18],
    dataLabels:{
      allowOverlap:true
    }
  },
  {
    name: '05.[5tỷ-10tỷ]',
    data: [13],
    dataLabels:{
      allowOverlap:true
    }
  },
  {
    name: '06.[10tỷ-20tỷ]',
    data: [11],
    dataLabels:{
      allowOverlap:true
    }
  },
  {
    name: '07.[20tỷ-50tỷ]',
    data: [12],
    dataLabels:{
      allowOverlap:true
    }
  },
  {
    name: '08.[>= 50tyr]',
    data: [19],
    dataLabels:{
      allowOverlap:true
    }
  },]
});
