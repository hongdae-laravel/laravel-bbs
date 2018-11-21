class PromptAction {
    constructor() {
        this.promptAction = null;
    }
    setPromptAction(promptAction) {
        this.promptAction = promptAction;
        console.log(`${this.promptAction.getActionName()} is setting.`);
        this.promptAction.afterSetExec();
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

export default PromptAction;