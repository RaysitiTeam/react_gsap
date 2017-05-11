import React,{Component} from 'react';
import {TweenLite} from 'gsap';
//Styles Related
import Radium from 'radium';
import styles from './board-styles';

class BoardApp extends Component{
    constructor(props,context){
        super(props,context);
        this.completeAnimation.bind(this);
    }//end:constructor
    initAnimation = ()=>{
        TweenLite.to(this.refs.bd_toolBox,1,{
            x:320,
            y:60,
            scale:2,
            onComplete:this.completeAnimation
        }) //rotation default rotates on the Y-axis
        TweenLite.to(this.refs.bd_title,1,{color:'#fff'})
    }//end:initAnimation

    completeAnimation = ()=>{
        TweenLite.to(this.refs.bd_toolBox,1,{x:0,y:0,scale:1}) //Scale will work with images set with background ppty in CSS/Radium
    }//end:completeAnimation
    componentDidMount = ()=>{
        this.initAnimation();
    }//end:componentDidMount
    render(){
        return(
            <div style={styles.root}>
                <h2 ref='bd_title'>Board Application</h2>
                <div ref='bd_toolBox' style={styles.bd_toolBox}></div>
            </div>
        );
    }//end:render
}//end:class-Board

export default Radium(BoardApp);