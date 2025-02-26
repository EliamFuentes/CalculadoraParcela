import Logo from '../assets/image.webp'

import '../styles/components/header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="Logo Grupo Flex" className="logo" />
        </div>
    )
}

export default Header