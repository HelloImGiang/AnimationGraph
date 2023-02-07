import { _decorator, animation, Component, Node, ValueType } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterController')
export class CharacterController extends Component {
    @property(animation.AnimationController)
    private animationController:animation.AnimationController;
    start(){
       
    }
    public jump() {
        this.animationController.setValue('Jump',true);
    }
    public run(){
        let ValueType = 0;
        this.animationController.setValue('speed',ValueType);
    }
    
   
    }


