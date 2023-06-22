var isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
  $('.sidenavButton').addClass('minimize');
  $('.sidenavButton').addClass('mobile');
  $('#Domains').addClass('minimize');
  $('#Domains').addClass('mobile');
  isMobile = true;
  $('.main-panel').scroll(function () {
    $('.sidenavButton').removeClass('preactive');
  });

} else {
  $('.main-panel').scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.sidenavButton').addClass('minimize');
      $('#Domains').addClass('minimize');
    } else {
      $('.sidenavButton').removeClass('minimize');
      $('#Domains').removeClass('minimize');
    }
  });
}




var object = new Object();
object.gendar = 0;
object.age = 0;
object.city = 0;
object.edu = 0;
object.marital = 0;
object.index = 0;

var filters = (IsArabic) ? {
  gendar: ['الجنس', 'ذكر', 'انثى'],
  age: ['العمر', '15-19', '20-24', '25-34'],
  city: ["المحافظة", "الرياض", "القصيم", "الحدود الشمالية", "تبوك", "الجوف", "حائل", "نجران", "عسير", "الباحه", "جازان", "الشرقية", "مكة المكرمة", "المدينة المنورة"],
  edu: ['المرحلة التعليميه', 'Primary and below', 'المتوسطة', 'الثانوية', 'دبلوم متوسط', 'بكالوريوس', 'دبلوم عالي', 'Masters', 'Doctorate'],
  marital: ['الحالة الاجتماعية', 'غير متزوج', 'متزوج', 'Separated', 'Divorced', 'Widowed'],
}
  : {
    gendar: ['Gender', 'Male', 'Female'],
    age: ['Age', '15-19', '20-24', '25-34'],
    city: ["Province", "Riyadh", "Qassim", "Northern Borders", "Tabuk", "Jawf", "Ha'il", "Najran", "Asir", "Bahah", "Jizan", "Ash Sharqiyah", "Makkah", "Madinah"],
    edu: ['Education Level', 'Primary and below', 'Middle', 'Secondary', 'Intermediate Diploma', 'Bachelors', 'Higher Diploma', 'Masters', 'Doctorate'],
    marital: ['Marital status', 'Unmarried', 'Married', 'Separated', 'Divorced', 'Widowed'],
  };

$('.selects').each(function () {
  $(this).on('change', function () {
    selectsValue();
  });
});
var filterString;
function selectsValue() {
  filterString = "";
  object.gendar = Number.parseInt($('#genderSelect').val());
  object.age = Number.parseInt($('#ageSelect').val());
  object.city = Number.parseInt($('#citySelect').val());
  object.edu = Number.parseInt($('#eduSelect').val());
  object.marital = Number.parseInt($('#maritalSelect').val());
  if (object.gendar != 0) {
    filterString += filters.gendar[object.gendar];
    filterString += ", ";
  }
  if (object.age != 0) {
    filterString += filters.age[object.age];
    filterString += ", ";
  }
  if (object.city != 0) {
    filterString += filters.city[object.city];
    filterString += ", ";
  }
  if (object.edu != 0) {
    filterString += filters.edu[object.edu];
    filterString += ", ";
  }
  if (object.marital != 0) {
    filterString += filters.marital[object.marital];
    filterString += ", ";
  }

  if (filterString.length != 0) {
    $('#filterString').text(filterString.slice(0, -2));
    $('#filterStringCol').show();
  } else {
    $('#filterStringCol').hide();
  }

  selectCircle = true;
  getAll()
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

function colseSidebar() {
  var testElement = document.getElementsByTagName('html')[0];
  if (testElement.classList.contains('nav-open')) {
    $('.navbar-toggler')[0].click();
  }
}

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
          if (i == 3) {
            ctx.fillStyle = '#444';
          }
          var percent = String(Math.round(dataset.data[i] / total * 100)) + "%";
          if (dataset.data[i] != 0) {
            ctx.font = "20px";
            ctx.fillText(dataset.data[i], model.x + x, model.y + y + 7);
          }
        }
      });
    }
  }
};
var backgroundColor = ["#257968", "#26A8DF", "#F4B02F"];


firstCircle = true;
selectCircle = true;
indexNumber = 0;
getAll();

var AllRes, indexRes, CompRes, detailsRes;
function getAll() {
  $('#loading').fadeTo("fast", 1);

  $.ajax({
    url: "https://www.steadypace.co:3703/api/misk3/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + object.index,
  })
    .done(function (data) {
      $('#loading').fadeOut();;
      $('#loading').css("background-color", "#ffffff31");

      AllRes = data.indexes;
      indexRes = {
        overAll: data.overAll,
        genderIndexes: data.genderIndexes,
        ageIndexes: data.ageIndexes,
        provinceIndexes: data.provinceIndexes
      };
      overAll();
      a();
      getDetails();
    });
}

$('.sidenavButton').click(function () {
  if (isMobile) {
    if ($(this).hasClass('preactive')) {
      if ($(this).hasClass('active')) {
        $('.sidenavButton').removeClass('preactive');
        return;
      }
      $('.sidenavButton').removeClass('active');
      $('.sidenavButton').removeClass('preactive');
      $(this).addClass('active');
      var i;
      switch (this.id) {
        case 'b1':
          i = 0;
          break;
        case 'b2':
          i = 1;
          break;
        case 'b3':
          i = 2;
          break;
        case 'b4':
          i = 3;
          break;
        case 'b5':
          i = 4;
          break;
      }

      var ind = (i > 0) ? i + 1 : i;
      this.style.stroke = '#FFFFFF';
      object.index = ind;
      getIndex();
      switch (ind) {
        case 0:
          if (IsArabic) {
            $('#IndexName').text('العزيمة والمثابره');
          } else {
            $('#IndexName').text('Determination');
          }
          break;

        case 1:
          if (IsArabic) {
            $('#IndexName').text('Health');
          } else {
            $('#IndexName').text('Health');
          }
          break;

        case 2:
          if (IsArabic) {
            $('#IndexName').text('الوطنية والإنتماء الوطني');
          } else {
            $('#IndexName').text('Patriotism');
          }
          break;

        case 3:
          if (IsArabic) {
            $('#IndexName').text('الإيجابية');
          } else {
            $('#IndexName').text('Positivity');
          }
          break;

        case 4:
          if (IsArabic) {
            $('#IndexName').text('المسؤولية');
          } else {
            $('#IndexName').text('Responsibility');
          }
          break;

        case 5:
          if (IsArabic) {
            $('#IndexName').text('التسامح');
          } else {
            $('#IndexName').text('Tolerance');
          }
          break;

        default:
          console.log('error');
          break;
      }
    }
    else {
      $('.sidenavButton').removeClass('preactive');
      $(this).addClass('preactive');
    }
  } else {
    $('.sidenavButton').removeClass('active');
    $(this).addClass('active');
    var i;
    switch (this.id) {
      case 'b1':
        i = 0;
        break;
      case 'b2':
        i = 1;
        break;
      case 'b3':
        i = 2;
        break;
      case 'b4':
        i = 3;
        break;
      case 'b5':
        i = 4;
        break;
    }

    var ind = (i > 0) ? i + 1 : i;
    this.style.stroke = '#FFFFFF';
    object.index = ind;
    getIndex();
    switch (ind) {
      case 0:
        if (IsArabic) {
          $('#IndexName').text('العزيمة والمثابره');
        } else {
          $('#IndexName').text('Determination');
        }
        break;

      case 1:
        if (IsArabic) {
          $('#IndexName').text('Health');
        } else {
          $('#IndexName').text('Health');
        }
        break;

      case 2:
        if (IsArabic) {
          $('#IndexName').text('الوطنية والإنتماء الوطني');
        } else {
          $('#IndexName').text('Patriotism');
        }
        break;

      case 3:
        if (IsArabic) {
          $('#IndexName').text('الإيجابية');
        } else {
          $('#IndexName').text('Positivity');
        }
        break;

      case 4:
        if (IsArabic) {
          $('#IndexName').text('المسؤولية');
        } else {
          $('#IndexName').text('Responsibility');
        }
        break;

      case 5:
        if (IsArabic) {
          $('#IndexName').text('التسامح');
        } else {
          $('#IndexName').text('Tolerance');
        }
        break;

      default:
        console.log('error');
        break;
    }
  }
});

function overAll() {
  $('#DeterminationValue').html('(' + Math.round(AllRes.determination) + ')');
  $('#PatriotismnValue').html('(' + Math.round(AllRes.patriotism) + ')');
  $('#PositivityValue').html('(' + Math.round(AllRes.positivity) + ')');
  $('#ResponsibilityValue').html('(' + Math.round(AllRes.responsibility) + ')');
  $('#ToleranceValue').html('(' + Math.round(AllRes.tolerance) + ')');

  var ctx = document.getElementById('AllDomains').getContext('2d');
  if (chartc5 != undefined) { chartc5.destroy(); }
  chartc5 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: (IsArabic) ? ["العزيمة والمثابره", "الوطنية والإنتماء الوطني", "الإيجابية", "المسؤولية", "التسامح"] :
        ['Determination', 'Patriotism', 'Positivity', 'Responsibility', 'Tolerance'],
      datasets: [{
        label: '',
        borderColor: '#ffffff',
        data: [AllRes.determination, /*AllRes.health, */AllRes.patriotism, AllRes.positivity, AllRes.responsibility, AllRes.tolerance],
        backgroundColor: ["#257968", "#86f8e1", "#86f8e1", "#86f8e1", "#86f8e1"]
      }]
    },
    options: {
      aspectRatio: 0.6,
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
    }
  });

  var dataWebsiteViewsChart = {
    labels: (IsArabic) ? ["العزيمة والمثابره", "الوطنية والإنتماء الوطني", "الإيجابية", "المسؤولية", "التسامح"] :
      ['Determination', 'Patriotism', 'Positivity', 'Responsibility', 'Tolerance'],
    series: [
      [AllRes.determination, /*AllRes.health, */AllRes.patriotism, AllRes.positivity, AllRes.responsibility, AllRes.tolerance]
    ]
  };
  var optionsWebsiteViewsChart = {
    axisX: {
      showGrid: true
    },
    low: 0,
    high: 100,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  };
  var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  var websiteViewsChart = Chartist.Bar('#chartAllIndexes', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
  websiteViewsChart.on('draw', function (data) {
    if (data.type === 'bar') {
      data.element._node.onclick = function () {
        var bars = document.getElementById('chartAllIndexes').getElementsByClassName('ct-series-a')[0].children;
        for (let i = 0; i < bars.length; i++) {
          var ind = (i > 0) ? i + 1 : i;
          if (bars[i] === this) {
            indexNumber = i;
            this.style.stroke = '#FFFFFF';
            object.index = ind;
            getIndex();
            switch (ind) {
              case 0:
                if (IsArabic) {
                  $('#IndexName').text('العزيمة والمثابره');
                } else {
                  $('#IndexName').text('Determination');
                }
                break;

              case 1:
                if (IsArabic) {
                  $('#IndexName').text('Health');
                } else {
                  $('#IndexName').text('Health');
                }
                break;

              case 2:
                if (IsArabic) {
                  $('#IndexName').text('الوطنية والإنتماء الوطني');
                } else {
                  $('#IndexName').text('Patriotism');
                }
                break;

              case 3:
                if (IsArabic) {
                  $('#IndexName').text('الإيجابية');
                } else {
                  $('#IndexName').text('Positivity');
                }
                break;

              case 4:
                if (IsArabic) {
                  $('#IndexName').text('المسؤولية');
                } else {
                  $('#IndexName').text('Responsibility');
                }
                break;

              case 5:
                if (IsArabic) {
                  $('#IndexName').text('التسامح');
                } else {
                  $('#IndexName').text('Tolerance');
                }
                break;

              default:
                console.log('error');
                break;
            }
          } else {
            bars[i].style.stroke = '#71A28A';
          }
        }
      }
    }
  });

  var dataWebsiteViewsChart = {
    labels: (IsArabic) ? ["العزيمة والمثابره", "الوطنية والإنتماء الوطني", "الإيجابية", "المسؤولية", "التسامح"] :
      ['Determination', 'Patriotism', 'Positivity', 'Responsibility', 'Tolerance'],
    series: [
      [AllRes.determination, AllRes.patriotism, AllRes.positivity, AllRes.responsibility, AllRes.tolerance]
    ]
  };
  var optionsWebsiteViewsChart = {
    horizontalBars: true,
    axisY: {
      showGrid: true
    },
    low: 0,
    high: 100,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 5,
      left: 0
    }
  };
  var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisY: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  var websiteViewsChart = Chartist.Bar('#chartAllIndexes2', dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
  websiteViewsChart.on('draw', function (data) {
    if (data.type === 'bar') {
      data.element._node.onclick = function () {
        var bars = document.getElementById('chartAllIndexes2').getElementsByClassName('ct-series-a')[0].children;
        for (let i = 0; i < bars.length; i++) {
          var ind = (i > 0) ? i + 1 : i;
          if (bars[i] === this) {
            indexNumber = i;
            this.style.stroke = '#FFFFFF';
            object.index = ind;
            getIndex();
            switch (ind) {
              case 0:
                if (IsArabic) {
                  $('#IndexName').text('العزيمة والمثابره');
                } else {
                  $('#IndexName').text('Determination');
                }
                break;

              case 1:
                if (IsArabic) {
                  $('#IndexName').text('Health');
                } else {
                  $('#IndexName').text('Health');
                }
                break;

              case 2:
                if (IsArabic) {
                  $('#IndexName').text('الوطنية والإنتماء الوطني');
                } else {
                  $('#IndexName').text('Patriotism');
                }
                break;

              case 3:
                if (IsArabic) {
                  $('#IndexName').text('الإيجابية');
                } else {
                  $('#IndexName').text('Positivity');
                }
                break;

              case 4:
                if (IsArabic) {
                  $('#IndexName').text('المسؤولية');
                } else {
                  $('#IndexName').text('Responsibility');
                }
                break;

              case 5:
                if (IsArabic) {
                  $('#IndexName').text('التسامح');
                } else {
                  $('#IndexName').text('Tolerance');
                }
                break;

              default:
                console.log('error');
                break;
            }
          } else {
            bars[i].style.stroke = '#71A28A';
          }
        }
      }
    }
  });



  setTimeout(() => {
    if (firstCircle) {
      var barsStart = document.getElementById('chartAllIndexes').getElementsByClassName('ct-series-a')[0].children;
      for (let i = 0; i < barsStart.length; i++) {
        if (i == 0) {
          barsStart[0].style.stroke = '#FFFFFF';
        } else {
          barsStart[i].style.stroke = '#71A28A';
        }
      }
      firstCircle = false;
    } else if (selectCircle) {
      var barsStart = document.getElementById('chartAllIndexes').getElementsByClassName('ct-series-a')[0].children;
      for (let i = 0; i < barsStart.length; i++) {
        if (i == indexNumber) {
          barsStart[i].style.stroke = '#FFFFFF';
        } else {
          barsStart[i].style.stroke = '#71A28A';
        }
      }
      selectCircle = false;
    }
  }, 50);

  setTimeout(() => {
    if (firstCircle) {
      var barsStart = document.getElementById('chartAllIndexes2').getElementsByClassName('ct-series-a')[0].children;
      for (let i = 0; i < barsStart.length; i++) {
        if (i == 0) {
          barsStart[0].style.stroke = '#FFFFFF';
        } else {
          barsStart[i].style.stroke = '#71A28A';
        }
      }
      firstCircle = false;
    } else if (selectCircle) {
      var barsStart = document.getElementById('chartAllIndexes2').getElementsByClassName('ct-series-a')[0].children;
      for (let i = 0; i < barsStart.length; i++) {
        if (i == indexNumber) {
          barsStart[i].style.stroke = '#FFFFFF';
        } else {
          barsStart[i].style.stroke = '#71A28A';
        }
      }
      selectCircle = false;
    }
  }, 50);
}

function getIndex() {
  $('#loading').fadeTo("fast", 1);

  $.ajax({
    url: "https://www.steadypace.co:3703/api/misk3/index/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + object.index,
  })
    .done(function (data) {
      $('#loading').fadeOut();;
      $('#loading').css("background-color", "#ffffff31");

      indexRes = data;
      a();
      getDetails();
    });
}

function getComparison(comp) {
  $('#loading').fadeTo("fast", 1);

  if (IsArabic) {
    $.ajax({
      url: "https://www.steadypace.co:3703/api/misk3/comp/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + (comp + 1) + "?lang=ar",
    })
      .done(function (data) {
        $('#loading').fadeOut();;
        $('#loading').css("background-color", "#ffffff31");

        CompRes = data;
        compare();
      });
  } else {
    $.ajax({
      url: "https://www.steadypace.co:3703/api/misk3/comp/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + (comp + 1),
    })
      .done(function (data) {
        $('#loading').fadeOut();;
        $('#loading').css("background-color", "#ffffff31");

        CompRes = data;
        compare();
      });
  }
}

function compare() {

  var datasetsValues = {};
  datasetsValues.name = [];
  datasetsValues.values = [];
  var rawDataArray = Object.values(CompRes);
  var rawDataNames = Object.keys(CompRes);
  var titles = Object.keys(rawDataArray[0]);
  titles = titles.map(x => x.replace(/^./, x[0].toUpperCase()))
  for (let i = 0; i < rawDataArray.length; i++) {
    datasetsValues.name.push(rawDataNames[i]);
    datasetsValues.values.push(Object.values(rawDataArray[i]));
  }
  var compareData = {};

  compareData.labels = (IsArabic) ? ["العزيمة والمثابره", "الوطنية والإنتماء الوطني", "الإيجابية", "المسؤولية", "التسامح"] :
    ['Determination', 'Patriotism', 'Positivity', 'Responsibility', 'Tolerance'];
  compareData.datasets = [];
  CompColors = ['#257968', '#F4B02F', '#26A8DF', 'rgb(104, 103, 103)', '#37a08b', 'rgb(143, 112, 54)', 'rgb(91, 201, 248)', 'rgb(156, 156, 155)', '#5ab9a6', 'rgb(250, 206, 124)', 'rgb(120, 210, 248)', 'rgb(90, 90, 90)', 'rgb(48, 47, 47)'];
  for (let i = 0; i < datasetsValues.values.length; i++) {
    var ii = i;
    while (ii >= CompColors.length) {
      ii = ii - CompColors.length;
    }
    compareData.datasets.push({
      label: datasetsValues.name[i],
      backgroundColor: CompColors[ii],
      borderColor: CompColors[ii],
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
            beginAtZero: true, max: 100
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
}

function comparisonSelect(selection) {
  var coparisonValue = Number.parseInt(selection);
  getComparison(coparisonValue);
};

var firstModal = true;
$('#ComparisonModal').on('show.bs.modal', function (e) {
  if (firstModal) {
    getComparison(0);
    firstModal = false;
  }
});

function getDetails() {
  clearCharts();

  if (IsArabic) {
    $.ajax({
      url: "https://www.steadypace.co:3703/api/misk3/details/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + object.index + "?lang=ar",
    })
      .done(function (data) {
        detailsRes = data;
        clearCharts();
        createDetails();
      });
  } else {
    $.ajax({
      url: "https://www.steadypace.co:3703/api/misk3/details/" + object.gendar + "/" + object.age + "/" + object.city + "/" + object.edu + "/" + object.marital + "/" + object.index,
    })
      .done(function (data) {
        detailsRes = data;
        clearCharts();
        createDetails();
      });
  }
}

function createDetails() {
  createDetailsContainers(detailsRes);
  detailsRes.forEach(x => {
    var chartId = x.qNo;
    var statement = x.name;
    var labels = x.values.map(a => a.name);
    var series = [x.values.map(a => a.value)];
    var containerId = '' + x.values.length + '_' + x.lables;
    createChartDom(statement, chartId, labels, series, containerId);
  });
}

var label;
if (IsArabic) {
  label = [
    ["أوافق", "لا أوافق"],
    ["أوافق", "لا أوافق"],
    ["دائماً", "أبداً"],
    ["مهتم", "غير مهتم"],
    ["ملتزم", "غير ملتزم"],
    ["يشكل خطر", "لا يشكل خطر"],
    ["نعم", "لا"],
    ["فخور", "غير فخور"],
    ["معرفة عالية", "غياب المعرفة"],
  ];
} else {
  label = [
    ["Agree", "Disagree"],
    ["Agree", "Disagree"],
    ["Always", "Never"],
    ["Important", "Unimportant"],
    ["Committed", "Not Committed"],
    ["Danger", "No Danger"],
    ["Yes", "No"],
    ["Proud", "Not Proud"],
    ["High Knowledge", "No Knowledge"],
  ];
}

var pnta;
if (IsArabic) {
  pnta = 'افضل عدم الإجابة';
} else {
  pnta = 'Prefer not to answer';
}

function createDetailsContainers(w) {
  var a = checkIfDuplicateExists(w);
  a.forEach(x => {
    var dom =
      `
        <div class="col-12 mb-4 text-center">
        <hr>
        `+ (x[0] - 1) + `: ` + label[x[1]][0] + `, &nbsp; 1: ` + label[x[1]][1] + `, &nbsp; <span style="color: #F4B02F">0: ` + pnta + `</span>
        </div>

        <div class="col-12 mb-4 text-center">
          <div class="row statementsRow_` + x[0] + `_` + x[1] + `">
        <div class="col-12 mb-4 text-center">

        </div>
      `;
    $('.statements').append(dom);
  });
}

function checkIfDuplicateExists(w) {
  var a = [];
  w.forEach(x => {
    var v = [x.values.length, x.lables];
    var isFound = false; i = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.length > 0) {
        var compVal = a[i];
        if (compVal[0] == v[0] && compVal[1] == v[1]) {
          isFound = true;
          break;
        }
      }
    }
    if (!isFound) {
      a.push(v);
    }
  });
  return a;
}

function compareIndexFound(a, b) {

  return a.indexFound - b.indexFound;
}

function clearCharts() {
  $('.statements').empty();
}

function createChartDom(statement, chartId, labels, series, containerId) {
  var dom =
    `<div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 px-4">
    <div class="card card-chart">
      <div id="panel2" class="card-header card-header-warning chart-color">
        <div dir="ltr" class="ct-chart" id="` + chartId + `"></div>
      </div>
      <div class="card-body">
        <p class="card-title">` + statement + `</p>
      </div>
    </div>
  </div>`;
  $('.statementsRow_' + containerId).append(dom);

  careteChart(chartId, labels, series);
}

function careteChart(chartId, labels, series) {
  var dataWebsiteViewsChart = {
    labels: labels,
    series: series
  };
  var optionsWebsiteViewsChart = {
    axisX: {
      showGrid: false
    },
    low: 0,
    chartPadding: {
      top: 7,
      right: 5,
      bottom: 0,
      left: 0
    }
  };
  var responsiveOptions = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5
    }]
  ];
  var websiteViewsChart = new Chartist.Bar('#' + chartId, dataWebsiteViewsChart, optionsWebsiteViewsChart, responsiveOptions);
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
  chartc5,
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
      value: indexRes.provinceIndexes.Riyadh,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-qs',
      id: 2,
      value: indexRes.provinceIndexes.Jawf,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-hs',
      id: 3,
      value: indexRes.provinceIndexes.Northern_Borders,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-tb',
      id: 4,
      value: indexRes.provinceIndexes.Tabuk,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-jf',
      id: 5,
      value: indexRes.provinceIndexes.Jawf,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-ha',
      id: 6,
      value: indexRes.provinceIndexes.Hail,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-nj',
      id: 7,
      value: indexRes.provinceIndexes.Najran,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-as',
      id: 8,
      value: indexRes.provinceIndexes.Asir,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-ba',
      id: 9,
      value: indexRes.provinceIndexes.Bahah,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-jz',
      id: 10,
      value: indexRes.provinceIndexes.Jizan,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-sh',
      id: 11,
      value: indexRes.provinceIndexes.Sharqiyah,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-mk',
      id: 12,
      value: indexRes.provinceIndexes.Makkah,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-md',
      id: 13,
      value: indexRes.provinceIndexes.Madinah,
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
        data: [Math.round(indexRes.genderIndexes.Male), Math.round(indexRes.genderIndexes.Female)],
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
      labels: ['15 - 19', '20-24', '25-34'],
      datasets: [{
        label: '',
        borderColor: '#ffffff',
        data: [Math.round(indexRes.ageIndexes['15-19']), Math.round(indexRes.ageIndexes['20-24']), Math.round(indexRes.ageIndexes['25-34'])],
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
        data: [Math.round(indexRes.overAll), Math.round(100 - indexRes.overAll)],
        backgroundColor: ["#257968", "#ffffff"]
      }]
    },
    options: optionsDonout
  });

  used = true;
}
var count = 1;


var map123;
drawMap();
function drawMap() {
  var data = [
    {
      key: 'sa-4293',
      id: 0,
      value: 0,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-ri',
      id: 1,
      value: 4,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-qs',
      id: 2,
      value: 7,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-hs',
      id: 3,
      value: 8,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-tb',
      id: 4,
      value: 1,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-jf',
      id: 5,
      value: 9,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-ha',
      id: 6,
      value: 6,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-nj',
      id: 7,
      value: 3,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-as',
      id: 8,
      value: 8,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-ba',
      id: 9,
      value: 11,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-jz',
      id: 10,
      value: 2,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-sh',
      id: 11,
      value: 10,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-mk',
      id: 12,
      value: 20,
      text: 'Male: 10% <br>Female: 5%'
    },
    {
      key: 'sa-md',
      id: 13,
      value: 5,
      text: 'Male: 10% <br>Female: 5%'
    },
  ];

  map123 = Highcharts.mapChart('container', {
    chart: {
      map: 'countries/sa/sa-all',
    },
    title: {
      enabled: false,
      text: ''
    },
    mapNavigation: {
      enabled: false,
    },

    colorAxis: {
      minColor: '#FFFFFF',
      maxColor: '#257968',
      min: 0,
      max: 100
    },

    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      backgroundColor: 'rgba(255,255,255,0.85)',
      verticalAlign: 'top',
      y: 25
    },
    series: [{
      data: data,
      joinBy: ['hc-key', 'key'],
      name: 'Youth Values',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: {point.value}',
      }
    }],
    plotOptions: {
      series: {
        point: {
          events: {
            click: function () {
              var cityId = this.id.toString();
              $('#citySelect').val(cityId);
              $('.selectpicker').selectpicker('refresh');
              selectsValue();
            }
          },
        }
      }
    }
  });
  timeout();
}
function timeout() {
  setTimeout(function () {
    map123.redraw();
    map123.reflow();
    if ($('.highcharts-background') == 500) {
      timeout();
    }
  }, 600);
}


(function () {
  isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

  if (isWindows) {
    $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
    $('html').addClass('perfect-scrollbar-on');
  } else {
    $('html').addClass('perfect-scrollbar-off');
  }
})();


var breakCards = true;

var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var mobile_menu_visible = 0,
  mobile_menu_initialized = false,
  toggle_initialized = false,
  bootstrap_nav_initialized = false;

var seq = 0,
  delays = 80,
  durations = 500;
var seq2 = 0,
  delays2 = 80,
  durations2 = 500;

$(document).ready(function () {

  $('body').bootstrapMaterialDesign();

  $sidebar = $('.sidebar');

  md.initSidebarsCheck();

  window_width = $(window).width();

  md.checkSidebarImage();

  if ($(".selectpicker").length != 0) {
    $(".selectpicker").selectpicker();
  }

  $('[rel="tooltip"]').tooltip();

  $('.form-control').on("focus", function () {
    $(this).parent('.input-group').addClass("input-group-focus");
  }).on("blur", function () {
    $(this).parent(".input-group").removeClass("input-group-focus");
  });

  $('input[type="checkbox"][required="true"], input[type="radio"][required="true"]').on('click', function () {
    if ($(this).hasClass('error')) {
      $(this).closest('div').removeClass('has-error');
    }
  });

});

$(document).on('click', '.navbar-toggler', function () {
  $toggle = $(this);

  if (mobile_menu_visible == 1) {
    $('html').removeClass('nav-open');

    $('.close-layer').remove();
    setTimeout(function () {
      $toggle.removeClass('toggled');
    }, 400);

    mobile_menu_visible = 0;
  } else {
    setTimeout(function () {
      $toggle.addClass('toggled');
    }, 430);

    var $layer = $('<div class="close-layer"></div>');

    if ($('body').find('.main-panel').length != 0) {
      $layer.appendTo(".main-panel");

    } else if (($('body').hasClass('off-canvas-sidebar'))) {
      $layer.appendTo(".wrapper-full-page");
    }

    setTimeout(function () {
      $layer.addClass('visible');
    }, 100);

    $layer.click(function () {
      $('html').removeClass('nav-open');
      mobile_menu_visible = 0;

      $layer.removeClass('visible');

      setTimeout(function () {
        $layer.remove();
        $toggle.removeClass('toggled');

      }, 400);
    });

    $('html').addClass('nav-open');
    mobile_menu_visible = 1;

  }

});

$(window).resize(function () {
  md.initSidebarsCheck();

  seq = seq2 = 0;
});

md = {
  misc: {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
  },

  checkSidebarImage: function () {
    $sidebar = $('.sidebar');
    image_src = $sidebar.data('image');

    if (image_src !== undefined) {
      sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>';
      $sidebar.append(sidebar_container);
    }
  },

  showNotification: function (from, align) {
    type = ['', 'info', 'danger', 'success', 'warning', 'rose', 'primary'];

    color = Math.floor((Math.random() * 6) + 1);

    $.notify({
      icon: "add_alert",
      message: "Welcome to <b>Material Dashboard Pro</b> - a beautiful admin panel for every web developer."

    }, {
      type: type[color],
      timer: 3000,
      placement: {
        from: from,
        align: align
      }
    });
  },


  initFormExtendedDatetimepickers: function () {
    $('.datetimepicker').datetimepicker({
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });

    $('.datepicker').datetimepicker({
      format: 'MM/DD/YYYY',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'
      }
    });

    $('.timepicker').datetimepicker({
      format: 'h:mm A',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-chevron-up",
        down: "fa fa-chevron-down",
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-screenshot',
        clear: 'fa fa-trash',
        close: 'fa fa-remove'

      }
    });
  },


  initSliders: function () {
    var slider = document.getElementById('sliderRegular');

    noUiSlider.create(slider, {
      start: 40,
      connect: [true, false],
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById('sliderDouble');

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  },

  initSidebarsCheck: function () {
    if ($(window).width() <= 991) {
      if ($sidebar.length != 0) {
        md.initRightMenu();
      }
    }
  },

  checkFullPageBackgroundImage: function () {
    $page = $('.full-page');
    image_src = $page.data('image');

    if (image_src !== undefined) {
      image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
      $page.append(image_container);
    }
  },

  initDashboardPageCharts: function () {
  },

  initMinimizeSidebar: function () {

    $('#minimizeSidebar').click(function () {
      var $btn = $(this);

      if (md.misc.sidebar_mini_active == true) {
        $('body').removeClass('sidebar-mini');
        md.misc.sidebar_mini_active = false;
      } else {
        $('body').addClass('sidebar-mini');
        md.misc.sidebar_mini_active = true;
      }

      var simulateWindowResize = setInterval(function () {
        window.dispatchEvent(new Event('resize'));
      }, 180);

      setTimeout(function () {
        clearInterval(simulateWindowResize);
      }, 1000);
    });
  },

  checkScrollForTransparentNavbar: debounce(function () {
    if ($(document).scrollTop() > 260) {
      if (transparent) {
        transparent = false;
        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
      }
    } else {
      if (!transparent) {
        transparent = true;
        $('.navbar-color-on-scroll').addClass('navbar-transparent');
      }
    }
  }, 17),


  initRightMenu: debounce(function () {
    $sidebar_wrapper = $('.sidebar-wrapper');
  }, 200),

  startAnimationForLineChart: function (chart) {

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  },
  startAnimationForBarChart: function (chart) {

    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  },


  initFullCalendar: function () {
    $calendar = $('#fullCalendar');

    today = new Date();
    y = today.getFullYear();
    m = today.getMonth();
    d = today.getDate();

    $calendar.fullCalendar({
      viewRender: function (view, element) {
        if (view.name != 'month') {
          $(element).find('.fc-scroller').perfectScrollbar();
        }
      },
      header: {
        left: 'title',
        center: 'month,agendaWeek,agendaDay',
        right: 'prev,next,today'
      },
      defaultDate: today,
      selectable: true,
      selectHelper: true,
      views: {
        month: {
          titleFormat: 'MMMM YYYY'
        },
        week: {
          titleFormat: " MMMM D YYYY"
        },
        day: {
          titleFormat: 'D MMM, YYYY'
        }
      },

      select: function (start, end) {

        swal({
          title: 'Create an Event',
          html: '<div class="form-group">' +
            '<input class="form-control" placeholder="Event Title" id="input-field">' +
            '</div>',
          showCancelButton: true,
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false
        }).then(function (result) {

          var eventData;
          event_title = $('#input-field').val();

          if (event_title) {
            eventData = {
              title: event_title,
              start: start,
              end: end
            };
            $calendar.fullCalendar('renderEvent', eventData, true);
          }

          $calendar.fullCalendar('unselect');

        })
          .catch(swal.noop);
      },
      editable: true,
      eventLimit: true,

      events: [{
        title: 'All Day Event',
        start: new Date(y, m, 1),
        className: 'event-default'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d - 4, 6, 0),
        allDay: false,
        className: 'event-rose'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: new Date(y, m, d + 3, 6, 0),
        allDay: false,
        className: 'event-rose'
      },
      {
        title: 'Meeting',
        start: new Date(y, m, d - 1, 10, 30),
        allDay: false,
        className: 'event-green'
      },
      {
        title: 'Lunch',
        start: new Date(y, m, d + 7, 12, 0),
        end: new Date(y, m, d + 7, 14, 0),
        allDay: false,
        className: 'event-red'
      },
      {
        title: 'Md-pro Launch',
        start: new Date(y, m, d - 2, 12, 0),
        allDay: true,
        className: 'event-azure'
      },
      {
        title: 'Birthday Party',
        start: new Date(y, m, d + 1, 19, 0),
        end: new Date(y, m, d + 1, 22, 30),
        allDay: false,
        className: 'event-azure'
      },
      {
        title: 'Click for Creative Tim',
        start: new Date(y, m, 21),
        end: new Date(y, m, 22),
        url: 'http://www.creative-tim.com/',
        className: 'event-orange'
      },
      {
        title: 'Click for Google',
        start: new Date(y, m, 21),
        end: new Date(y, m, 22),
        url: 'http://www.creative-tim.com/',
        className: 'event-orange'
      }
      ]
    });
  },

  initVectorMap: function () {
    var mapData = {
      "AU": 760,
      "BR": 550,
      "CA": 120,
      "DE": 1300,
      "FR": 540,
      "GB": 690,
      "GE": 200,
      "IN": 200,
      "RO": 600,
      "RU": 300,
      "US": 2920,
    };

    $('#worldMap').vectorMap({
      map: 'world_mill_en',
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: '#e4e4e4',
          "fill-opacity": 0.9,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },

      series: {
        regions: [{
          values: mapData,
          scale: ["#AAAAAA", "#444444"],
          normalizeFunction: 'polynomial'
        }]
      },
    });
  }
}

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};