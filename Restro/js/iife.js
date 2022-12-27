function greetUser()
{
    console.log('hello');
}


//IIFE example

(function(app){
   app.greetUser = function() {
console.log('IIFE EXAMPLE');
   }
   app.another = function() {
    console.log('IIFE EXAMPLE another');
       }
})(window.app = window.app || {});

(function(testing)
{
    testing.secondexample = function()
    {
        console.log('Second Example');
    }
})(window.second = window.second || {})

//Syntax
(function(param)
{
})(window.name = window.name || {})

console.log('Testing');
app.greetUser();
app.another();

second.secondexample();