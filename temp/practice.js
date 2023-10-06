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
    let myObj_Ser = JSON.stringify(myObj);
    localStorage.setItem(event.target.email.value, myObj_Ser);

    let itemList = document.getElementById("items");
    let form = document.getElementById("add-form");
    //Add Item
    // console.log(newItem);

    form.addEventListener("button",onsignup);
    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    let print = myObj.name + "->" + myObj.email + "->" + myObj.phone + "->" + myObj.date + "->" + myObj.time;
    li.appendChild(document.createTextNode(print));
    itemList.appendChild(li);

}
