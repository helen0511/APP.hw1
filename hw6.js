// scope and scope chain
function b1(){
	// var myVar;
	console.log(myVar);
}

function a1(){
	var myVar = 1;
	b1();
	console.log(myVar);
}

var myVar = 2;
var counter = 0;
var addGlobal = () => {
  counter++;
  console.log(counter);
}
addGlobal();
addGlobal();
addGlobal();
// 123 使用全域變數


var addLocal = () => {
  var counter = 0;
  counter++;
  console.log(counter);
}
addLocal();
addLocal();
addLocal();
// 111 被刷新


var addClosure = (() => {
  var counter = 0;
  return () => {
    counter++;
    console.log(counter);
  }
})();
addClosure();
addClosure();
addClosure();
// 123 使用閉包

var add = (x) => {
  return (y) => {
    console.log(x+y);
  };
}

var add5 = add(5);
add5(3);