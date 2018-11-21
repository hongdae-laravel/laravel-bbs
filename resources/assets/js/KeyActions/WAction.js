import KeyEvent from "../KeyEvents/KeyEvent";

class WAction extends KeyEvent {
    constructor() {
        super();
        this.name = 'wAction';
    }
    exec() {
        console.log('W');
    }
    isPossibleKeyInput() {
        console.log('test');
    }
    afterSetExec() {
        console.log('afterSetExec from wAction');
        const inputValueBox = document.querySelector('.inputValue');
        inputValueBox.innerHTML = '';
        const tempBrElem = document.createElement('br');
        const tempSpanElem = document.createElement('span');
        tempSpanElem.innerText = '» 글 제목:';
        inputValueBox.append(tempBrElem);
        inputValueBox.append(tempSpanElem);
    }
}

export default WAction;