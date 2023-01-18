import './TextField.css';

const TextField = (props) =>{

    const onTyped = (event) =>{
        props.onChanged(event.target.value)
    }

    return(
        <div className="field-text">
            <label>{props.label}</label>
            <input 
                onChange={onTyped} 
                required={props.required} 
                placeholder={`${props.placeholder}`}
            />  

        </div>
    );
}

export default TextField;

