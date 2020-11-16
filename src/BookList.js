import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Booklist = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
                <ul>
                <li style={{ background: theme.ui}}>The Audacity Hope</li>    
                <li style={{ background: theme.ui}}>The name of the wind</li>   
                <li style={{ background: theme.ui}}>The Final Empire</li>   
                </ul>
            </div>
    )
    
}

export default Booklist