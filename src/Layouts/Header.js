import React, { useContext, useState } from 'react';
import fortnite from '../assets/fortnite.png';
import { ContextProvider } from '../reducer/ContextProvider';
function Header(props) {
    const {custom}=useContext(ContextProvider)
    const [name,setName] = useState('')
    console.log(name);
    const onClick =()=>{
        custom(name)
        setName('')
    }
    return (
        <>
            <div className=" header flex">
                <img src={fortnite} alt="Fortnite" />
                <div className='center'>
                    <input type="text" placeholder='Mark Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
                    <button className=' form-control abs t btn' onClick={onClick}>Send</button>
                </div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li> Edit by Bahodir</li>
                </ul>
            </div>
        </>
    );
}

export default Header;