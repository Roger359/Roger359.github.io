const getSleepHours = day => {
    if(day === "monday"){
      return 8;
    }else if(day === "tuesday"){
      return 7;
    }else if(day === "wednesday"){
      return 6;
    }else if(day === "thursday"){
      return 10;} 
    else if(day === "friday"){
      return 8;}
    else if(day === "saturday"){
      return 8;}
    else if(day === "sunday"){
      return 6;}
  };
  const getActualSleepHours = () => {
  return 9 + 
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
  
  console.log( "Total de Horas que deberia dormir  " + getIdealSleepHours()); 
  
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours){
      console.log("The user got the perfect amount of sleep");
    }else if(actualSleepHours > idealSleepHours){
      console.log("User Got more sleep than needed");
    }else if(actualSleepHours < idealSleepHours){
      console.log("You got " + (idealSleepHours - actualSleepHours) + "hour(s) less sleep than you needed this week. Get more rest");
    }
  };
  
  
  getIdealSleepHours();
  calculateSleepDebt();