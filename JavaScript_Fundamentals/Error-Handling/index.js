// Error Handling in JS

try {
    console.log('gets executed w/o errors');

    // no error here, so the catch will be skipped
} catch (err) {
    console.log('Catch is ignored, because there are no errors');
}