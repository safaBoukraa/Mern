import React  from 'react';
// import './Box.css';
function Box({color}) {
    console.log({color})
    return (
    <div>
        
        
        {color.map((colors,idx)=>{ return (<div key={idx} style={{backgroundColor:colors,width:"100px",height:"100px"}}>
        </div>)})}      
    </div>
    )
};
export default Box