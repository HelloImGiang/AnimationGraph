import { _decorator, animation, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CharacterController')
export class CharacterController extends Component {
    @property(animation.AnimationController)
    private animationController:animation.AnimationController;
    start(){
        this.jump();
    }
    public jump() {
        
        this.animationController.setValue('Jump',true);
    }
}


