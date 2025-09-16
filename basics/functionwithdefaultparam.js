function print(name = 'naveen') {
    console.log('hi '+ name);
}

print();
print('pooja');

function multiply(a = 0, b = 0) {
    console.log(a*b);
}

multiply();
multiply(2, 3);
multiply(5);

console.log('-------------');

/**
 * 
 * @param {string} browserName 
 */
function openBrowser(browserName = 'chrome') {
    switch (browserName) {
        case 'firefox':
            console.log('open firefox');
            break;
        case 'chrome':
            console.log('open chrome');
            break;
        case 'edge':
            console.log('open edge');
            break;
        default:
            console.log('invalid browser, hence running tests on chrome browser');
            break;
    }
}

openBrowser('naveen');


console.log('---------');
//env: QA, DEv, Stage, UAT, PROD

/**
 * 
 * @param {string} envName 
 */
function runTest(envName = 'qa') {
    switch (envName.trim().toLowerCase()) {
        case 'qa':
            console.log('run tests on QA env');
            break;
        case 'dev':
            console.log('run tests on dev env');
            break;
        case 'stage':
            console.log('run tests on stage env');
            break;
        case 'prod':
            console.log('run tests on prod env');
            break;
        default:
            console.log('===invalid env ' + envName);
            console.log('hence running tests on default : QA env');
            break;
    }
}

runTest('QA');