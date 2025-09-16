
//WAF:
//name: getEmpDevices(empName)
//empName: string
//return: Array --> collection of all the devices for an employee

/**
 * 
 * @param {string} empName 
 */
function getEmpDevices(empName) {
    console.log('emp name : ' + empName);
    let devices = [];
    switch (empName.trim().toLowerCase()) {
        case 'pradeep':
            devices.push('macbook pro');
            devices.push('ipad');
            devices.push('airtel sim');
            break;
        case 'ashu':
            devices.push('HP windows laptop');
            devices.push('samsung phone xs');
            break;
        case 'anu':
            devices.push('mouse');
            break;
        default:
            console.log("===invalid emp name===");
            break;
    }
    return devices;
}

let devicesVal = getEmpDevices('pradeep');
console.log(devicesVal);