var object = new Object();
object.gendar = 0;
object.age = 0;
object.city = 0;
object.edu = 0;
object.marital = 0;

// $('select').selectpicker();
$('.selects').each(function () {
    $(this).on('change', function () {
        selectsValue();
    });
});


function selectsValue() {
    object.gendar = Number.parseInt($('#genderSelect').val());
    object.age = Number.parseInt($('#ageSelect').val());
    object.city = Number.parseInt($('#citySelect').val());
    object.edu = Number.parseInt($('#eduSelect').val());
    object.marital = Number.parseInt($('#maritalSelect').val());
    console.log(object);
    getData()
}



var options = {
    aspectRatio: 1,
    legend: {
        display: false
    },
    scales: {
        // maintainAspectRatio: false,
        xAxes: [{
            stacked: true,
            barPercentage: 0.7,
        }],
    }
};
var o1 = {
    aspectRatio: 3,
};

var o2 = {
    aspectRatio: 3,
};


var optionsFull = o2;

// var optionsDonout = {
//     aspectRatio: 1,
//     legend: {
//         display: false
//     },
//     cutoutPercentage: 60,
//     // responsive: false,

// }

var optionsDonout = {
    aspectRatio: 1,
    legend: {
        display: false
    },
    cutoutPercentage: 60,
    events: false,
    animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
            var ctx = this.chart.ctx;
            // ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
            ctx.font = "15px Verdana";

            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            this.data.datasets.forEach(function (dataset) {

                for (var i = 0; i < dataset.data.length; i++) {
                    var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                        total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                        mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                        start_angle = model.startAngle,
                        end_angle = model.endAngle,
                        mid_angle = start_angle + (end_angle - start_angle) / 2;

                    var x = mid_radius * Math.cos(mid_angle);
                    var y = mid_radius * Math.sin(mid_angle);

                    ctx.fillStyle = '#fff';
                    if (i == 3) { // Darker text color for lighter background
                        ctx.fillStyle = '#444';
                    }
                    var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
                    //Don't Display If Legend is hide or value is 0
                    if (dataset.data[i] != 0 /*&& dataset._meta[0].data[i].hidden != true*/) {
                        ctx.font = "20px";
                        ctx.fillText(dataset.data[i], model.x + x, model.y + y + 7);
                        // Display percent in another line, line break doesn't work for fillText
                        // ctx.fillText(percent, model.x + x, model.y + y + 15);
                    }
                }
            });
        }
    }
};


var backgroundColor = ["#257968", "#26A8DF", "#F4B02F"];


// a();
getData();
var res, allRes;
function getData() {
    $('#loading').fadeTo("fast", 1);

    $.ajax({
        url: "https://www.steadypace.co:3703/api/values/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital,
    })
        .done(function (data) {
            $('#loading').fadeOut();;
            $('#loading').css("background-color", "#ffffff31");

            res = data.details;
            allRes = data;
            // console.log(res);
            a();

        });
}

var chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6,
    chart7,
    chart8,
    chart9,
    chart10,
    chart11,
    chart12,
    chartc2,
    chartc3,
    chartc4,
    chartY1,
    chartY2,
    chartY3,
    chartY4,
    chartY5;

var used = false;
function a() {
    var mapData = [
        {
            key: 'sa-4293',
            id: 0,
            value: 0,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-ri',
            id: 1,
            value: allRes.cities.Riyadh,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-qs',
            id: 2,
            value: allRes.cities.Jawf,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-hs',
            id: 3,
            value: allRes.cities.Northern_Borders,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-tb',
            id: 4,
            value: allRes.cities.Tabuk,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-jf',
            id: 5,
            value: allRes.cities.Jawf,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-ha',
            id: 6,
            value: allRes.cities.Hail,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-nj',
            id: 7,
            value: allRes.cities.Najran,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-as',
            id: 8,
            value: allRes.cities.Asir,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-ba',
            id: 9,
            value: allRes.cities.Bahah,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-jz',
            id: 10,
            value: allRes.cities.Jizan,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-sh',
            id: 11,
            value: allRes.cities.Sharqiyah,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-mk',
            id: 12,
            value: allRes.cities.Makkah,
            text: 'Male: 10% <br>Female: 5%'
        },
        {
            key: 'sa-md',
            id: 13,
            value: allRes.cities.Madinah,
            text: 'Male: 10% <br>Female: 5%'
        },
    ];

    map123.series[0].update({
        data: mapData
    });

    var ctx = document.getElementById('gendar').getContext('2d');
    if (chartc2 != undefined) { chartc2.destroy(); }
    chartc2 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                label: '',
                borderColor: '#ffffff',
                data: [Math.round(allRes.genders.Male), Math.round(allRes.genders.Female)],
                backgroundColor: backgroundColor
            }]
        },
        options: optionsDonout
    });

    var ctx = document.getElementById('gendar2').getContext('2d');
    if (chartc3 != undefined) { chartc3.destroy(); }
    chartc3 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['15 - 19', '20-24', '25-29'],
            datasets: [{
                label: '',
                borderColor: '#ffffff',
                data: [Math.round(allRes.ages.age15_19), Math.round(allRes.ages.age20_24), Math.round(allRes.ages.age25_29)],
                backgroundColor: backgroundColor
            }]
        },
        options: optionsDonout
    });

    var ctx = document.getElementById('overAll').getContext('2d');
    if (chartc4 != undefined) { chartc4.destroy(); }
    chartc4 = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Ready', 'Not ready'],
            datasets: [{
                label: '',
                borderColor: '#ffffff',
                data: [Math.round(allRes.overAll), Math.round(100 - allRes.overAll)],
                backgroundColor: ["#257968", "#ffffff"]
            }]
        },
        options: optionsDonout
    });
    

    $(document).ready(function () {
        md.initDashboardPageCharts();
    });


    // var ctx = document.getElementById('myChart').getContext('2d');
    // if (chart1 != undefined) { 
    //     // var setData = [res.S13A5, res.S13A4, res.S13A3, res.S13A2, res.S13A1, res.S13A96];
    //     // var label = ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'];
    //     // removeData(chart1);
    //     // addData(chart1, label, setData)
    //     chart1.destroy(); 
    // } 
    // // else {
    //     chart1 = new Chart(ctx, {
    //         // The type of chart we want to create
    //         type: 'bar',

    //         // The data for our dataset
    //         data: {
    //             labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //             datasets: [{
    //                 label: '',
    //                 backgroundColor: backgroundColor,
    //                 borderColor: '#ffffff',
    //                 data: [res.S13A5, res.S13A4, res.S13A3, res.S13A2, res.S13A1, res.S13A96]
    //             }]
    //         },

    //         // Configuration options go here
    //         options: options
    //     });
    // // }
    // var ctx2 = document.getElementById('myChart2').getContext('2d');
    // if (chart2 != undefined) { chart2.destroy(); }
    // chart2 = new Chart(ctx2, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13B5, res.S13B4, res.S13B3, res.S13B2, res.S13B1, res.S13B96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart3').getContext('2d');
    // if (chart3 != undefined) { chart3.destroy(); }
    // // ctx.height = "1000px";
    // chart3 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13C5, res.S13C4, res.S13C3, res.S13C2, res.S13C1, res.S13C96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart4').getContext('2d');
    // if (chart4 != undefined) { chart4.destroy(); }
    // chart4 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13D5, res.S13D4, res.S13D3, res.S13D2, res.S13D1, res.S13D96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart5').getContext('2d');
    // if (chart5 != undefined) { chart5.destroy(); }
    // chart5 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13E5, res.S13E4, res.S13E3, res.S13E2, res.S13E1, res.S13E96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart6').getContext('2d');
    // if (chart6 != undefined) { chart6.destroy(); }
    // chart6 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13F5, res.S13F4, res.S13F3, res.S13F2, res.S13F1, res.S13F96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart7').getContext('2d');
    // if (chart7 != undefined) { chart7.destroy(); }
    // chart7 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13G5, res.S13G4, res.S13G3, res.S13G2, res.S13G1, res.S13G96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart8').getContext('2d');
    // if (chart8 != undefined) { chart8.destroy(); }
    // chart8 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13H5, res.S13H4, res.S13H3, res.S13H2, res.S13H1, res.S13H96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart9').getContext('2d');
    // if (chart9 != undefined) { chart9.destroy(); }
    // chart9 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13I5, res.S13I4, res.S13I3, res.S13I2, res.S13I1, res.S13I96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart10').getContext('2d');
    // if (chart10 != undefined) { chart10.destroy(); }
    // chart10 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13J5, res.S13J4, res.S13J3, res.S13J2, res.S13J1, res.S13J96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart11').getContext('2d');
    // if (chart11 != undefined) { chart11.destroy(); }
    // chart11 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13A5, res.S13A4, res.S13A3, res.S13A2, res.S13A1, res.S13A96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    // var ctx = document.getElementById('myChart12').getContext('2d');
    // if (chart12 != undefined) { chart12.destroy(); }
    // chart12 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Strongly Agree', 'Agree', 'Not sure', 'Disagree', 'Strongly Disagree', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S13A5, res.S13A4, res.S13A3, res.S13A2, res.S13A1, res.S13A96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });





    // var ctx = document.getElementById('myChartY1').getContext('2d');
    // if (chartY1 != undefined) { chartY1.destroy(); }
    // chartY1 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Yes', 'No', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S14A0, res.S14A1, res.S14A96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });
    // var ctx = document.getElementById('myChartY2').getContext('2d');
    // if (chartY2 != undefined) { chartY2.destroy(); }
    // chartY2 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Yes', 'No', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S14B0, res.S14B1, res.S14B96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });
    // var ctx = document.getElementById('myChartY3').getContext('2d');
    // if (chartY3 != undefined) { chartY3.destroy(); }
    // chartY3 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Yes', 'No', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S14C0, res.S14C1, res.S14C96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });
    // var ctx = document.getElementById('myChartY4').getContext('2d');
    // if (chartY4 != undefined) { chartY4.destroy(); }
    // chartY4 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Yes', 'No', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S14C0, res.S14C1, res.S14C96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });
    // var ctx = document.getElementById('myChartY5').getContext('2d');
    // if (chartY5 != undefined) { chartY5.destroy(); }
    // chartY5 = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',

    //     // The data for our dataset
    //     data: {
    //          labels: ['Yes', 'No', 'Refer not to answer'],
    //         datasets: [{
    //             label: '',
    //             backgroundColor: backgroundColor,
    //             borderColor: '#ffffff',
    //             data: [res.S14E0, res.S14E1, res.S14E96]
    //         }]
    //     },

    //     // Configuration options go here
    //     options: options
    // });

    used = true;

}

// $(document).ready(() => {
//     // SideNav Initialization
//     $(".button-collapse").sideNav();
//       new WOW().init();
//   })


// getData();
