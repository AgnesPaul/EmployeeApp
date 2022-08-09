

const InputField = ({
    label,
    placeholder,
    id,
    onChange,
    value
}) => {
    return (
        <div className="input">
            <label>{label}</label>
            <input id={id} value={value} placeholder={placeholder} type="text" onChange={(event)=>{onChange(event.target.value)}}/>
        </div>
    );
};

export default InputField;