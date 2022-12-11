let username = "my name";
let bonusBalance = 1000;

console.log ( "Пользователь " + username)
console.log ("Баланс " + bonusBalance)

let plusBalance = 50;
let eraseBalance = 3;

let buy = 4;
let notBuy = 3;

bonusBalance = bonusBalance + (plusBalance * buy) - (eraseBalance * notBuy);

console.log (bonusBalance); 




//const text = 'Never forget what you are, for surely the world will not';
//const textFinal = `First: ${text[0]}\nLast: ${text[length(text) -1]}`;
// BEGIN (write your solution here)
//console.log(`First: ${text[length(text) 0]}`);
//console.log(`Last: ${text[length(text) -1]}`);
//console.log(textFinal);
// END

// const text = 'Never forget what you are, for surely the world will not';
// 
// // BEGIN
// const result = `First: ${text[0]}\nLast: ${text[length(text) - 1]}`;
// console.log(result);
// // END

let messages = ['Привет', "Здорово, коль не шутишь", "Пойдем гулять в парк?",
"Кажется, дождь собирается. Лучше пойдем в кино!",
"Давай, сегодня как раз вышел новый фильм.",
"Встречаемся через час у кинотеатра."]
let search = 'кино';
for (let i = 0; i < messages.length; i += 1) {
  if (i % 2 === 0) {
    console.log ('Друг: ' + messages[i]);
  }
  else {
    console.log("Я: " + messages[i])
  }
  
}


for (let i = 0; i < messages.length; i += 1) {
if (messages[i].includes(search)) {
  console.log(messages[i]);
}
}