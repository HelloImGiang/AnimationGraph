import { _decorator, animation, Component} from 'cc';
const { ccclass, property } = _decorator;


@ccclass('ControllAnimatior')
export class ControllAnimatior extends Component {
    @property (animation.AnimationController) 
    private _controller!:animation.AnimationController
  
    get controller() {
        return this._controller;
    }

    set controller(value) {
        this._controller = value;
    }
    public start(){
        //this.jump();

    }
  
    public jump() {
            let v = this.getComponent.
                this.controller.setValue('Jump',true);
           
    }

}



