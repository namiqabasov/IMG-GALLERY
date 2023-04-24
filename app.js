const exportImg = document.getElementById("exportImg");
const imgtext = document.getElementById("imgtext");
const imgdog = document.getElementById("imgdog");
const imgmain = document.getElementById("imgmain");
const imginline2 = document.getElementById("imgshow");

imgdog.onclick = function () {
  exportImg.src = imgdog.src;
  exportImg.style.cssText = `
  height: 200px;
  width: 300px;`;
  imgtext.innerHTML = imgdog.alt;
};
imgmain.onclick = function () {
  exportImg.src = imgmain.src;
  exportImg.style.cssText = `
  height: 200px;
  width: 300px;`;
  imgtext.innerHTML = imgmain.alt;
};
imgshow.onclick = function () {
  exportImg.src = imgshow.src;
  exportImg.style.cssText = `
  height: 200px;
  width: 300px;`;
  imgtext.innerHTML = imgshow.alt;
};
