
let viewDate = new Date();
let currentDate = new Date();
let month = currentDate.getMonth();
let year = currentDate.getFullYear();
var FirstDay = new Date(year, month, 1);
var LastDay = new Date(year, month + 1, 0);
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
  update();
  $(function(){

  $("#left").on('click', function() {
    if (month == 0) {
      month = 11;
    }
    else {
      month = --month;

    }
    update();

  });
  $("#right").on('click', function() {
    if (month == 11) {
      month = 0;
    }
    else {
      month = ++month;
    }
    update();
  });

});
function update() {
  $(".date div").html(viewDate.getFullYear() + " | " + months[month]);
  let days = "";

for (let x = firstDayIndex; x > 0; x--) {
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
}

for (let i = 1; i <= lastDay; i++) {
  if (
    i === new Date().getDate() &&
    date.getMonth() === new Date().getMonth()
  ) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`;
  }
}

for (let j = 1; j <= nextDays; j++) {
  days += `<div class="next-date">${j}</div>`;
  monthDays.innerHTML = days;
}
};

}
