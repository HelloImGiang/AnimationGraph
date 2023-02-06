import { _decorator, Component, Node,animation } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('ControllAnimatior')
export class ControllAnimatior extends Component {
    @property (animation.AnimationController)
    private _animationController!: animation.AnimationController;
    
    public start(){
        this.jump();

    }
  
    public jump() {
        animation.VariableType.TRIGGER;{
            this._animationController.setValue('Jump',true)
        }
        
        
        
    }

}



