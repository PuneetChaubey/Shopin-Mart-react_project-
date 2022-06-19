import React, { useContext } from 'react'
import style from "../Style/Login.module.css"
import {
 
  Button,
} from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
const {login} = useContext(AuthContext)

  return (
    <div className={style.main_div} >
      <input className={style.login_input} type="Email" placeholder="Enter Email.." />
      <input type="Password" className={style.login_input} placeholder="Enter Password.." />
      <Button colorScheme='teal' size='xs' onClick={()=>{login()}}>
      Login
     </Button>
    </div>
  )
}

export default Login