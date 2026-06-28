import {formatCurrency} from "../scripts/utils/money.js";

console.log('Test suit: formatCurrency');

// basic test case
console.log('cents to dollar');
if(formatCurrency(2095)==='20.95'){
    console.log('passed');
} else{
    console.log('failed');
}

// edge test case
console.log('0 cents');
if(formatCurrency(0)==='0.00'){
    console.log('passed');
} else{
    console.log('failed');
}

// edge test case
console.log('rounds up to nearest cent');
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
} else{
    console.log('failed');
}

// edge test case
console.log('rounds up to nearest cent');
if(formatCurrency(2000.4)==='20.00'){
    console.log('passed');
} else{
    console.log('failed');
}

