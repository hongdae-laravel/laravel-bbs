class KeyEventHandler {
    constructor(props) {
        this.props = props;
    }
}

const props = {
    buttons : {
        r: '읽기',
        w: '쓰기',
        f: '새로고침',
    },
    inputValue : '',
    canHasMultiCharacters : false,
    get getCanHasMultiCharacters() {
        return this.canHasMultiCharacters;
    },
    set setCanHasMultiCharacters(bool) {
        this.canHasMultiCharacters = bool;
    },
    get getInputValue() {
        return this.inputValue;
    },
    set setInputValue(e) {
        const kCode = e.keyCode;
        const key = e.key;
        if (kCode  === 13) {  // Enter
            this.setCanHasMultiCharacters = true;
            alert(this.getInputValue);
        }
        if (kCode === 8) { // Backspace
            this.inputValue = this.inputValue.slice(0, this.inputValue.length-1);
        }
        if (kCode > 64 && kCode < 91) {
            if(this.canHasMultiCharacters) {
                this.inputValue += key;
            } else {
                this.inputValue = key;
            }
        }
    },
};

const keyEventHandler = new KeyEventHandler(props);
const keyEvent = document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const inputValueBox = document.querySelector('.inputValue');

    keyEventHandler.props.setInputValue = e;
    inputValueBox.innerHTML = keyEventHandler.props.getInputValue;
});
