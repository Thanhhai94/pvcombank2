Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('KH_Chart4', {

    chart: {
    height: 300,
    },
    title: {
      text: 'SỐ LƯỢNG KHÁCH HÀNG ACTIVE MỚI',
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

    legend: {
        align: 'center',
        verticalAlign: 'bottom',
        symbolRadius: 0,
        itemStyle:{
          
        }
    },
    series: [{
      name: 'Thực hiện',
      type: 'column',
      color: 'rgb(2,48,71)',
      maxPointWidth: 40,
      yAxis: 1,
      
      data: [17384,31385,54831,45576],
      tooltip: {
        valueSuffix: ' '
      },
      dataLabels: {
        verticalAlign: 'bottom',
        enabled: true,
        
        style: {
          fontSize: 10,
          color: 'rgb(0,0,0)',
          textOutline: 'none'
        },
        format: '{point.y:,.0f}' 
      }
  
    },
    {
        name: 'Kế hoạch',
        type: 'column',
        color: 'rgb(251,133,0)',
        maxPointWidth: 40,
        yAxis: 1,
        data: [22388,20150,22296,21182],
        tooltip: {
          valueSuffix: ' '
        },
        dataLabels: {
          verticalAlign: 'bottom',
          enabled: true,
          
          style: {
            fontSize: 10,
            color: 'rgb(0,0,0)',
            textOutline: 'none'
          },
          format: '{point.y:,.0f}'
        }
    
      }]
  });