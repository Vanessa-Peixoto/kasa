import { useState } from "react"
import arrowUp from '../../assets/images/arrow-up.png'
import arrowDown from '../../assets/images/arrow-down.png'
import './style.scss'

function Collapse({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse-container">
            <div className="collapse-header" onClick={toggle}>
                <h2>{title}</h2>
                <img src={isOpen ? arrowUp : arrowDown} alt="Toggle arrow" className="toggle-arrow" />
            </div>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    )
}

export default Collapse