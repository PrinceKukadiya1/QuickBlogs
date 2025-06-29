import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

    const {navigate , token} = useAppContext();

  return (
    <div className='flex justify-between items-center  py-3 px-2 sm:px-4 sm:mx-20 xl:mx-24'>
        <img onClick={() => navigate('/')} className='w:32 sm:w-44'  src={assets.logo} alt="logo" />
        <button onClick={() => navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-5 md:px-10 py-2.5'>{token ? 'Dashboard' : 'Login'}
            <img src={assets.arrow} alt="arrow" className='w-3' />
        </button>
      
    </div>
  )
}

export default Navbar
