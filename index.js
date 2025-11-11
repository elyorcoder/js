alert("Saytimga Xush Kelibsiz");

const elForm = document.querySelector(".form");
const elText = document.querySelector(".text");
const elPaswrd = document.querySelector(".paswrd");
elForm.addEventListener("submit", (e) => {
  e.preventDefoult();
  const valueText = elText.value.trim();
  const valuePaswrd = elPaswrd.value.trim();
  if (!valueText || !valuePaswrd) {
    return alert("Bosh Joy Kolgan");
  } else {
    alert("go away");
    window.location.hrefhttps; //github.com/elyorcoder/js
  }
  console.log(elPaswrd);
});
