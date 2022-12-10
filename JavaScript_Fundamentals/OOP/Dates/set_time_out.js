// setTimeout()

// Example where setTimeout() takes a callback

setTimeout( () => {
    console.log('Follow rodgerso65@gmail.com for more');
}, 2000)

// after 2 seconds
// Output: Follow rodgerso65@gmail.com for more

var mySetTimeout = document.getElementById('set-timeout');

setTimeout(function() {
    mySetTimeout.innerHTML += 'Follow rodgerso65@gmail.com for more'
}, 2000);