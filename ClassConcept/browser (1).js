class Browser{


    //all the private methods can be accessed inside the public method: Encapsulation
    launchBrowser() {
        console.log('launching chrome browser...');
        this.#checkRAM();
        this.#checkVersionUpdate();
        this.#checkOSCompatible();
        this.#checkNewUpdates();
        console.log('chrome is launched....');
    }

    #checkRAM() {
        console.log('checking system RAM ');
    }

    #checkVersionUpdate() {
        console.log('checking version of the browser...');
    }

    #checkOSCompatible() {
        console.log('OS is compatible....');
    }

    #checkNewUpdates() {
        console.log('checking new updates from market place....');
    }

}

//user is trying to open a browser....
let obj = new Browser();
obj.launchBrowser();

