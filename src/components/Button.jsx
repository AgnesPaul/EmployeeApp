const Button = ({ label,className,type, handleClick,value }) => {
    return(       
            <button  className={className} type={type} value={value} onClick={()=> handleClick()}>{label}</button> 
    );
}

export default Button;