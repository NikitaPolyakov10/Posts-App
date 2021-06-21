import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import './Wrapper.css'

const Wrapper = ({children}) => {
    const { storeTheme } = useContext(ThemeContext);
    const currentTheme = storeTheme === 'light' ? 'light' : 'dark'

    return (
        <div className={'wrapper ' + currentTheme}>
            {children}
        </div>
    )
}

export default Wrapper;