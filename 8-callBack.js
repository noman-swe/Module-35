function welcomeMessage(name, greetHandler) { 
    // console.log(typeof(name));
    // console.log(name);
    greetHandler(name);
}
const names = ['Hom Hanks', 'Shibly', 'Shanto'];
const namesObj = {name:'Hom Hanks', title:'Shibly', wife:'Shanto'};

function greetMorning(name){
    console.log('Good Morning', name);
}
// evening
function greetEvening(name){
    console.log('Good Evening', name);
}

welcomeMessage('Shibly', greetMorning);
welcomeMessage('Shanto', greetEvening);

// welcomeMessage(names);
// welcomeMessage(namesObj);

// kono ekta function er perameter hisheb e jodi onno-kono ekta function k pathano hoy and trpor vitor theke call kora hoy tailei sei ta  callBack function