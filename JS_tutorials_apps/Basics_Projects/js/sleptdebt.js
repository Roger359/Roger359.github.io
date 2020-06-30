/**
 * 
 *  The program will determine the actual and ideal hours of sleep for each night of the last week.
 */
let monday    = parseInt(prompt('Cuanto duermes el lunes?'))
let tuesday   = parseInt(prompt('Cuanto duermes el martes?'))
let wednesday = parseInt(prompt('Cuanto duermes el miercoles?'))
let thursday  = parseInt(prompt('Cuanto duermes el jueves?'))
let friday    = parseInt(prompt('Cuanto duermes el viernes?'))
let saturday  = parseInt(prompt('Cuanto duermes el sabado?'))
let sunday    = parseInt(prompt('Cuanto duermes el domingo?'))



const getSleepHours = day => {

  if (day === "monday") {
    return monday;
  } else if (day === "tuesday") {
    return tuesday;
  } else if (day === "wednesday") {
    return wednesday;
  } else if (day === "thursday") {
    return thursday;
  } else if (day === "friday") {
    return friday;
  } else if (day === "saturday") {
    return saturday;
  } else if (day === "sunday") {
    return sunday;
  }
};
const getActualSleepHours = () => {
  return 9 +
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

};


const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
console.log("Total de horas dormidas actualmente: " + getActualSleepHours());

console.log("Total de Horas que deberia dormir  " + getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("The user got the perfect amount of sleep");

  } else if (actualSleepHours > idealSleepHours) {
    console.log("User Got more sleep than needed");

  } else if (actualSleepHours < idealSleepHours) {
    console.log("You got " + (idealSleepHours - actualSleepHours) + "hour(s) less sleep than you needed this week. Get more rest");
  }
};


getIdealSleepHours();
calculateSleepDebt();