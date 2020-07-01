/**
 * As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.
 * 
 */

// The scope of `random` is too loose 

// const random = Math.floor(Math.random() * 3);

const getRandomEvent = () => {

  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  let days
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// The scope of `name` is too tight 

const logEvent = event => {
  const name = 'Roger';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Roger';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandomEvent()
const days = getTrainingDays(event);
const name = 'Roger';

// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

logEvent(event);
logTime(days);

// 