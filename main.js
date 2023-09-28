function myFunction(x) {
    x.classList.toggle("fa-times")
}

      function lockScroll() {
            document.body.classList.toggle('lock-scroll');
      }


      const menu = document.getElementById("menu");
      const link = document.getElementsByClassName('nav-link');

      document.onclick = function(e) {
        if(e.target.id === link) {
          ul.classList.toggle(active);
        }
      }

      document.onclick = function() {
        link.classList.toggle(active);
      }




switch(expression) {
case value1:
// Statement to be executed if the result of expression matches Value1.
break;

case value2:
// Statement to be executed if the result of expression matches Value2.
break;

default:
// Statement to be executed if none of the cases match result of expression.
}




function match(num) {
  switch(num) {
  case 1:
  console.log("Case 1 matches");
  break;
              
  case 2:
  console.log("Case 2 matches");

  case 3:
  console.log("Case 3 matches");

  default:
  console.log("None of the cases matches")
}}

match(2);

//Output
"Case 2 matches"
"Case 3 matches"
"None of the cases matches"
