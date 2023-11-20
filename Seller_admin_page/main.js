const priceInput = document.getElementById('price');
const productInput = document.getElementById('product');
const categoryInput = document.getElementById('category');
const addBtn = document.getElementById('add-product');
const electronicsItems = document.getElementById('electronicsItems');
const fashionItems = document.getElementById('fashionItems');
const beautyItems = document.getElementById('beautyItems');
const groceryItems = document.getElementById('groceryItems');
const jewelleryItems = document.getElementById('jewelleryItems');
const babyItems = document.getElementById('babyItems');
const furnitureItems = document.getElementById('furnitureItems');
const booksItems = document.getElementById('booksItems');
const gymItems = document.getElementById('gymItems');


addBtn.addEventListener('click', function() {
    const myObj = {
        price: priceInput.value,
        product: productInput.value,
        category: categoryInput.value
    }

    if(isNaN(myObj.price) || myObj.price <= 0){
        alert("please enter correct price");
    }
    if(myObj.product === ""){
        alert("please enter a product name");
    }
    if(myObj.category === ""){
        alert("please select a category");
    }

    postDataToCrudCrud(myObj);
    priceInput.value = "";
    productInput.value ="";
    categoryInput.value = "";
})

const createElement = (user) => {
    const li = document.createElement('li');
    li.className = 'list-group';
    li.id = user._id;
    li.innerText = `${user.price} -> ${user.product} -> ${user.category} `;
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    deleteBtn.appendChild(document.createTextNode('Delete Product'));
    li.append(deleteBtn);
    switch(user.category){
        case "Electronics":
            electronicsItems.appendChild(li);
            break;
        case "Fashion":
            fashionItems.appendChild(li);
            break;
        case "Beauty Products":
            beautyItems.appendChild(li);
            break;
        case "Groceries":
            groceryItems.appendChild(li);
            break;
        case "Jewellery":
            jewelleryItems.appendChild(li);
            break;
        case "Baby Product":
            babyItems.appendChild(li);
            break;
        case "Furniture":
            furnitureItems.appendChild(li);
            break;
        case "Books":
            booksItems.appendChild(li);
            break;
        case "Gym Equipments":
            gymItems.appendChild(li);
            break;
    }
    deleteItem(deleteBtn, user, li);
}

const deleteItem = (deleteBtn, user , li) => {
    deleteBtn.onclick = () => {
        if(confirm('Are You Sure?')){
            switch(user.category){
                case "Electronics":
                    electronicsItems.removeChild(li);
                    break;
                case "Fashion":
                    fashionItems.removeChild(li);
                    break;
                case "Beauty Products":
                    beautyItems.removeChild(li);
                    break;
                case "Groceries":
                    groceryItems.removeChild(li);
                    break;
                case "Jewellery":
                    jewelleryItems.removeChild(li);
                    break;
                case "Baby Product":
                    babyItems.removeChild(li);
                    break;
                case "Furniture":
                    furnitureItems.removeChild(li);
                    break;
                case "Books":
                    booksItems.removeChild(li);
                    break;
                case "Gym Equipments":
                    gymItems.removeChild(li);
                    break;
            }
        }
        deleteData(user._id);
    }
}

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

const postDataToCrudCrud = (myObj) => {
    axios.post('https://crudcrud.com/api/a0ef0920d9e044e78235424d5cc713a4/sellersProductsData', myObj)
      .then((res) => {
        createElement(res.data);
      })
      .catch((err) => console.log(err));
}

const deleteData = (id) => {
    axios.delete(`https://crudcrud.com/api/a0ef0920d9e044e78235424d5cc713a4/sellersProductsData/${id}`)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
}

const printAllData =() => {
    axios.get('https://crudcrud.com/api/a0ef0920d9e044e78235424d5cc713a4/sellersProductsData')
        .then((res) => {
            res.data.forEach(element => {
                createElement(element);
            });
        })
        .catch((err) => console.log(err));
}
printAllData();
