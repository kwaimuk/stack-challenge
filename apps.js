
/* add event listener during input



*/


var linkedList = linkedListGenerator();

console.log(linkedList);
//it will bring in text from textbox to add function
save.addEventListener('click',function(event){
  var input = document.getElementById("input").value;
  //test to see if input is working with save button
  console.log(input);

  linkedList.add(input);
  console.log(linkedList.getHead());
 });

//it will display the inputs
// dump.addEventListener('click',function(event){
// get;
//  });