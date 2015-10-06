var count = 0;
var hungryHobbit = document.createElement("button");
function eat(){
  hungryHobbit.textContent = "I've had "+count+" meals today";
  count++;
}
hungryHobbit.onclick = eat;
eat();
document.getElementById("tiny").appendChild(hungryHobbit);