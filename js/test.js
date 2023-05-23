const popupButton1 = document.querySelector("#popupButton1");
const popupContent1 = document.querySelector("#popupContent1");
const popupClose1 = document.querySelector("#popupClose1");

popupButton1.addEventListener("click", function () {
  popupContent1.style.display = "block";
  popupButton1.style.display = "none";
});

popupClose1.addEventListener("click", function () {
  popupContent1.style.display = "none";
  popupButton1.style.display = "block";
});

const popupButton2 = document.querySelector("#popupButton2");
const popupContent2 = document.querySelector("#popupContent2");
const popupClose2 = document.querySelector("#popupClose2");

popupButton2.addEventListener("click", function () {
  popupContent2.style.display = "block";
  popupButton2.style.display = "none";
});

popupClose2.addEventListener("click", function () {
  popupContent2.style.display = "none";
  popupButton2.style.display = "block";
});

const popupButton3 = document.querySelector("#popupButton3");
const popupContent3 = document.querySelector("#popupContent3");
const popupClose3 = document.querySelector("#popupClose3");

popupButton3.addEventListener("click", function () {
  popupContent3.style.display = "block";
  popupButton3.style.display = "none";
});

popupClose3.addEventListener("click", function () {
  popupContent3.style.display = "none";
  popupButton3.style.display = "block";
});

const popupButton4 = document.querySelector("#popupButton4");
const popupContent4 = document.querySelector("#popupContent4");
const popupClose4 = document.querySelector("#popupClose4");

popupButton4.addEventListener("click", function () {
  popupContent4.style.display = "block";
  popupButton4.style.display = "none";
});

popupClose4.addEventListener("click", function () {
  popupContent4.style.display = "none";
  popupButton4.style.display = "block";
});
