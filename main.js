let form = document.querySelector("#todo-form");
let ul = document.querySelector("#todo-list");

const runEvent = (e) => {
        e.preventDefault();
        let name = document.querySelector("#name").value;
        let phone = document.querySelector("#phone").value;
        let relation = document.querySelector("#relation").value;


        let li = document.createElement("li");
        li.className = "list-group-item"
        li.innerText = `Name: ${name}\nPhone: ${phone}\nRelation: ${relation}`;
        // ul.appendChild(li)

        // delete button
        let btn = document.createElement("button")
        btn.className = "btn btn-danger btn-sm w-25 float-end";
        btn.innerText = "delete"
        li.appendChild(btn)
        
   
        // whatsapp now button

    let btnWhatsApp = document.createElement("a");
    btnWhatsApp.className = "btn btn-success btn-sm w-25  ml-2";
    btnWhatsApp.innerText = "WhatsApp Now";
    btnWhatsApp.href = `https://wa.me/+91${phone}`;
    btnWhatsApp.target = "_blank"; // Open link in new tab
    li.appendChild(btnWhatsApp);


//     call now button
    let callNow = document.createElement("a");
    callNow.className = "btn btn-primary btn-sm w-25 ml-2";
    callNow.innerText = "Call Now";
    callNow.href = `tel:${phone}`;
    li.appendChild(callNow);



    ul.appendChild(li);
    form.reset();
        

}
form.addEventListener("submit",runEvent);


const removetudo = (e) =>{
        if (e.target.classList.contains('btn-danger')) {
                let li = e.target.parentElement;
                ul.removeChild(li);
    
    }
    }
        ul.addEventListener("click",removetudo);



        // dark light mode button
let body = document.querySelector('body')
let mode = document.createElement("button");
mode.className = "btn btn-warning bbtn-sm  mt-5 w-20 ml-2 float-end;";
mode.innerText = "Change mode"
body.appendChild(mode);

let modee = "dark"

mode.addEventListener("click", (e) =>{

        if(modee === "dark"){
                body.style.backgroundColor = "white"
                body.style.color = "black"
                modee = "light"
        }
        else{
                body.style.backgroundColor = "black"
                body.style.color = "white"
                ul.style.color = "black"
                modee  = "dark"
        }
        console.log(modee);
})
