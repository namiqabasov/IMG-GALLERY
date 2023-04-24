const exportImg = document.getElementById("exportImg");

const divimg = document.getElementsByClassName("divimg");

const imgdog = document.getElementById("imgdog");
const imgmain = document.getElementById("imgmain");
const imginline2 = document.getElementById("imgshow");

imgdog.onclick = function () {
  exportImg.src = imgdog.src;
  exportImg.style.cssText=`
  height: 200px;
  width: 300px;`
};
imgmain.onclick = function () {
  exportImg.src = imgmain.src;
  exportImg.style.cssText=`
  height: 200px;
  width: 300px;`
};
imgshow.onclick = function () {
  exportImg.src = imgshow.src;
  exportImg.style.cssText=`
  height: 200px;
  width: 300px;`
};
