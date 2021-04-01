const input = document.querySelector("input");
const ul = document.querySelector(".todo-container");
const btn = document.querySelector("button");

 
btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = input.value;
    span.classList.add("spanclass");
    const input_ul= document.createElement('input');
    input_ul.setAttribute("disabled", "disabled");
    input_ul.classList.add("input-ul-class");
    const div = document.createElement('div');
    const doneButton = document.createElement("button");
    doneButton.classList.add("done");
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    const saveButton = document.createElement("button");
    saveButton.classList.add("save");
    saveButton.setAttribute("hidden","hidden");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    doneButton.textContent = "Done";
    editButton.textContent = "Edit";
    saveButton.textContent = "Save";
    deleteButton.textContent = "Delete";
    div.append(input_ul);
    li.append(span);
    div.append(doneButton); 
    div.append(editButton);
    div.append(saveButton);
    div.append(deleteButton);
    div.setAttribute("hidden","hidden");
    li.append(div);
    ul.appendChild(li);
    input.value = "";

  saveButton.addEventListener('click', () => {
      save(li)
     
     });

  span.addEventListener("click", ()=>{liClick(li)
    
    });

  editButton.addEventListener('click', () => {
      edit(li);
   });
   

  deleteButton.addEventListener('click', () => {
     deleteLi(li);
     });

     doneButton.addEventListener('click', () => {
      doneTask(li);
     });
  }
});
    
function liClick(element)  {
  
    const span = element.getElementsByClassName("spanclass")[0];
    const div = element.getElementsByTagName("div")[0];
    
    if(div) {
      span.setAttribute("hidden","hidden");
      div.removeAttribute("hidden");
      const input = element.getElementsByClassName("input-ul-class")[0];
      input.value = span.textContent;
    }
    
    

}

function save(element) {
  let span = element.getElementsByTagName("span")[0];
  span.removeAttribute("hidden");
  let input = element.getElementsByTagName("input")[0];
  span.textContent = input.value;
  const div = element.getElementsByTagName("div")[0];
  div.setAttribute("hidden","hidden");
  let editButton = element.getElementsByClassName("edit")[0];
  let saveButton = element.getElementsByClassName("save")[0];
  saveButton.setAttribute("hidden","hidden");
  editButton.removeAttribute("hidden");
  let input_ul = element.getElementsByClassName("input-ul-class")[0];
  input_ul.setAttribute("disabled","disabled");
  let doneButton = element.getElementsByClassName("done")[0];
  let deleteButton = element.getElementsByClassName("delete")[0];
  doneButton.removeAttribute("disabled");
  deleteButton.removeAttribute("disabled");


}

function edit(element) {
  let editButton = element.getElementsByClassName("edit")[0];
  let saveButton = element.getElementsByClassName("save")[0];
  let input_ul = element.getElementsByClassName("input-ul-class")[0];
  editButton.setAttribute("hidden","hidden");
  saveButton.removeAttribute("hidden");
  input_ul.removeAttribute("disabled");
  let doneButton = element.getElementsByClassName("done")[0];
  let deleteButton = element.getElementsByClassName("delete")[0];
  doneButton.setAttribute("disabled","disabled");
  deleteButton.setAttribute("disabled","disabled");
}   

 function deleteLi(element){
   ul.removeChild(element);
   
}  

 function doneTask(element){
  let span = element.getElementsByTagName("span")[0];
  span.style.textDecoration = ' line-through';
  const div = element.getElementsByTagName("div")[0];
  element.removeChild(div);
  span.removeAttribute("hidden");
  span.style.cursor = "default";
  
 
 }