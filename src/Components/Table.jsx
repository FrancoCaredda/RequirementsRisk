import { useEffect, useState } from "react";
import "./Theme/table.css";

export default function Table(props) {
    const [header, setHeader] = useState(props.header);
    const [body, setBody] = useState(props.body);

    return (
        <table className="table table-bordered border-primary">
            <thead>
                <tr>
                    {header.map( (e) => { return <th>{e}</th> } )}
                </tr>
            </thead>
            <tbody>
                {body.map( (r) => { return <tr> { r.map((c) => { return <td>{c}</td> }) } </tr> } )}
            </tbody>
        </table>
    );
}