import React, { Component } from 'react';
import GSAP from 'react-gsap-enhancer';

// Styles will come here
import configStyles from './config-styles';
import Radium from 'radium';

// Global Styles using Radiums
import styles from './banner-styles';

class BannerApp extends Component{
    render(){
        return(
            <div width={configStyles.bannerWidth} style={styles.root}>            
                <h1>Welcome to Banner App</h1>
                <a id="myAdLink" style={styles.myAdLink}>Lynda link</a>
                <div id="myAd" style={styles.myAd}>
                    <div style={[styles.myAd_Img, styles.myAd_clouds]} id="myAd_clouds"></div>
                    <div id="myAd_photo" style={[styles.myAd_Img, styles.myAd_photo]}></div>
                    <div id="myAd_text1" style={[styles.myAd_text, styles.myAd_text1]}>Feeling Stressed ?</div>
                    <div id="myAd_text2" style={[styles.myAd_text, styles.myAd_text2]}>You could be here...!</div>
                    <div id="myAd_shadow" style={[styles.myAd_Img, styles.myAd_shadow]}></div>                    
                    <div id="myAd_text3" style={[styles.myAd_Img, styles.myAd_text3]}></div>                    
                    <div id="myAd_marker" style={[styles.myAd_Img, styles.myAd_marker]}></div>                    
                    <div id="myAd_surfBoard" style={[styles.myAd_Img, styles.myAd_surfBoard]}></div>                                        
                </div>
            </div>
        );
    }//end:render   
}//end:class-BannerApp


export default GSAP()(Radium(BannerApp)); //GSAP wrapped React Object