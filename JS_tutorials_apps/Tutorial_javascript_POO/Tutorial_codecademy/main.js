// // Ejemplo de Clases y Instancias 

// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }
//   get name(){
//     return this._name
//   }
//   get department(){
//     return this._department
//   }
//   get remainingVacationDays(){
//     return this._remainingVacationDays
//   }
//   takeVacationDays(daysOff){
//     this._remainingVacationDays  = this._remainingVacationDays  - daysOff
//   }
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');
// console.log(surgeonCurry.name)
// surgeonCurry.takeVacationDays(3)
// console.log(surgeonCurry.remainingVacationDays)


/// Segundo Ejemplo de Herancia Parent Class to Subclasess
// PARENT CLASS
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){
    return Math.floor(Math.random()*10000)
 }
}
// SUBCLASS NURSE
class Nurse extends HospitalEmployee {
  constructor(name,certifications){
    super(name,certifications)
    this._certifications = certifications;
  }
  get certifications(){
    return this._certifications
  }
  addCertification(newCertification){
    this._certifications.push(newCertification)
  }
}
///
class Doctor extends HospitalEmployee {
  constructor(name,insurance){
    super(name);
    this._insurance = insurance;

  }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics'])
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays)
nurseOlynyk.addCertification('Genetics')
console.log(nurseOlynyk.certifications)