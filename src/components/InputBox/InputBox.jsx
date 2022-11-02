import './InputBox.scss';

const InputBox = ({title , inputType, errorMessage, successMessage}) => {
    return(
        <div className='input'>
            <p className='input__title'>{title}</p>
            <input className='input__input' type={inputType}></input>
            {errorMessage && <p className='input__message input__message--error'>{errorMessage}</p>}
            {successMessage && <p className='input__message input__message--success'>{successMessage}</p>}
            
        </div>
    )
}

export default InputBox;