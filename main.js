const prompt = required('prompt-sync')();

const colors = prompt('Enter colors to combine or a color to deconstruct: ')

if (colors.includes('red') && colors.includes('blue')) {
    console.log('purple');
} else if(colors.includes('red') && ('yellow')) {
    console.log('orange');
} else if (colors.includes('blue') && ('yellow')) {
    console.log('green');
} else if (colors === 'purple') {
    console.log('red and blue');
} else if (colors === 'green') {
    console.log('blue and yellow');
} else if (colors === 'orange') {
    console.log('yellow and red');
} else {
    console.log('error');
}

