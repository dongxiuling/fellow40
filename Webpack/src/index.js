// es6引入模块的方式  ./代表当前路径
import img from './img/24.jpg';
// import style from './css/index.css';
import style from './css/test.scss';
// console.log(q);
let aaaaaaa = 100;
let fn = (x,y) =>{
    console.log(x,y);
}
fn(1,2)
console.log(aaaaaaa);
var oImg = new Image();
oImg.src= img;
document.body.append(oImg);