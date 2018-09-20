class PromptAction {
    constructor() {
        this.promptAction = null;
    }
    setPromptAction(promptAction) {
        this.promptAction = promptAction;
        console.log(`${this.promptAction.getActionName()} is setting.`);
    }
    getInputValue() {
        return this.promptAction.getInputValue();
    }
    isPossibleKeyInput(e) {
        return this.promptAction.isPossibleKeyInput(e);
    }
    exec(e) {
        return this.promptAction.exec(e);
    }
}

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
}

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
}

class RAction extends KeyEvent {
    constructor() {
        super();
        this.name = 'rAction';
    }
    exec() {
        console.log('R');
    }
}

class WAction extends KeyEvent {
    constructor() {
        super();
        this.name = 'wAction';
    }
    exec() {
        console.log('W');
    }
}

class FAction extends KeyEvent {
    constructor() {
        super();
        this.name = 'fAction';
    }
    exec() {
        console.log('F');
    }
}

const pAction = new PromptAction();
const rAction = new RAction();
const wAction = new WAction();
const fAction = new FAction();

const enterEvent= new EnterEvent();
const listenSingleKeyEvent = new ListenSingleCharKeyEvent();
const listenMultiKeyEvent = new ListenMultiKeyEvent();

const actions = { enterEvent, rAction, wAction, fAction, listenSingleKeyEvent, listenMultiKeyEvent };
let currentAction = 'listenSingleKeyEvent';
pAction.setPromptAction(actions[currentAction]);

const keyEvent = document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const inputValueBox = document.querySelector('.inputValue');
    if (e.code === "Enter") {
        actions['enterEvent'].setInputValue(pAction.getInputValue());
        pAction.setPromptAction(actions['enterEvent']);
        const nextActionName = pAction.exec(e);
        console.log('nextActionName', nextActionName);
        if (nextActionName === null) {
            pAction.setPromptAction(actions[currentAction]);
            inputValueBox.innerHTML = '잘못된 입력입니다. 다시 시도하세요.';
        } else {
            pAction.setPromptAction(actions[nextActionName]);
            currentAction = nextActionName;
        }
    } else {
        if (pAction.isPossibleKeyInput(e)) {
            pAction.exec(e);
        }
        inputValueBox.innerHTML = pAction.getInputValue();
    }
});