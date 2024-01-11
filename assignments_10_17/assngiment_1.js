
let titileContant= "Elzero";
let DescrbtionContent="Elzero web school";
let Date= "25/10";
 
console.log(Date);

let MakeUp=`
<div class"card">
<h3>hello${titileContant}</h3>
<p>${DescrbtionContent}</p>
<span>${Date}</span>
</div>`

let result = MakeUp.repeat(4);

document.write(result);