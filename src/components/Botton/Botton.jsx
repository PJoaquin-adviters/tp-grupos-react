import "./Botton.css"

export const Botton = ({ message, handleClick }) => {

    return (<button className="btn" onClick={(e) => handleClick(e)} type="submit">{message}</button>)

}