import KeyEvent from "../KeyEvents/KeyEvent";

class RAction extends KeyEvent {
    constructor() {
        super();
        this.name = 'rAction';
    }
    exec() {
        console.log('R');
    }
}

export default RAction;