//let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"

// 
switch (day.trim().charAt(0).toUpperCase()+day.trim().slice(1)){
    case "Friday":
         console.log("No Appointments Available")
    break;
    case "Saturday":
         console.log("No Appointments Available")
    break;
    case "Sunday":
         console.log("No Appointments Available")
    break;
    case "Monday":
         console.log("From 10:00 AM To 5:00 PM")
    break;
    case "Thursday":
         console.log("From 10:00 AM To 5:00 PM")
    break;
    case "Tuesday":
         console.log("From 10:00 AM To 6:00 PM")
    break;
    case "Wednesday":
         console.log("From 10:00 AM To 7:00 PM")
    break;
    default:
        console.log("Its Not A Valid Day")
}

console.log(day.trim().charAt(0).toUpperCase()+day.trim().slice(1));

let job = "Manager"
let salary = 0;

switch (job){

     case "Manager" :
          salary = salary + 8000;
          console.log(`${salary}`)
     break;
     case "IT" || "Support":
          salary = salary + 6000;
          console.log(`${salary}`)
     break;
     case "Developer" || "Designer" :
          salary += 7000;
          console.log(`${salary}`)
     break;
      default:
          salary += 4000;
          console.log(`${salary}`)
}

let holidays = 0;
let money = 0;

if(holidays === 0){
     money += 5000;
     console.log(` my money is ${money}`);
}else 
if(holidays === 1 || holidays === 2){
     money += 3000;
     console.log(` my money is ${money}`);
}else 
if(holidays === 3){
     money += 2000;
     console.log(` my money is  ${money}`);
}else{
     money += 1000;
     console.log(` my money is  ${money}`);
}