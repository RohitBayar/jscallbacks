import "./styles.css";
import $ from "jquery";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// function A(sub, func) {
//   document.getElementById("app").innerHTML = sub;
//   func();
// }
// function test() {
//   document.getElementById("app1").innerHTML = `Finished Test`;
// }
// A('Math',test);
function getData(d) {
  setTimeout(function() {
    run(d);
  }, 1000);
}
function coroutine(g) {
  var it = g();
  return function() {
    return it.next.apply(it, arguments);
  };
}
// var run  =coroutine(function*(){
//   var x = 1 + (yield null);
//   var y = 1 + (yield null);
//   document.getElementById("app").innerHTML = `${x}, ${y}`;
//   yield(x+y);

// });

// run();
// run(10);
// document.getElementById("app1").innerHTML = run(30).value

// var run  =coroutine(function*(){
//   var x = 1 + (yield getData(10));
//   var y = 1 + (yield getData(30));
//   var answer = (yield getData(
//     "Meaning of life: " + (x+y)
//   ));
//   document.getElementById("app").innerHTML = answer;
// });

// run();

function waitForN(n) {
  var d = $.Deferred();
  setTimeout(d.resolve, n);
  return d.promise();
}

waitForN(5000)
  .then(function() {
    document.getElementById("app").innerHTML = `Hello World`;
    return waitForN(2000);
  })
  .then(function() {
    document.getElementById("app1").innerHTML = "Finally";
  });
