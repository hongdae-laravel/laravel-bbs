class KeyEvent {
    constructor() {
        this.name = '';
        this.inputValue = '';
    }
    getActionName() {
        return this.name;
    }
    getInputValue() {
        return this.inputValue;
    }
    isPossibleKeyInput(e) {
        console.log(`${this.name} has not possibleKey condition.`);
        return true;
    }
    afterSetExec() {
        console.log('This is afterSetExec from KeyEvent');
    }
}

export default KeyEvent;