// const ul = document.querySelector('.item1');
// ul.style.color = "Green";
// const u2 = document.querySelector('.item2');
// u2.style.color = "Yellow";

// const btn1 = document.querySelector('.btn1');
// btn1.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
// });

// const btn2 = document.querySelector('.btn2');
// btn2.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     console.log('mouseover');
// });

// const btn3 = document.querySelector('.btn3');
// btn3.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     console.log('mouseout');
// });
function onsignup(event){
    event.preventDefault();
    // var name = event.target.name.id;
    // var email = event.target.email.id
    // localStorage.setItem("name", event.target.name.value);
    // console.log(localStorage.getItem("name"));
    // localStorage.setItem("email", event.target.email.value);
    // console.log(localStorage.getItem("email"));
    // console.log(event.target.name.id);

    let myObj = {
        name: event.target.name.value,
        email: event.target.email.value
    };

    let myObj_ser = JSON.stringify(myObj);
    localStorage.setItem("myObj",myObj_ser);
    console.log(myObj);
}

        