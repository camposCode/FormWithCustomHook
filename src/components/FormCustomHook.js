import React, { useEffect } from 'react'
import { useForm } from './useForm'

export const FormCustomHook = () => {

         const [values, handleInputChange] = useForm({
                  name: ' ',
                  email: ' ',
                  password: ' '
         });

         const { name, email, password } = values;

         useEffect(() => {
                  console.log("email changed")
         }, [email])

       
         return (
                  <>
                           <h1>FormCustomHook</h1>
                           <hr />

                           <div className = "form-group">
                                    <input 
                                             type = "text"
                                             name = "name"
                                             placeholder = "your name"
                                             onChange = {handleInputChange}
                                    />
                           </div>
                           
                           <div className = "form-group">
                                    <input 
                                             type = "text"
                                             name = "email"
                                             placeholder = "your email"
                                             onChange = {handleInputChange}
                                    />
                           </div>
                           
                           <div className = "form-group">
                                    <input 
                                             type = "password"
                                             name = "password"
                                             placeholder = "your password"
                                             onChange = {handleInputChange}
                                    />
                           </div>
                  </>
         )
}
