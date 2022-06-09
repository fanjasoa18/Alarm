import React ,{useState} from "react";
import { Clock } from "./Clock";

function Button () {
    const [Page,setPage]= useState(<Clock/>);
    const [status,setStatus]= useState(false);
    function Clicked(event) {
        event.preventDefault();
        if(status==false){
            setStatus(true)
            setPage(<Timer/>)
            console.log(status);
        }
        if(!status==false){
            setStatus(false)
            setPage(<Clock/>)
            console.log(status);
        }
    }
    return(<>
        {Page}
        <button className="mode button-primary" onClick={Clicked}>Change mode</button>
        </>
    )
}

export default Button;