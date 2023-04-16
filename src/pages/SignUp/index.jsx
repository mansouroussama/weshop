import Container from '../../components/ui/Container'
import Button from '../../components/ui/Button'
import ButtonAlt from '../../components/ui/ButtonAlt'
import Heading from '../../components/ui/Heading'
import { UserCircle, EnvelopeSimple, Password } from "@phosphor-icons/react";

import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user-slice';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState, useRef, useReducer } from 'react';
import { auth } from '../../utils/firebase-config'

const SignUp = () => {
   const nameRef = useRef();
   const emailRef = useRef();
   const passwordRef = useRef();
   const [errorType, setErrorType] = useState('')

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const errorReducer = (state, action) => {
      if (action.type == 'invalid-name') {
         nameRef.current.focus();
         return 'Name must be at least 5 characters long.'
      }
      else if (action.type == 'invalid-email') {
         emailRef.current.focus();
         return 'The email you entered is invalid'
      }
      else if (action.type == 'missing-password') {
         passwordRef.current.focus();
         return 'Please enter your password'
      }
      if (action.type == 'email-already-in-use') {
         nameRef.current.value = '';
         emailRef.current.value = '';
         passwordRef.current.value = '';
         nameRef.current.focus();
         return 'Email already registered. Please sign in instead'
      }
   }
   const [errorMessage, dispatchError] = useReducer(errorReducer, '');
   const errorHandler = (errorMsg) => {
      const error = errorMsg !== 'invalid-name' ? errorMsg.split('/')[1].split(')')[0] : errorMsg;
      dispatchError({type: error})
      setErrorType(error);
   }
   const goToLogInPageHandler = () => {
      navigate('/login')
   }
   const signupHandler = async (e) => {
      try {
         e.preventDefault();

         const nameValue = nameRef.current.value;
         const emailValue = emailRef.current.value;
         const passwordValue = passwordRef.current.value;

         if (nameValue.length < 5 ) throw new Error('invalid-name')
         // validation
         await createUserWithEmailAndPassword(auth, emailValue, passwordValue);
         await updateProfile(auth.currentUser, { displayName: nameValue })
         console.log(auth.currentUser)
         const { email, displayName } = auth.currentUser;
         dispatch(userActions.login({ email, displayName }));

         navigate('/')
      } catch (error) {
         console.error(error.message);
         errorHandler(error.message)
      }
   }   
   return ( 
      <div className="bg-white py-8 lg:py-12">
         <Container className="justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
               <Heading>Create an account</Heading>
               <form className="flex flex-col gap-5" onSubmit={signupHandler}>
                  <div className="flex flex-col gap-2.5">
                     {errorType === 'email-already-in-use' && <div className="p-4 bg-red-100/75 text-red-500 font-medium rounded">{errorMessage}</div>}
                     <label htmlFor="name" className="font-semibold text-zinc-600">Name</label>
                     <div>
                        <div className="relative flex">
                           <input type="text" name="name" className="flex-grow p-3.5 pl-14 border-2 rounded" placeholder="Enter full name" ref={nameRef}/>
                           <UserCircle color="#18181B " weight="regular" size={24} className="absolute left-4 top-4"/>
                        </div>
                        {errorType === 'invalid-name' && <div className="py-2  text-red-500 font-medium rounded">{errorMessage}</div>}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                     <label htmlFor="email" className="font-semibold text-zinc-600">Email</label>
                     <div>
                        <div className="relative flex">
                           <input type="email" name="email" className="flex-grow p-3.5 pl-14 border-2 rounded" placeholder="Enter email" ref={emailRef}/>
                           <EnvelopeSimple color="#18181B " weight="regular" size={24} className="absolute left-4 top-4"/>
                        </div>
                        {errorType === 'invalid-email' && <div className="py-2  text-red-500 font-medium rounded">{errorMessage}</div>}
                     </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                     <label htmlFor="email" className="font-semibold text-zinc-600">Password</label>
                     <div>
                        <div className="relative flex">
                           <input type="password" name="password" className="flex-grow p-3.5 pl-14 border-2 rounded" placeholder="Enter password" ref={passwordRef}/>
                           <Password color="#18181B " weight="regular" size={24} className="absolute left-4 top-4"/>
                        </div>
                        {errorType === 'missing-password' && <div className="py-2  text-red-500 font-medium rounded">{errorMessage}</div>}
                     </div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <Button type="submit">Register</Button>
                     <ButtonAlt onClick={goToLogInPageHandler}>Existing member? <span className="underline font-semibold">Sign in</span></ButtonAlt>
                  </div>
               </form>
            </div>
         </Container>
      </div>
    );
}
 
export default SignUp;
