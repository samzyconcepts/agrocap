import "./InputField.css";

const InputField = (props) => {
    return (
        <div className="inputField">
            <label htmlFor={props.name}>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange}
                disabled={props.disabled === true ? true : false}
            />
        </div>
    );
};

export default InputField;
