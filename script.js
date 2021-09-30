let score = 0;
for(let q=1;q<=5;q++){
  const x = Math.ceil(Math.random()*12);
  const y = Math.ceil(Math.random()*12);

  const response = prompt(`What is ${x} multiplied by ${y}?`);

  if(Number(response) === x*y){
    alert('Correct! Well done.');
    score ++;
  } else {
    alert(`Wrong! The correct answer is ${x*y}`);
  }
}
alert(`Game Over! You got ${score} questions correct.`);
