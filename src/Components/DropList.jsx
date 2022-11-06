import React from "react";
import "./Theme/drop-list.css";

export default function DropList(props) {
    return (
        <select className="form-select" onChange={(e) => { console.log(e.target.value); if(e.target.value) { localStorage.setItem("riskSolution", 0.5); localStorage.setItem("found", true) }
                                                           else { localStorage.setItem("riskSolution", 1); } }}>
            <option value={0} selected>Виберіть рішення</option>
            { props.list.map( (e) => { return <option value={1}>{e}</option>; } ) }
        </select>
    );
}