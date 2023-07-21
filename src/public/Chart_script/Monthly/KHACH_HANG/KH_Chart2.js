Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    }
  });

Highcharts.chart('KH_Chart2', {

    chart: {
    height: 300,
    },
    title: {
      text: 'SẢN PHẨM BÌNH QUÂN/KHÁCH HÀNG',
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
      name: 'Số lượng sản phẩm BQ/KH',
      type: 'column',
      color: 'rgb(2,48,71)',
      maxPointWidth: 40,
      yAxis: 1,
      
      data: [2.09,2.09,2.08,2.08],
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
        format: '{point.y:,.2f}' 
      }
  
    },
    {
        name: 'Số lượng sản phẩm BQ/KH active',
        type: 'column',
        color: 'rgb(251,133,0)',
        maxPointWidth: 40,
        yAxis: 1,
        data: [1.79,1.82,1.91,1.95],
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
          format: '{point.y:,.2f}'
        }
    
      }]
  });