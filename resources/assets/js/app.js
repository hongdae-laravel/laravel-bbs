console.log("app.js is running.");
const buttons = {
    r: '읽기',
    w: '쓰기',
    f: '새로고침',
}

class KeyEventHandler {
    // Todo: 게터 세터를 간단하게 만들기 위해 설정파일을 객체로 변경할 것!
    constructor(e, multiCharactors) {
        this.e = {};
        this.buttons = buttons;
        this.inputValue = '';
        this.canHasMultiCharactors = multiCharactors;
    }
    setEvent(e) {
        this.e = e;
    }
    setCanHasMultiCharactors(boolean) {
        this.canHasMultiCharactors = boolean;
    }
    getCanHasMultiCharactors() {
        return this.canHasMultiCharactors;
    }
    setInputValue(key) {
        if(this.canHasMultiCharactors) {
            this.inputValue += key;
        } else {
            this.inputValue = key;
        }

    }
    getInputValue() {
        return this.inputValue;
    }
    getKey() {
        return this.e.key;
    }
    getKeyCode() {
        return this.e.keyCode;
    }
    getKeyName() {
        const kName = this.buttons[this.e.key];
        return kName ? kName : null;
    }
}

let inputValue = '';
const keyEventHandler = new KeyEventHandler();

const keyEvent = document.addEventListener('keyup', (e) => {
    // 한글자만 받는 경우가 있고 여러 글자를 받는 경우가 있다.
    e.preventDefault();

    const inputValueBox = document.querySelector('.inputValue');
    keyEventHandler.setEvent(e);

    const kCode = keyEventHandler.getKeyCode();
    if (kCode  === 13) {  // Enter
        keyEventHandler.setCanHasMultiCharactors(true);
        alert(inputValue);
    }
    if (kCode === 8) { // Backspace
        inputValueBox.innerHTML = inputValue.slice(0, inputValue.length-1);
    }
    if (kCode > 64 && kCode < 91) {
        keyEventHandler.setInputValue(keyEventHandler.getKey());
        inputValue += keyEventHandler.getKey();
        inputValueBox.innerHTML = keyEventHandler.getInputValue();
    }
})
