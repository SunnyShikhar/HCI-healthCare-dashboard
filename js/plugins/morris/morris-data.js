// Morris.js Charts sample data for SB Admin template

$(function() {

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '1990',
            visits: 6
        }, {
            d: '',
            visits: 8
        }, {
            d: '1991',
            visits: 4
        }, {
            d: '1992',
            visits: 4
        }, {
            d: '1993',
            visits: 7
        }, {
            d: '1994',
            visits: 3
        }, {
            d: '1995',
            visits: 10
        }, {
            d: '1996',
            visits: 3
        }, {
            d: '1997',
            visits: 8
        }, {
            d: '1998',
            visits: 6
        }, {
            d: '1999',
            visits: 4
        }, {
            d: '2000',
            visits: 8
        }, {
            d: '2001',
            visits: 3
        }, {
            d: '2002',
            visits: 4
        }, {
            d: '2003',
            visits: 6
        }, {
            d: '2004',
            visits: 5
        }, {
            d: '2005',
            visits: 9
        }, {
            d: '2006',
            visits: 4
        }, {
            d: '2007',
            visits: 7
        }, {
            d: '2008',
            visits: 3
        }, {
            d: '2009',
            visits: 6
        }, {
            d: '2010',
            visits: 8
        }, {
            d: '2011',
            visits: 4
        }, {
            d: '2012',
            visits: 5
        }, {
            d: '2013',
            visits: 3
        }, {
            d: '2014',
            visits: 2
        }, {
            d: '2015',
            visits: 6
        }, {
            d: '2016',
            visits: 9
        }, /*{
            d: '2012-10-29',
            visits: 1420
        }, {
            d: '2012-10-30',
            visits: 1529
        }, {
            d: '2012-10-31',
            visits: 1892
        }, */],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

        // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Dentist Visits",
            value: 2
        }, {
            label: "Dermatologist Visits",
            value: 1
        }, {
            label: "Family Doctor Visits",
            value: 5
        }, {
            label: "Podiatrist Visits",
            value: 1
        }],
        colors: ["#2AB66E", "#612AB6", "#DC1310", "#DCB110"],
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'Cold/Sinus',
            geekbench: 4
        }, {
            device: 'Foot/Ankle',
            geekbench: 1
        }, {
            device: 'Skin',
            geekbench: 1
        }, {
            device: 'Cavity/Dental',
            geekbench: 2
        }, {
            device: 'Health Checkup',
            geekbench: 1
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Geekbench'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true,
        barColors: ["#612AB6", "#DC1310", "#DCB110"],
    });

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
    



});
