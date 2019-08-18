// 操作 DOM 元素，把 content 显示到网页上
import  pic3  from './imgs/2.png';


/*
var pic3 = require('./imgs/3.jpg');

function show(content) {
  window.document.getElementById('app').innerHTML=  `
<img src="${pic3}"/>
`;
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;
*/

export  default function(){
	  window.document.getElementById('app').innerHTML=  `
<img src="${pic3}"/>
`;
	
}
