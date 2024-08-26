import React from 'react'
import {useState , useEffect} from 'react'
import {styles} from '../style'
import {navLinks} from '../constants'
import {logo , menu , close } from '../assets'
import { Link } from 'react-router-dom'


const Navbar = () => {
const[active , setActive] = useState('')
const[toogle , setToogle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link
      to="/"
      className='flex items-center gap-2'
      onClick={()=>{
        setActive('')
        wimdow.scrollTo(0,0)
      }}>
        <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
        <p className='text-white text-[18px] font-bold cursor-pointer flex'>
        Waiting &nbsp;
          <span className='sm:block hidden'>for you</span></p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        
        {navLinks.map(prev => (
          <li key={prev.id} className={`${active === prev.title ? "text-white" : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(prev.title)}>
            <a href={`#${prev.id}`}>{prev.title}</a>
            </li>
          ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toogle?close:menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={()=>setToogle(!toogle) }/>

        <div className={`${!toogle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-0 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
            
            {navLinks.map(prev => (
              <li key={prev.id} className={`${active === prev.title ? "text-white" : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`} 
              onClick={() => {
                setToogle(!toogle)
                setActive(prev.title)
              }}
              >
                <a href={`#${prev.id}`}>{prev.title}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar