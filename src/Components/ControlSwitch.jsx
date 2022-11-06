import { useState } from "react";
import "./Theme/control-switch.css";

export default function ControlSwitch(props) {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className="control-switch">
            {
                    (!enabled) ? 
                    (<div className="switch-state" onClick={ (e) => { props.click(e); setEnabled(true); }}></div>)
                               :
                    (<div className="active-switch switch-state" onClick={ (e) => { props.click(e); setEnabled(false); }}>
                        <div className="circle"></div>
                    </div>)
            }
            <p>{props.text}</p>
        </div>
    );
}