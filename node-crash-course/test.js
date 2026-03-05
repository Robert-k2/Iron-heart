/*const name = 'Yoshi ';

//console.log(name);


const greet = (name) => {
    console.log( `Hello, ${name}`);
}

greet('Joshi'); 
greet( 'Fumal'); 

//global object 
//console.log( global); 
*/

global.setTimeout(()=>{ 
    console.log('in the time out');
    clearInterval(init);
}, 5000); 

const init = setInterval(()=>{
    console.log( 'in the setInterval')
}, 2000);


console.log( _dirname); 
console.log( _filename);






