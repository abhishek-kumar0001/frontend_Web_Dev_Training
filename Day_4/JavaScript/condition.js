// if else
let markPercent = 75;
if(markPercent >= 80){
    console.log("Grade A+");
}
else if(markPercent >= 60 && markPercent < 80){
    console.log("Grade A");
}
else if(markPercent >= 45 && markPercent < 60){
    console.log("Grade B");
}
else if(markPercent >= 30 && markPercent < 45){
    console.log("Grade C");
}
else{
    console.log("Fail!");
}

// switch case
let dayNum = 7;
switch (dayNum) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thirsday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
            console.log("Sunday");
            break;
    default:
        console.log("Invalid Day");
}