var log_test = "Информация";
var warn_test = "Предупреждение о чем-либо";
var error_test = "Какая-то ошибка";

function MyConsole() { } 

MyConsole.prototype=Object.create(console); 
MyConsole.prototype.log=function(...data) 
{ 
console.log.apply(this,data.concat("(this is ConsoleClone)")); 
} 

MyConsole.prototype.error=function(...data) 
{ 
console.error.apply(this,data.concat("(this is ConsoleClone)")); 
} 

MyConsole.prototype.warn=function(...data) 
{ 
console.warn.apply(this,data.concat("(this is ConsoleClone)")); 
} 

var new_console = new MyConsole(); 

console.log(log_test); 
console.warn(warn_test); 
console.error(error_test);

new_console.log(log_test); 
new_console.warn(warn_test); 
new_console.error(error_test);
