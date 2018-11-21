import KeyEvent from "./KeyEvent";

class ListenSingleCharKeyEvent extends KeyEvent {
    constructor() {
        super();
        this.name = 'ListenSingleCharKeyEvent';
    }
    setInputValue(keyName) {
        this.inputValue = keyName;
    }
    isPossibleKeyInput(e) {
        if(e.keyCode > 64 && e.keyCode < 91) {
            return true;
        } else {
            return false
        }
    }
    exec(e) {
        this.setInputValue(e.key);
        console.log(this.inputValue);
    }
}

export default ListenSingleCharKeyEvent;
