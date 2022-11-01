import './InputBox.scss';

const InputBox = ({title , inputType, errorMessage, successMessage}) => {
    return(
        <div className='input-container'>
        <p className='input-container__title'>{title}</p>
        <input className='input-container__input' type={inputType}></input>
        <p className='input-container__message input-container__message--error'>{errorMessage}</p>
        <p className='input-container__message input-container__message--success'>{successMessage}</p>
        </div>
    )
}

export default InputBox;