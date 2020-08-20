class School {
  constructor(name,level,numberOfStudents){
  this._name = name;
  this._level = level;
  this._numberOfStudents =  numberOfStudents; 
  }
  get name(){
    return this._name;
  }
  get level(){
    return this._level;
  }
  get numberOfStudents(){
    return this._numberOfStudents;
  }
  set numberOfStudents(newNumberOfStudents){
    if(typeof newNumberOfStudents === 'number'){
      this._numberOfStudents = newNumberOfStudents
      // console.log(newNumberOfStudents)
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.')
    }
  }
  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  static pickSubstituteTeacher(substituteTeachers){
    const substituteTeachersRandom = Math.floor(substituteTeachers.length * Math.random());
    return substituteTeachers[substituteTeachersRandom];
  }
  
}

class PrimarySchool extends School {
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._averageTestScores = []
  }
  get pickupPolicy(){
    this._pickupPolicy;
  }
  get averageTestScores(){
    return this._averageTestScores;
  }
  addTestScore(score){
    this._averageTestScores.push(score)
  }
  schoolAverage(){
    return this._averageTestScores.reduce((a,b) => a + b) / this._averageTestScores.length;
    
  }
}
class Middle extends School{
  constructor(name,numberOfStudents,averageTestScores){
    super(name,'middle',numberOfStudents);
    this._averageTestScores = [];
  }
  get averageTestScores(){
    return this._averageTestScores;
  }
  addTestScore(score){
    this._averageTestScores.push(score)
  }
  schoolAverage(){
    return this._averageTestScores.reduce((a,b) => a + b) / this._averageTestScores.length;
    
  }
}
class HighSchool extends School {
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams = sportsTeams;
    this._averageTestScores = [];
  }
  get sportsTeams(){
    return console.log(this._sportsTeams);
  }
  addTestScore(score){
    this._averageTestScores.push(score)
  }
  schoolAverage(){
    return this.averageTestScores.reduce((a,b) => a + b) / this.averageTestScores.length;
    
  }
} 

class Catalog {
  constructor(schoolOverview){
  this._MyCatalog = [schoolOverview];
 }

get schoolOverview() {
   return this._schoolOverview;
}

set schoolOverview(newschoolOverview)  {
 this._MyCatalog.push(newschoolOverview);
 }
}
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
const RogerAcosta = new HighSchool('Roger Acosta',600)
const DariPiñeiro = new Middle('Darianela Piñeiro', 500, 'Parents can take childrens from school')

lorraineHansbury.addTestScore(90);
lorraineHansbury.addTestScore(85);
lorraineHansbury.addTestScore(75);
lorraineHansbury.addTestScore(90);

console.log(lorraineHansbury.averageTestScores);
console.log(lorraineHansbury.schoolAverage());

// lorraineHansbury.quickFacts()
// const subTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])

// const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
// alSmith.sportsTeams



const Test = new Catalog();
Test.schoolOverview = lorraineHansbury;
Test.schoolOverview = RogerAcosta;
Test.schoolOverview = DariPiñeiro;


console.log(Test)