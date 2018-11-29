console.log = (function(logFn) {
    return function(...data) {
 		logFn.apply(console, data.concat("(this is ConsoleClone)")); 
    };
})(console.log);

console.error = (function(errorFn) {
    return function(...data) {
 		errorFn.apply(console, data.concat("(this is ConsoleClone)")); 
    };
})(console.error);

console.warn = (function(warnFn) {
    return function(...data) {
 		warnFn.apply(console, data.concat("(this is ConsoleClone)")); 
    };
})(console.warn);

console.log("log_test"); 
console.warn("warn_test"); 
console.error("error_test"); 