var object = new Object();
object.gendar = 0;
object.age= 0;
object.city= 0;
object.edu= 0;
object.marital= 0;
object.index= 0;

$('.selects').each(function() {
    $(this).on('change', function() {
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
        xAxes: [{
            stacked: true,
            barPercentage: 0.7,
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
},
        
};
var o1 = {
    aspectRatio: 3,
};

var o2 = {
    aspectRatio: 3,
};


var optionsFull = o2;

var optionsDonout = {
    aspectRatio: 1,
    legend: {
        display: false
    },
    cutoutPercentage: 60,
}

var backgroundColor = ["#257968", "#26A8DF", "#F4B02F"];


getData();
var res, allRes, NewRes;
function getData() {
    $('#loading').fadeTo("fast", 1);

    $.ajax({
        url: "https://www.steadypace.co:3703/api/values/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital,
    })
    .done(function(data) {
        // $('#loading').fadeOut();;
        // $('#loading').css("background-color", "#ffffff31");

        res = data.details;
        allRes = data;

        // $.ajax({
        //     url: "https://www.steadypace.co:3703/api/misk3/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + object.index,
        //     // url: "http://steadypace.co:85/api/values/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital,
        //     // url: "http://steadypace.co:96/api/values/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital,
        // })
        // .done(function(data) {
            $('#loading').fadeOut();;
            $('#loading').css("background-color", "#ffffff31");
    
        //     // res = data.details;
        //     NewRes = data;
        //     // console.log(res);
            a();
            
        // });
        
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
    if (chartc4 == undefined) {
        chartc4 = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Ready', 'Not ready'],
                datasets: [{
                    label: '',
                    borderColor: '#ffffff',
                    data: [Math.round(allRes.overAll), Math.round(100 - allRes.overAll)],
                    backgroundColor: ["#257968", "#86f8e1"]
                }]
            },
            options: optionsDonout
        });
    }

    $(document).ready(function () {
      md.initDashboardPageCharts();
    });

    var rawData = {
        male: {"determination":"84.62","health":"80.97","patriotism":"84.50","positivity":"78.04","responsibility":"86.65","tolerance":"89.74"},
        female: {"determination":"79.31","health":"71.84","patriotism":"79.17","positivity":"76.23","responsibility":"84.65","tolerance":"87.24"}
    };

    var ajaxurl = 'https://www.steadypace.co:3703/api/misk3/index/0/0/0/0/0/1';
    var newRawData = {"overAll":"76.55","genderIndexes":{"Male":"80.97","Female":"71.84"},"ageIndexes":{"15-19":"76.66","20-24":"73.32","25-34":"78.11"},"provinceIndexes":{"Riyadh":"72.41","Qassim":"72.29","Northern_Borders":"73.54","Tabuk":"95.10","Jawf":"87.66","Hail":"70.13","Najran":"82.31","Asir":"69.19","Bahah":"79.95","Jizan":"77.40","Sharqiyah":"88.29","Makkah":"73.93","Madinah":"69.99"}}
    
    var datasetsValues = {};
    datasetsValues.name = [];
    datasetsValues.values = [];
    var rawDataArray = Object.values(rawData);
    var rawDataNames = Object.keys(rawData);
    var titles = Object.keys(rawDataArray[0]);
    for (let i = 0; i < rawDataArray.length; i++) {
        datasetsValues.name.push(rawDataNames[i]);
        datasetsValues.values.push(Object.values(rawDataArray[i]));
    }
    var compareData = {};

    console.log(Object.keys(rawData));

    compareData.labels = titles,
    compareData.datasets = [];
    for (let i = 0; i < datasetsValues.values.length; i++) {
        compareData.datasets.push({
            label: datasetsValues.name[i],
            backgroundColor: '#123434',
            borderColor: '#123434',
            borderWidth: 1,
            minBarLength: 0,
            data: datasetsValues.values[i]
        });
    }

    var ctx = document.getElementById('canvas').getContext('2d');
    if (window.myBar != undefined) { window.myBar.destroy(); }
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: compareData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },        
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            }
        }
    });
    used = true;
}
