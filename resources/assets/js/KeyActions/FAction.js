import KeyEvent from "../KeyEvents/KeyEvent";

class FAction extends KeyEvent {
    constructor() {
        super();
        this.name = 'fAction';
    }
    exec() {
        console.log('F');
    }
}

export default FAction;