

function writeCards(names, event) {
  const newMessages = [];
  for (let i = 0; i < names.length; i++) {
    newMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return newMessages;
}

function countDown(number) {
  while (number >= 0) {
  console.log(number --)
  }
}
countDown(5)