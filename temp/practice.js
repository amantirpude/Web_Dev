let itemList = document.getElementById("items");
let form = document.getElementById("add-form");
    
form.addEventListener('button', onsignup);
itemList.addEventListener("click",removeItem);
let myObj_Ser;
function onsignup(event){
    event.preventDefault();
    // console.log(event.target.name.value);
    // console.log(event.target.email.value);
    // console.log(event.target.phone.value);
    // console.log(event.target.date.value);
    // console.log(event.target.time.value);
    let myObj = {
        name: event.target.name.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        date: event.target.date.value,
        time: event.target.time.value
    }
    myObj_Ser = JSON.stringify(myObj);
    localStorage.setItem(event.target.email.value, myObj_Ser);
    

    //Add Item
    // console.log(newItem);
    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    let print = myObj.name + "->" + myObj.email + "->" + myObj.phone + "->" + myObj.date + "->" + myObj.time;
    li.appendChild(document.createTextNode(print));
    itemList.appendChild(li);

    // Create del button element
    let deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.onclick = () =>{
      localStorage.removeItem(myObj.email);
    }

    //Create Edit Button
    let editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.onclick = () =>{
      let itemName = document.getElementById("name");
      itemName.value = myObj.name;
      let itemEmail = document.getElementById("email");
      itemEmail.value = myObj.email;
      let itemPhone = document.getElementById("phone");
      itemPhone.value = myObj.phone;
      localStorage.removeItem(myObj.email);
    }

    li.appendChild(editBtn);
    
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
    if(e.target.classList.contains('edit')){
      if(confirm('Are You Sure?')){
        let li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }