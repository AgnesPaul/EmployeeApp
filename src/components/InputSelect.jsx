const InputSelect = ({
    label,
    option,
    value,
    onChange
}) => {
    return (
        <div className="input">
            <label>{label}</label>
            <select  value={value} onChange={(event)=>{onChange(event.target.value)}}>
                {option.map((element)=>(<option key={element.key}>{element.label} </option>))}
            </select>
        </div>
    );
};

export default InputSelect;