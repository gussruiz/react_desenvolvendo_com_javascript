import './TextField.css';

const TextField = (props) =>{
    return(
        <div className="field-text">
            <label>{props.label}</label>
            <input required={props.required} placeholder={`${props.placeholder}`}/>  
        </div>
    );
}

export default TextField;

