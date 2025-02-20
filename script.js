const today = new Date();
const day = today.getDay();
const dailLisT = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Q = `This is: ${dailLisT[day]}. `
document.body.append(Q)


// this is displa time
const hourse = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();


const prepand = (hourse >= 12) ? "PM" : "AM";
hourse = (hourse >= 12) ? hourse - 12 : hourse;

if(hourse === 0 && prepand === "PM"){
    if(minute === 0 && second === 0){
        hourse = 12;
        prepand = "Noon";
    }else{
        hourse = 12;
        prepand = "PM"
    }
}

if(hourse === 0 && prepand === "AM"){
    if(minute === 0 && second === 0){
        hourse = 12;
        prepand = "Minight";
    }else{
        hourse = 12;
        prepand = "AM";
    }
}

document.body.innerHTML = `This is Curret: ${hourse} ${prepand} and ${minute} : ${second}`

