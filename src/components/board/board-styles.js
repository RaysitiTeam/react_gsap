import toolbox from './assets/tool-box.svg';
export default {
    'root':{
        color: 'red',
        borderRadius:'15px',
        backgroundColor:'#0C1014',       
        padding:'10px', 
        width:'50%',
        height:'300px',
        margin:'10px auto',

    },
    'bd_toolBox':{
        position:'relative',
        width:'100px',
        height:'100px',        
        background: `url(${toolbox}) no-repeat 0px 0px`,
        backgroundX:'0px'
    },
    'bd_controlBox':{
        position:'relative',
        bottom:'-85px',
        margin:'0 auto',
        padding:'5px',
        textAlign:'center',
        display:'block',
        width:'50%',
        height:'30px',
        borderRadius:'15px',
        backgroundColor:'black',       
    },
    'bd_controls':{
        cursor:'pointer',
        display:'inline-block',
        color:'white',        
        margin:'0 10px',
        ':hover':{
            color:'#2480d6',
            textDecoration:'underline'        
        }
    }
}//end:default