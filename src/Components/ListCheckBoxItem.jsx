import "./Theme/list-check-box.css";

export default function ListCheckBoxItem(props) {
    return (
        <div className="list-check-box-item">
            <input type="checkbox" className="check-box form-check-input" />
            <p className="check-box-text form-check-label">{props.text}</p>
        </div>
    );
}