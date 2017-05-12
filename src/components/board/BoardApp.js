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
        let delayTime = 5;
        TweenLite.to(this.refs.bd_toolBox,1,{
            x:320,
            y:60,
            scale:2,
            onComplete:this.completeAnimation,
            onCompleteParams:[delayTime]
        }) //rotation default rotates on the Y-axis
        TweenLite.to(this.refs.bd_title,1,{color:'#fff'})
    }//end:initAnimation

    completeAnimation = (delayTime)=>{
        TweenLite.to(this.refs.bd_toolBox,1,{x:0,y:0,scale:1,delay:delayTime}) //Scale will work with images set with background ppty in CSS/Radium
    }//end:completeAnimation

    playAnimation = ()=>{
        console.log('Playing Animation');
    };//end:playAnimation

    pauseAnimation = ()=>{
        console.log('Pausing Animation');
    };//end:pauseAnimation

    stopAnimation = ()=>{
        console.log('Stopping Animation');
    };//end:stopAnimation

    reverseAnimation = ()=>{
        console.log('Reversing Animation');
    };//end:reverseAnimation

    componentDidMount = ()=>{
        this.initAnimation();
    };//end:componentDidMount

    render(){
        return(
            <div style={styles.root}>
                <h2 ref='bd_title'>Board Application</h2>
                <div ref='bd_toolBox' style={styles.bd_toolBox}></div>
                <div style={styles.bd_controlBox}>
                    <a onClick={this.playAnimation} key={1} style={styles.bd_controls}>Play</a>
                    <a onClick={this.pauseAnimation} key={2} style={styles.bd_controls}>Pause</a>
                    <a onClick={this.stopAnimation} key={3} style={styles.bd_controls}>Stop</a>
                    <a onClick={this.reverseAnimation} key={4} style={styles.bd_controls}>Reverse</a>
                </div>
            </div>
        );
    }//end:render
}//end:class-Board

export default Radium(BoardApp);