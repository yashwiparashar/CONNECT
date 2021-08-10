console.log('app.js is running')

const template = 
<div>
<p>This is jsx dudey </p>
<h1>Do it bro</h1>
</div>
var template2=
<div>
<h1>
INDECISION APP
</h1>
<p>
Put your life in the hands of a computer
</p>
<p>
Here are your options
<ol>
<li>Item One</li>
<li>Item Two</li>
</ol>
</p>
</div>

const app={
title: 'brooo',
subtitle:'no broini1',
options:['one','two']
};
function Sub(subtitle){
if(subtitle)
{
    return <p>Subtitle:{subtitle}</p>;
}

}
let count=0
const addOne=()=>{
console.log("add one")

}
const template4=
<div>
<h1>
Count:{count}
</h1>
<button onClick={addOne}>+1</button>
</div>







const template3=
<div>
<h1>
app.title
</h1>
<p>
{app.subtitle&&Sub(app.subtitle)}</p>
<p>
{app.options.length>0?'Here are your options':'No options'}
</p>

</div>
let approot=document.getElementById('app')
ReactDOM.render(template4,approot)
