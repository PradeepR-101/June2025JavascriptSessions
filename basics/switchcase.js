let browser = 'chrome';

switch (browser.trim().toLowerCase()) {
    case 'chrome':
        console.log('chrome is launched');
        break;
    case 'firefox':
        console.log('firefox is launched');
        break;
    case 'edge':
        console.log('edge is launched');
        break;
    case 'safari':
        console.log('safari is launched');
        break;
    case 'ie':
        console.log('ie is launched');
        break;
    default:
        console.log('plz pass the right browser name ' + browser);
        break;
    case 'opera':
        console.log('opera is launched');
        break;

}

console.log('===========');

//0 to 100
let marks = 100;
switch (marks) {
    case 90:
        console.log('hi');
        break;
    case 100:
        console.log('hello');
        break;
    default:
        console.log('bye!');
        break;
}

console.log('===========');

let isActive = true;//false
switch (isActive) {
    case true:
        console.log('pass');
        break;
    case false:
        console.log('fail');
        break;
    default:
        console.log('no result');
        break;
}



//use cases for switch case:
//1. cross browser logic
//2. cross os/platforms: win/linux/mac
//3. cross system: local, remote
//4. cross environment: dev/qa/stage/uat/prod
//5. RBAC: user permission: admin, customer, seller, partner, vendor, distributor, guest
//6. locator strategy: id, name, role, text, xpath, css
//7. testing type: sanity, smoke, regression, ui, api, mobile
//8. uber app: booking type: mini, sedan, suv, bike
//9. payment: upi, paypal, cc, debit, wire, stripe, cash
//10. loan type: home: 8%, car: 10%, edu: 6%

//if-else:
//one single conditon
// if (user === 'admin') {
    
// }
//numbering: student marks: 1 to 100

//voting logic: >=18
let age = 20;
if (age >= 18) {
    console.log('eligibe for voting');
}
else {
    console.log('eligibe for voting');
}
