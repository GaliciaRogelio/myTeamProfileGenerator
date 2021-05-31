// if user enters an invalid entry there will not be able to continue until entered a valid entry.
const validateEntries = value => (value === '')? 'Please enter a valid input!': true; 

const validateNumbers =  value => (/^[0-9]/).test(value)? true : 'Invalid input, Please enter a valid input!';

const validateEmail = value => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) ? true : 'Please enter a valid Email!';

module.exports = {validateEntries,validateNumbers, validateEmail};