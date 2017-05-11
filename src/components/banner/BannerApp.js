import React, { Component } from 'react';
import {TimelineMax,Bounce,Power0,Power2,Back} from 'gsap';

// Styles will come here
import configStyles from './config-styles';
import Radium from 'radium';

// Global Styles using Radiums
import styles from './banner-styles';

class BannerApp extends Component{
    componentDidMount = ()=>{         

        let tl1 = new TimelineMax();
        
        //FeelingStressed...YouCouldBeHere!
        tl1
        .to(this.refs.myAd, .9,{opacity:1})
        .from(this.refs.myAd_text2,1.3,{top:-100,ease:Bounce.easeOut})
        .to(this.refs.myAd_text1,1.3,{top:210,opacity:0,ease:Power2.easeOut},'-=1')
        .from(this.refs.myAd_marker,1.2,{top:-110,ease:Bounce.easeOut},'-=.5')
        .from(this.refs.myAd_shadow,1.2,{opacity:0,ease:Bounce.easeOut}, '-=1.2')
        .from(this.refs.myAd_text3,1.2,{scale:.2,opacity:0,ease:Power2.easeOut},'-=.9')
        .from(this.refs.myAd_surfBoard,1.3,{top:260,rotation:-180,left:300,ease:Back.easeOut},'cta');

        // tl1.seek('cta');//If you want to only animate a specific part of the animation, use this callback function

        // Animating the Clouds, inifnite loop
        let tl2 = new TimelineMax({repeat:-1});
        tl2.to(this.refs.myAd_clouds,25,{backgroundPositionX:649,ease:Power0.easeOut});



    };//end:componentDidMount   

    render(){
        return(
            <div width={configStyles.bannerWidth} style={styles.root}>            
                <h1>Welcome to Banner App</h1>
                <a id="myAdLink" style={styles.myAdLink}>Lynda link</a>
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
            </div>
        );
    }//end:render   
}//end:class-BannerApp


export default Radium(BannerApp); //GSAP wrapped React Object