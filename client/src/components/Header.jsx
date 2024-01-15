import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className='relative w-[100%] h-[8vh]'>
                <img src="https://findmynotes.pythonanywhere.com/static/media/images/logo.png" alt="Logo" className='top-0 absolute object-contain bottom-0 right-0 left-0 m-auto h-[200%] ml-[20px]' />
            </nav>
        </div>
    )
}

export default Header