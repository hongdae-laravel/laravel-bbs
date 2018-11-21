import KeyEvent from "./KeyEvent";

class EnterEvent extends KeyEvent {
    constructor() {
        super();
        this.name = 'EnterAction';
    }
    setInputValue(val) {
        this.inputValue = val;
    }
    exec() {
        const tAction = `${this.getInputValue()}Action`;
        if (actions.hasOwnProperty(tAction)) {
            return tAction;
        } else {
            return null;
        }
    }
    afterSetExec() {
        console.log('This is afterSetExec from EnterEvent');
    }
}

export default EnterEvent;