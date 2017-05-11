# React Application using GSAP and Radium

## Table of Contents

- [Introduction to TweenLite](#introduction-to-tweenlite)
- [Using OnComplete property in TweenLite and TweenMax](#using-oncomplete-property-in-tweenlite-and-tweenmax)

# Introduction to TweenLite

Simple use of the TweenLite Library

```js
function startTween(){
    TweenLite.to($('#toolBox'),2,{x:50,y:225}); //TweenLite - move the Toolbox left: 50px and down:225px in 2 seconds
}//end:startTween
```

## Using OnComplete property in TweenLite and TweenMax

We can use the `onComplete` as a property in both the `TweenLite` and `TweenMax` library

> TweenLite Library (React Application)

```js
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
```

> TweenMax Library (React Application)

```js
import React, { Component } from 'react';
import {TimelineMax,Bounce,Power0,Power2,Back} from 'gsap';

// Styles will come here
import configStyles from './config-styles';
import Radium from 'radium';

// Global Styles using Radiums
import styles from './banner-styles';

class BannerApp extends Component{
    constructor(props,context){
         super(props,context);
         this.completeAnimation.bind(this);
    }//end:constructor
    
    initAnimation = ()=>{
        let tl1 = new TimelineMax();
        
        //FeelingStressed...YouCouldBeHere!
        //-=1 would mean  x = x-1
        tl1
        .to(this.refs.myAd, .9,{opacity:1})
        .from(this.refs.myAd_text2,1.3,{top:-100,ease:Bounce.easeOut})
        .to(this.refs.myAd_text1,1.3,{top:210,opacity:0,ease:Power2.easeOut},'-=1')
        .from(this.refs.myAd_marker,1.2,{top:-110,ease:Bounce.easeOut},'-=.5')
        .from(this.refs.myAd_shadow,1.2,{opacity:0,ease:Bounce.easeOut}, '-=1.2')
        .from(this.refs.myAd_text3,1.2,{scale:.2,opacity:0,ease:Power2.easeOut},'-=.9')
        .from(this.refs.myAd_surfBoard,1.3,{top:260,rotation:-180,left:300,ease:Back.easeOut,onComplete:this.completeAnimation},'cta');

        // tl1.seek('cta');//If you want to only animate a specific part of the animation, use this callback function

        // Animating the Clouds, inifnite loop
        let tl2 = new TimelineMax({repeat:-1});
        tl2
        .to(this.refs.myAd_clouds,25,{backgroundPositionX:649,ease:Power0.easeOut});
    }//end:initAnimation

    completeAnimation = ()=>{
        let tl1 = new TimelineMax();
                
        tl1
        .to(this.refs.myAd, .9,{
            opacity:0,
            height:0            
        })
    }
    componentDidMount = ()=>{         
        this.initAnimation();
    };//end:componentDidMount   

    render(){
        return(
            <div width={configStyles.bannerWidth} style={styles.root}>            
                <h1>Welcome to Banner App</h1>
                <a href='https://www.lynda.com/HTML-tutorials/Animating-letters-headline/373558/420207-4.html?autoplay=true#tab' key='1' target='_blank' style={styles.myAdLink}>Lynda link</a>
                <div ref='myAd' id="myAd" style={styles.myAd}>
                    <div ref='myAd_clouds' style={[styles.myAd_Img, styles.myAd_clouds]} id="myAd_clouds"></div>
                    <div ref='myAd_photo' id="myAd_photo" style={[styles.myAd_Img, styles.myAd_photo]}></div>
                    <div ref='myAd_text1' id="myAd_text1" style={[styles.myAd_text, styles.myAd_text1]}>Feeling Stressed ?</div>
                    <div ref='myAd_text2' id="myAd_text2" style={[styles.myAd_text, styles.myAd_text2]}>You could be here...!</div>
                    <div ref='myAd_shadow' id="myAd_shadow" style={[styles.myAd_Img, styles.myAd_shadow]}></div>                    
                    <div ref='myAd_text3' id="myAd_text3" style={[styles.myAd_Img, styles.myAd_text3]}></div>                    
                    <div ref='myAd_marker' id="myAd_marker" style={[styles.myAd_Img, styles.myAd_marker]}></div>                    
                    <div ref='myAd_surfBoard' id="myAd_surfBoard" style={[styles.myAd_Img, styles.myAd_surfBoard]}></div>                                        
                </div>
                <a href='https://app.pluralsight.com/library/courses/gsap-javascript-animation/table-of-contents' key='2' target='_blank'  style={styles.myAdLink}>Pluralsight GSAP animation with Javascript</a>
            </div>
        );
    }//end:render   
}//end:class-BannerApp


export default Radium(BannerApp); //GSAP wrapped React Object
```

