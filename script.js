"use strict";
todoList.innerHTML = localStorage.getItem("list");

const spanDels = document.querySelectorAll(".delete");
for (let span of spanDels) {
  span.onclick = () => deleteTodo(span.parentElement.parentElement);
}

const spanStarsColor = document.querySelectorAll(".starsGray");
for (let span of spanStarsColor) {
  span.onclick = () => starColor(span);
}


emptyTodo.style.display = todoList.innerHTML == "" ? "block" : "none";

todoForm.onsubmit = (e) => {
  e.preventDefault();

  const li = document.createElement("li");
  const text = document.createElement('span');
  text.classList.add('text');
  text.textContent = todoValue.value;

  const spanDel = document.createElement("span");
  spanDel.classList.add("delete");
  spanDel.innerHTML = "<i class='fa-solid fa-trash'></i>";

  const spanStars = document.createElement("span");
  spanStars.classList.add("starsGray");
  spanStars.innerHTML = "<i class='fa-solid fa-star'></i>";

  spanDel.onclick = () => deleteTodo(li);
  spanStars.onclick = () => starColor(spanStars);

  const spanOpt = document.createElement('span');


  spanOpt.appendChild(spanStars);
  spanOpt.appendChild(spanDel);


  li.appendChild(text);
  li.appendChild(spanOpt);

  todoList.appendChild(li);

  todoValue.value = "";
  emptyTodo.style.display = "none";

  localStorage.setItem("list", todoList.innerHTML);
};

function deleteTodo(element) {
  element.remove();
  emptyTodo.style.display = todoList.innerHTML == "" ? "block" : "none";
  localStorage.setItem("list", todoList.innerHTML);
}

function starColor(element) {
    element.classList.toggle('starsGold')
    localStorage.setItem("list", todoList.innerHTML);
}