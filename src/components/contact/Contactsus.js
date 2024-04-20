import React from 'react'
import './Contacts.css'
import Navs from '../Navbar/Navs'
import AbtMenu from '../Aboutmenu/AbtMenu'
import AbtImg from '../Aboutmenu/AbtImg'
import Foot from '../Footer/Foot'
import { FiMap } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import ContactFrm from './ContactFrm'
import Form from 'react-bootstrap/Form';

function Contacts() {
  return (
    <div>
      <Navs/>
      <AbtImg/>
      <div className="Contactus-div">
      <div className='Contactus-tit'>
      <h2>Contact </h2>
        <p>WE LOVE TO DISCUSS YOUR IDEA</p>
      </div>
      <div className='container'>
      <div className='Contactus-crd'>
        <div className='Contactus-flx'>
          <div className='icns'>
            <FiMap className='icons'/>
          </div>
          <div className='icns-txt'>
            <h5>Address</h5>
            <p>California,USA</p>
          </div>
        </div>
        <div className='Contactus-flx'>
          <div className='icns'>
            <MdOutlineMail className='icons' />
          </div>
          <div className='icns-txt'>
            <h5>Email</h5>
            <p>Email : mail@example.com</p>
          </div>
        </div>
        <div className='Contactus-flx'>
          <div className='icns'>
            <FaMobileAlt className='icons'/>
          </div>
          <div className='icns-txt'>
            <h5>Phone</h5>
            <p>+1 234 567 8901</p>
          </div>
        </div>
      </div>
      </div>
      </div>
      <ContactFrm/>
      <Foot/>
    </div>
  )
}

export default Contacts
