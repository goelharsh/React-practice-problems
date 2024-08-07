import React, { forwardRef } from "react";

function ChildUser(props, ref){
    return (
        <div>
            <input type="ref" ref={ref}/> 
        </div>
    )
}

export default forwardRef(ChildUser) 