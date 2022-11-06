import ListCheckBoxItem from "./ListCheckBoxItem";
import "./Theme/check-list.css";

export default function CheckList(props) {
    return (
        <div id={props.id} className="check-list">
            {props.items.map( (e) => { return <ListCheckBoxItem text={e} /> } )}
        </div>  
    );
}