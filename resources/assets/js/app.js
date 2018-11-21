import ListenSingleCharKeyEvent from "./KeyEvents/ListenSingleCharKeyEvent";
import ListenMultiKeyEvent from "./KeyEvents/ListenMultiKeyEvent";

import PromptAction from './KeyActions/PromptAction';
import EnterEvent from "./KeyEvents/EnterEvent";
import RAction from "./KeyActions/RAction";
import WAction from "./KeyActions/WAction";
import FAction from "./KeyActions/FAction";

const promptAction = new PromptAction();
const rAction = new RAction();
const wAction = new WAction();
const fAction = new FAction();

const enterEvent= new EnterEvent();
const listenSingleKeyEvent = new ListenSingleCharKeyEvent();
const listenMultiKeyEvent = new ListenMultiKeyEvent();

const actions = { enterEvent, rAction, wAction, fAction, listenSingleKeyEvent, listenMultiKeyEvent };
let currentAction = 'listenSingleKeyEvent';
promptAction.setPromptAction(actions[currentAction]);

const keyEvent = document.addEventListener('keyup', (e) => {
    e.preventDefault();
    const inputValueBox = document.querySelector('.inputValue');
    if (e.code === "Enter") {
        actions['enterEvent'].setInputValue(promptAction.getInputValue());
        promptAction.setPromptAction(actions['enterEvent']);
        const nextActionName = promptAction.exec(e);
        console.log('nextActionName', nextActionName);
        if (nextActionName === null) {
            promptAction.setPromptAction(actions[currentAction]);
            inputValueBox.innerHTML = '잘못된 입력입니다. 다시 시도하세요.';
        } else {
            promptAction.setPromptAction(actions[nextActionName]);
            currentAction = nextActionName;
        }
    } else {
        if (promptAction.isPossibleKeyInput(e)) {
            promptAction.exec(e);
        }
        inputValueBox.innerHTML = promptAction.getInputValue();
    }
});