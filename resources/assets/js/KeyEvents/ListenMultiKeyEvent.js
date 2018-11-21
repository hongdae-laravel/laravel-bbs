import KeyEvent from "./KeyEvent";

class ListenMultiKeyEvent extends KeyEvent {
    constructor() {
        super();
        this.name = 'ListenMultiKeyEvent';
    }
    setInputValue(keyName) {
        this.inputValue += keyName;
    }
    backspaceInputValue() {
        this.inputValue = this.inputValue.slice(0, this.inputValue.length-1);
    }
    exec(e) {
        if (e.key === 'Backspace') {
            this.backspaceInputValue();
        } else {
            this.setInputValue(e.key);
        }
        console.log(this.inputValue);
    }
}

export default ListenMultiKeyEvent;