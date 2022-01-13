const xhrS = new XMLHttpRequest();
const xhrA = new XMLHttpRequest();

xhrA.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
xhrS.open("GET", "https://jsonplaceholder.typicode.com/todos/1", false);

xhrA.onload = function () {
  console.log("xhrA", xhrA.responseText);
  console.log("xhrA", xhrA.status);
};

xhrA.send();
xhrS.send();
console.log("xhrS", xhrS.responseText);
console.log("xhrS", xhrS.status);

document.getElementById("test").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/todos", true);
  xhr.onload = function () {
    console.log(xhr.responseText);
    console.log(xhr.status);
  };
  xhr.send(formData);
});
