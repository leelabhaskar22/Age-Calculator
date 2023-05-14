const currentDate1 = new Date();
console.log(currentDate1);
const currentDate2 = new Date();
const currentYear = currentDate2.getFullYear();
console.log(currentYear);
const currentDate = new Date();
const currentMonth = currentDate1.getMonth(String);
const todaydate=currentDate.getDate();
//NO of Days in month(30 or 31)
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
//main calculation
function calculate() {
var year = document.getElementById("year").value;
var monthh = document.getElementById("month").value;
var date = document.getElementById("date").value; 
const leapYears = LeapYears(year,currentYear);
leapcount = leapYears.length;
    var age = (currentYear - year) - 1;
    const month1 = (12 - monthh );
    const month = ((12 * age) + currentMonth) + month1;
    const day1 = ((18-leapcount)*365)+(366*leapcount)
    birthyear_days=0;
    currentyear_days=0;
    //calc Days in birthyear
    for(i=monthh;i<=12;i++){
        birthyear_days=getDays(year,i) + birthyear_days
    }
    birthyear_days=birthyear_days-date
    //calc Days in currentyear
    for(i=1;i<=currentMonth;i++){
        currentyear_days=getDays(currentYear,i) + currentyear_days
    }
    day=currentyear_days+birthyear_days + todaydate -1 + day1;
    const hours = (day * 24);
    const min = (hours * 60);
    const second =(min * 60);
    tolmon=month ;
    document.getElementById("text").innerHTML = "<span style=font-size:20px ;    display: inline-block; width: 100px;text-align: right;   padding-right: 5%;>Your age in </span>";
    document.getElementById("yearr").innerHTML = `<span style="color: #db3434;">Years</span> : ${age}`;
    document.getElementById("mon").innerHTML = `<span style="color: #db3434;">Months</span> :  ${tolmon}`
    document.getElementById("dayy").innerHTML = `<span style="color: #db3434;">Days</span> :   ${day}`;
    document.getElementById("hour").innerHTML = `<span style="color: #db3434;">Hours</span> :${hours}`;
    document.getElementById("mini").innerHTML = `<span style="color: #db3434;">Minutes</span> :${min} `
    document.getElementById("sec").innerHTML = `<span style="color: #db3434;">Seconds</span> ${second}`;
  }
    
