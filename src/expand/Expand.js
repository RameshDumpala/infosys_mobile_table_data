import React,{useState} from "react";
import Iphone_pro_max from "./Iphone_pro_max";
import Iphone_pro from "./Iphone_pro";
import "./Expand.css"


const Expand=()=> {

    const [expandall,setExpandall]=useState(false)
    
    const handleexpand=()=>{
      setExpandall(!expandall)
    }
    
      return (
        <div className="mainapp_div">
        <div className="App_div">
      <p onClick={handleexpand}>Expand all</p>
     <Iphone_pro_max expandall={expandall} setExpandall={setExpandall} />
     <Iphone_pro expandall={expandall} />
        </div>
        </div>
      );
    }
    export default Expand