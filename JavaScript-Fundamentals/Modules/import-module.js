
import {capitalize, roundToDecimalPlace} from '/export-module'

function displayTotal(name, total) {
	return `${capitalize(name)}, your total cost is: ${roundToDecimalPlace(total)}`;
}

console.log(displayTotal('kingsley', 20.4444444));
// "Kingsley, your total cost is: 20.44"

//export { displayTotal };