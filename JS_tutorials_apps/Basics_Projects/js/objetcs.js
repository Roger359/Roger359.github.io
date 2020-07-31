let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
// Function to modify objects 
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}
// function to create new properties to objects
let remotelyDisable = obj => {

  obj.disabled = true
}
greenEnergy(spaceship)
remotelyDisable(spaceship)
console.log(spaceship)

// for.. in  example
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below
// for in 
for (let crewRols in spaceship.crew) {
console.log(`${crewRols}: ${spaceship.crew[crewRols].name}`) 
}
for (let crewName in spaceship.crew){
console.log(`${spaceship.crew[crewName].name}: ${spaceship.crew[crewName].degree}`)
}

// This Keyword Example
const robot = {
  model:'1E78V2',
  energyLevel: 100,
  provideInfo(){
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  } 
};

console.log(robot.provideInfo())

// getter method example
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){

    let value =  typeof this._energyLevel
    console.log(value)
    if(value === 'number') {
      return `My current energy level is ${this._energyLevel}`;
      
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
}
console.log(robot.energyLevel)

// Set method Example
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num)     {
  if(typeof num === 'number' && num >= 0) {    
  this._numOfSensors = num
    } else {
    return 'Pass in a number that is greater than or equal to 0'
    } 
  }  
};
robot.numOfSensors = 100
console.log(robot.numOfSensors)

// funtion Factory Example
let robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop')
    }
  } 
  }
  const tinCan = robotFactory('P-500',true)
  tinCan.beep()

  // Property Value Shorthand example 
  function robotFactory(model, mobile){
    return {
      model, // changed from model: model
      mobile,// exacly the same in superior line
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

  // Destructured Assignment example

  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const {functionality} = robot 
  functionality.beep()

  // Built-in Object Methods Examples
  const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
  };
  
  // What is missing in the following method call?
  const robotKeys = Object.keys(robot);
  // he Object.keys() method returns an array of a given object's own enumerable property names, 
  // iterated in the same order that a normal loop would.
  console.log(robotKeys);
  
  // Declare robotEntries below this line:
  const robotEntries = Object.entries(robot)
  // The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
  // in the same order as that provided by a for...in loop. 
  // (The only important difference is that a for...in loop enumerates properties in the prototype chain as well). 
  console.log(robotEntries);
  
  // Declare newRobot below this line:
  // The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.
  // It returns the target object.
  const newRobot = Object.assign({robot}, {laserBlaster: true, voiceRecognition: true})
  
  console.log(newRobot);