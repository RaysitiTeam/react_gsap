import React,{Component} from 'react';
import {TweenLite} from 'gsap';
//Styles Related
import Radium from 'radium';
import styles from './board-styles';

class BoardApp extends Component{
    componentDidMount = ()=>{
        TweenLite.to(this.refs.bd_toolBox,1,{x:320,y:60,scale:2}) //rotation default rotates on the Y-axis
        TweenLite.to(this.refs.bd_title,1,{color:'#fff'})
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