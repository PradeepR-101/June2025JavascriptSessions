let product = ['macbook', 'samsung', 'iphone', 'sim', 'keyboard'];

//forEach method

product.forEach(ele => {
    console.log(ele);
    if (ele === 'sim') {
        console.log('im using airtel sim');
        return true;
    }
});


let flag = product.some(ele => {
    console.log(ele);
    if (ele === 'sim') {
        console.log('im using airtel simmmmm');
        return true;
    }
});

console.log(flag);
