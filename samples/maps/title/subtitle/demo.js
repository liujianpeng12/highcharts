$(function () {

    $.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {
        
        // Initiate the chart
        $('#container').highcharts('Map', {
            
            title : {
                text : 'Subtitle options demo'
            },

            subtitle: {
                align: 'left',
                floating: true,
                style: {
                    color: '#303030'
                },
                text: 'This is a subtitle text<br>with <span style="font-style:italic">formatted</span><br>' +
                    'and <span style="color: green; font-weight:bold">colored</span> text',
                verticalAlign: 'middle',
                x: 0,
                y: 50
            },

            colorAxis: {
                min: 1,
                max: 1000,
                type: 'logarithmic'
            },

            series : [{
                data : data,
                mapData: Highcharts.maps.world,
                joinBy: 'code',
                name: 'Population density',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                tooltip: {
                    valueSuffix: '/km²'
                }
            }]
        });
    });
});