import { useState } from 'react'
import {
  StyledButton,
  StyledContainer,
  StyledInput,
  Styledform,
  StyledCheck,
  StyledSpan,
  StyledImg,
  Styledp,
  Styledh3
} from "./App.style.js";

import Logo from './react-1-282599.png'

function App() {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [isChecked,setChecked] = useState()
 

const handleChangefirstN = e => setFirstName(e.target.value)

const handleChangeLastN = e => setLastName(e.target.value)

const handleChangeEmail = e => setEmail(e.target.value)

const handleChangePassword = e => setPassword(e.target.value)

const handleConfirm = e => setConfirmPassword(e.target.value) 

const changeCheck = () => setChecked(s => !s)

const letters = /^[0-9a-zA-Z,'@','.']+$/;
const SignList = ['!','#','$','%','^','*','+','-','~',]

const checkPassword = () => {
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let counter4 = 0;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(password[i])) {
      counter3 += 1;
    } else if (SignList.includes(password[i])) {
      counter4 += 1;
    } else if (password[i] === password[i].toLowerCase()) {
      counter1 += 1;
    } else if (password[i] === password[i].toUpperCase()) {
      counter2 += 1;
    }
  }

    return (counter1 < 1 || counter2 < 1 || counter3 < 1 || counter4 < 1) ? true : false;
};


const allControl = () => {
if (!firstName || !lastName || !email || !password || !confirmPassword || !isChecked) {
  alert('All fields should be filled')
}else if(password !== confirmPassword) {
  alert('Passwords not match')
}else if (email.indexOf('.') !== (email.length - 3) && email.indexOf('.') !== (email.length - 4)) {
alert('invalid email adress(.)')
}else if(!email.match(letters)){
  alert('invalid charecters in email')
}else if(!email.includes('@',1) || email.indexOf('@') >  email.length - 5 ){
  alert('invalid email(@)')
}else if (password.length < 8){
  alert('please enter minimum 8 character for password')
}
else if(checkPassword()) {
  alert('you muss enter capital letter and lowercase letters and minimum one special character')
}else {
  alert('welcome to website')
}
}

  return (
    <StyledContainer>
      <StyledImg src={Logo}/>
      <Styledh3>Welcome React World</Styledh3>
      <Styledform>
        <StyledInput 
        type="text" 
        name="firstName" 
        placeholder='First Name'
        value={firstName.value}
        onChange ={handleChangefirstN}
        />
        
        <StyledInput 
        type="text" 
        name="LastName" 
        placeholder='Last Name'
        value={lastName.value}
        onChange ={handleChangeLastN}
        />

        <StyledInput 
        type="email" 
        name="email" 
        placeholder='Email Adress'
        value={email.value}
        onChange ={handleChangeEmail}
        />

        <StyledInput 
        type="password" 
        name="password" 
        placeholder='Password'
        value={password.value}
        onChange ={handleChangePassword}
        minlength="8"
        />

        <StyledInput 
        type="password" 
        name="confirm" 
        placeholder='Confirm Password'
        value={confirmPassword.value}
        onChange ={handleConfirm}
        />

        <StyledButton
        type='submit'
        onClick={allControl}
        >Register
        </StyledButton>


        <label>
        <StyledCheck
        type="checkbox" 
        name="accept" 
        checked= {isChecked}
        onClick = {changeCheck}
        />
        <StyledSpan>I accept the Privacy Policy</StyledSpan>
        </label>
      </Styledform>
      <Styledp>Already have an account? Login.</Styledp>
    </StyledContainer>
  );
}

export default App;
