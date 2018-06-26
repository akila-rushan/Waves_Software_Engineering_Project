
$(document).ready(function () {
    bindUI();
    //bindUI2();
});

function bindUI() {

    var days = [];
    var count = [];

    //var Jdata = JSON.parse(response.d);
    var Jdata = [
        {
            company: "xys",
            shares: "100"
        },
        {
            company: "kli",
            shares: "145"
        },
        {
            company: "sdf",
            shares: "90"
        },
        {
            company: "vjgn",
            shares: "100"
        },
        {
            company: "iogfjr",
            shares: "145"
        },
        {
            company: "yfb",
            shares: "90"
        }
    ];

    console.log(Jdata);

    for (var i = 0; i < Jdata.length; i++) {
        days.push(Jdata[i].company);
        count.push(Jdata[i].shares);
    }

    var chartdata = {
        labels: days,
        datasets: [
            {
                label: 'Count in last 7 days',
                backgroundColor: 'transparent',
                borderColor: '#0073b7',
                data: count
            }
        ]
    };

    var ctx = document.getElementById('Chart_Delay');
    var chart = new Chart(ctx, {
        type: 'line',
        data: chartdata,
        options: options,

    });

};

//function bindUI2() {

//    var days = [];
//    var count = [];

//    //var Jdata = JSON.parse(response.d);
//    var Jdata = [
//        {
//            company: "xys",
//            shares: "100"
//        },
//        {
//            company: "kli",
//            shares: "145"
//        },
//        {
//            company: "sdf",
//            shares: "90"
//        },
//    {
//        company: "vjgn",
//        shares: "100"
//    },
//    {
//        company: "iogfjr",
//        shares: "145"
//    },
//    {
//        company: "yfb",
//        shares: "90"
//    }
//    ];

//    console.log(Jdata);

//    for (var i = 0; i < Jdata.length; i++) {
//        days.push(Jdata[i].company);
//        count.push(Jdata[i].shares);
//    }

//    var chartdata = {
//        labels: days,
//        datasets: [
//            {
//                label: 'Count in last 7 days',
//                backgroundColor: 'transparent',
//                borderColor: '#0073b7',
//                data: count
//            }
//        ]
//    };

//    var ctx = document.getElementById('Chart_Delay2');
//    var chart = new Chart(ctx, {
//        type: 'line',
//        data: chartdata,
//        options: options,

//    });
//};


// Bar Chart
var options = {
    responsive: true,

    legend: {
        onClick: function (event, legendItem) { },
        labels: {
            fontSize: 20,
            fontColor: 'white'
        }
    },
    scales:
    {
        yAxes: [{
            ticks: {
                fontSize: 16,
                min: 0,
                stepSize: 20
            }
            , gridLines: {
                color: 'rgba(171,171,171,1)',
                lineWidth: 1,
                drawOnChartArea: false
            },
            scaleLabel:
            {
                fontSize: 20,
                fontColor: 'white'
            }
        }],
        xAxes: [{
            ticks: {
                //fontSize: 13,
                fontWeight: 800,
                fontColor: 'white'
            },
            gridLines: {
                color: 'rgba(171,171,171,1)',
                lineWidth: 1,
                drawOnChartArea: false
            },
            scaleLabel:
            {
                fontColor: 'white'
            }
        }]

    }

}

//$.ajax({
//    type: 'POST',
//    url: 'TvScreen_New.aspx/WM_7Days_Delays',
//    data: '{}',
//    async: true,
//    contentType: 'application/json; charset=utf-8',
//    dataType: 'json',
//    success: function (response) {
//        var days = [];
//        var count = [];

//        //var Jdata = JSON.parse(response.d);
//        var Jdata = [
//            {
//                company: "ABC",
//                shares: "100"
//            },
//        {
//            company: "wer",
//            shares: "145"
//        },
//        {
//            company: "vbg",
//            shares: "90"
//        }
//        ]

//        for (var i = 0; i < Jdata.length; i++) {
//            days.push(Jdata[i].company);
//            count.push(Jdata[i].shares);
//        }

//        var chartdata = {
//            labels: days,
//            datasets: [
//                {
//                    label: 'Count in last 7 days',
//                    backgroundColor: '#0073b7',
//                    borderColor: '#0073b7',
//                    data: count
//                }
//            ]
//        };

//        var ctx = document.getElementById('Chart_Delay').getContext('2d');
//        var chart = new Chart(ctx, {
//            type: 'bar',
//            data: chartdata,
//            options: options,

//        });

//    },
//    failure: function (response) {
//        alert(response);
//    }
//});
