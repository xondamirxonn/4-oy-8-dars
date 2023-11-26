// let ul = document.querySelector("ul");
// let form = document.querySelector("form");
// let resett = document.querySelector("#resett");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let text = e.target[0].value;
//   if (!text) return alert("Matn kirgazish shart");
//   if (text.length < 4) return alert("Matn kamida 4ta belgili boslish shart");
//   let li = document.createElement("li");
//   let btn = document.createElement("button");
//   let editBtn = document.createElement("button");
//   let icon = document.createElement("i");
//   let editIcon = document.createElement("i");
//   let checkbox = document.createElement("input");
//   let span = document.createElement("span");
//   span.classList.add("todo-title");
//   checkbox.setAttribute("type", "checkbox");
//   checkbox.classList.add("todo-completed-checkbox");
//   icon.classList.add("fa-solid", "fa-trash");

//   editIcon.classList.add("fa-solid", "fa-pen");
//   btn.classList.add("btn", "btn-danger");
//   editBtn.classList.add("btn", "btn-warning");
//   btn.append(icon);
//   editBtn.append(editIcon);
//   span.innerText = text;
//   li.append(checkbox);
//   li.append(span);
//   li.classList.add("d-flex", "justify-content-between", "align-items-center");
//   li.append(editBtn);
//   li.append(btn);
//   ul.append(li);

//   btn.addEventListener("click", (e) => {
//     if (confirm("Ishonchingx komilmi?")) {
//       let element = e.target;
//       while (element.tagName !== "BUTTON") {
//         element = element.parentElement;
//       }
//       element.parentElement.remove();
//     }
//   });

//   editBtn.addEventListener("click", (e) => {
//     let currentButton = e.target;
//     while (currentButton.tagName !== "BUTTON")
//       currentButton = currentButton.parentElement;

//     let title = currentButton.previousElementSibling;
//     title.setAttribute("contenteditable", true);
//     title.focus();

//     title.addEventListener("blur", (e) => {
//       e.target.setAttribute("contenteditable", false);
//     });
//   });

//   e.target.reset();
// });
// resett.addEventListener("click", () => {
//   ul.textContent = "";
// });

let ulList = document.querySelector("#users");
let deleteBtn = document.querySelector("#delete");
let product = document.querySelector("#product")
let orders = document.querySelector("#orders")
axios.defaults.baseURL = "http://localhost:3000";
axios.get("/users").then((res) => {
  let response = res.data;
  response.forEach((element) => {
    // td.innerHTML = element.first_name + element.last_name

    // td.innerHTML = element.first_name + element.last_name
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let img = document.createElement("img");
    let editIcon = document.createElement("i");

    img.setAttribute("src", element.img_url);
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let icon = document.createElement("i");

    p.textContent = element.first_name + element.last_name;
    icon.classList.add("fa-solid", "fa-trash");
    
    
    p3.textContent = element.age;
    p2.textContent = element.email;
    p4.textContent = element.password;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.borderRadius = "50%";
    img.style.objectFit = "cover";
    img.style.alignItems = "center";
    li.style.padding = "10px";
    btn.classList.add("btn", "btn-danger");
    // btn.classList.add("fa-solid fa-trash");
    li.classList.add("text-center");
    li.classList.add("mx-5");
    btn.style.marginRight = "8rem"
    // p.style.display = "";
    // li.style.borderBottom = "1px solid black"
    // ulList.style.display = "flex"
    li.style.display = "flex";

    li.style.alignItems = "center";
    li.style.justifyContent = "space-between";
    btn.append(icon);
    
    li.append(img, p, p3, p2, p4, btn);
    ulList.append(li);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      li.remove();
    });
    
    
    
  });
});



product.addEventListener("click", () => {
  alert("Bu bo'lim xali ish faoliyatidamas")
})

orders.addEventListener("click", () => {
  alert("Bu bo'lim xali ish faoliyatidamas");
});