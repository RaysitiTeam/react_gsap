import Radium from 'radium';
import graphic from './graphics.png';



const pulse = Radium.keyframes({'0%':{},'50%':{},'100%':{}});

export default {
    'root':{        
    },
    'myAdLink':{
        cursor:'pointer',
        display:'inline-block',
        fontSize:'20px',
        ':hover':{
            color:'#2480d6',
            textDecoration:'underline'        
        }        
    },
    'myAd':{
        position:'relative',
        width:'640px',
        height:'200px',
        margin:'10px auto',
        backgroundColor:'#2480d6',        
        overflow:'hidden',
        borderRadius:'15px'
    },
    'myAd_Img':{
        position:'absolute',
        background: `url(${graphic}) no-repeat 0px 0px`
    },
    'myAd_clouds':{
        width:'inherit',
        height:'inherit',
        top:'0px',
        left:'0px'
    },
    'myAd_photo':{
        width:'inherit',
        height:'143px',
        backgroundPosition:'0px -325px',
        bottom:'0',
        left:'0'
    },
    'myAd_text':{
        position:'absolute',
        width:'inherit',
        textAlign:'center',
        color:'white',
        fontSize:'3em',
        fontWeight:'bold',
        textTransform:'uppercase',
        textShadow:'0px 3px 3px rgba(0,0,102,0.5)',
        top:'0px',
        left:'0px',
    },
    'myAd_text1':{        
        top:'15px',
        left:'0px',
    },
    'myAd_text2':{        
        top:'60px',
        left:'0px',
    },
    'myAd_text3':{
        width:'510px',
        height:'28px',
        backgroundPosition:'-2px -202px',
        top:'58px',
        left:'73px'
    },
    'myAd_marker':{
        width:'60px',
        height:'95px',
        backgroundPosition:'-243px -230px',
        top:'90px',
        left:'290px'
    },
    'myAd_surfBoard':{
        
    },
    'myAd_shadow':{
        width:'35px',
        height:'16px',
        backgroundPosition:'-311px -236px',
        top:'175px',
        left:'306px'
    },
    'animate':{
        border:'1px solid red',
        animation:`${pulse} 4s 2s infinite`
    }
};