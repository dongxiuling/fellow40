// es6引入模块的方式  ./代表当前路径
import img from './img/24.jpg';
import style from './css/index.css';
console.log('111111');
var oImg = new Image();
oImg.src= img;
document.body.append(oImg);