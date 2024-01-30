
function greetMe(name) {
    console.log(`Hello, ${name}!`);
}
// the function will be called after a delay of 2 seconds = 2000 Milliseconds
// after the delay the function will be called once
setTimeout(greetMe, 2000, 'Nyangweso'); 

// after 2 seconds
// Output: Follow rodgerso65@gmail.com for more
var mySetTimeout = document.getElementById('set-timeout');

setTimeout(function() {
    mySetTimeout.innerHTML += 'Follow rodgerso65@gmail.com for more'
}, 2000);