// Code your solutions in this file

function writeCards(names,event) {
  const message = [];

  for (let i = 0; i < names.length; i++) {
    message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    debugger;
  }

  return message;
}

function countDown(count) {
  while(count!== -1) {
    console.log(count)
    count--;
  }
  return count;
}