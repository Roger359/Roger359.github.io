/// WorkAround
/// WorkAround is a human resources program that returns basic information about an employee,
/// based on salary data. Using WorkAround, one can use an employee’s salary data to:
/// 
/// return the cadre of the of the employee, in other words, whether this employee is entry level, mid level, or senior level.
/// calculate employee tax rates
/// return employee benefits
/// calculate employee bonuses
/// calculate the total amount an employee can be reimbursed based on the total value of their health, housing, or wellness benefits

/// Metodo export default using function like propertys of employee
let Employee = {
  salary:100000
}

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};
// declartion of the function like property
Employee.getCadre = function(){
if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

Employee.calculateTax = function(){
return payGrades[Employee.getCadre()].taxMultiplier * Employee.salary;
}


Employee.getBenefits = function () {
  return payGrades[Employee.getCadre()].benefits.join(', ');
}

Employee.calculateBonus = function () {
  return .02 * Employee.salary;
}

Employee.reimbursementEligibility = function() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[Employee.getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export default Employee;