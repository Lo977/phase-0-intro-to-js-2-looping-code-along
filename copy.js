

function writeCards(names, event) {
    let newArr = []
    for (let i = 0; i < names.length; i ++) {
     newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`) ;
    }
    return newArr
   }
   
   function countDown (i) {
     while (i >= 0){
     console.log(i);
     i --;
   }
   }
   
   console.log(countDown(6));