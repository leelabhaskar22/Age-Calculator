const currentDate1 = new Date();
console.log(currentDate1);
const currentDate2 = new Date();
const currentYear = currentDate2.getFullYear();
console.log(currentYear);
const currentDate = new Date();
const currentMonth = currentDate1.getMonth(String);
const todaydate=currentDate.getDate();
console.log(currentMonth);
//Days in month
const getDays = (year, month) => {
  return new Date(year, month, 0).getDate();
};

//leapyears counting
function LeapYears(startYear, endYear) {
  let leapYears = [];
for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    leapYears.push(year);
  }
}
return leapYears;
}
console.log(currentMonth)
//main calculation
function calculate() {
var year = document.getElementById("year").value;
var monthh = document.getElementById("month").value;
var date = document.getElementById("date").value; 
const leapYears = LeapYears(year,currentYear);
leapcount = leapYears.length;
var date2 = getDays(year,monthh) - date + 1;
console.log(date2)
    var age = (currentYear - year) -1;
    //console.log(age); 
    const month1 = (12 - monthh) ;
    const month = ((12 * age) + currentMonth) + month1;
    //console.log(month + 1)
    const date1 = getDays(currentYear,(currentMonth+1) );
    //console.log(date1)
    const day=((month-age)*30) + (age*28) + (age * 7) + leapcount + date1 - date2  ;
    //console.log(day)
    const hours = (day * 24);
    //console.log(hours)
    const min = (hours * 60);
    //console.log(min)
    const second =(min * 60);
    //console.log(second)
    tolmon=month ;

    document.getElementById("yearr").innerHTML = age;
    document.getElementById("mon").innerHTML = tolmon;
    document.getElementById("dayy").innerHTML = day;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("mini").innerHTML = min;
    document.getElementById("sec").innerHTML = second;
    
   /* const width = document.getElementById("width").value;
    const area = length * width;
    document.getElementById("result").innerHTML = `The area of the rectangle is ${area} square units.`;*/
  }
  