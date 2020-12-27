
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
  for (let x = 0; x < 42; x++) {

    $(".day").append(`<div class="">${x}</div>`);
  }
}
