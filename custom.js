let form = document.querySelector("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  form.reset();
}
