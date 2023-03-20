import React,{useContext, useState } from 'react'
import { Dialog, TextField } from '@mui/material'
import { AppBar, Box, Toolbar, Typography, styled, Button } from '@mui/material'
import { fontSize, padding } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';


const ContainerBox = styled(Box)`
  width : 80vh;
  height : 70vh;
  display : flex;
 
  
  `;
  
  const LeftBox = styled(Box)`
  background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
  height : 100%;
  width : 40%;
  
  padding : 25px 30px;
    
 

`;

const TextStyleH1 = styled(Typography)`
    font-size : 25px;
    color : #fff;
    font-weight : 600;
    `;
    
    const TextStyleH6 = styled(Typography)`
    font-size : 16px;
    letter-spacing : 1px;
    line-height : 24px;
    color : #bfd8db;
    font-weight : 100;
    margin-top : 15px;
`;

const RightBox = styled(Box)`
    
    padding : 25px 35px;
    height : 100%;
    width : 60%;
    display : flex;
    flex-direction : column;
    flex : 1;
    & > div , & > button, &  > p {
      margin-top : 15px;
      font-size : 15px;
      // text-align : center;
    }

`;

const LoginBtn = styled(Button)`
    text-transform : none;
    background  : #fb641b;
    color : #fff;
    border-radius : 2px;

`;
const RequestOTP = styled(Button)`
    text-transform : none;
    background  : #fff;
    color : #2874f0;
    border-radius : 2px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

`;

const BtnStyle1 = {
  fontSize : '12px',
  color : '#878787',
}
const BtnStyle2 = {
  fontSize : '15px',
  color : '#2874f0',
  textAlign : 'center',
  cursor : 'pointer',
}


export const Login = ({ open, setOpen }) => {



  //handle login or signup
  const initialState = {
    login : {
      view : 'login',
      Heading : 'Login',
      SubHeading : "Get access to your Orders, Whislist and Recommendations"
    },
    signup : {
      view : 'signup',
      Heading : "Looks like you're new here",
      SubHeading : "Sign up with your mobile number to get started",
    }
  }
  const [loginStatus , setLoginStatus] = useState(initialState.login);


  const HandleClose = ()=> {
    setOpen(false);
    setLoginStatus(initialState.login);
  }

  //handle Inputs
  const initialData = {
    username : '',
    email : '',
    phone : '',
    password : '',
  }
  const [userdata,setUserData] = useState(initialData);
  const [formErrors , setFormError] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  
  const HandleInputData = (e) => {
    // console.log(e.target.value);
    setUserData({...userdata, [e.target.name] : e.target.value});
    setUserData({...userdata, [e.target.name] : e.target.value});
    setUserData({...userdata, [e.target.name] : e.target.value});
    setUserData({...userdata, [e.target.name] : e.target.value});
  }
  console.log(userdata);

  const regesterFn = () => {
    setFormError(validateFn(userdata));
    setIsFormSubmitted(true);
    setUserData(initialData);
 
    // setLoginStatus(initialState.login);
  }
  const validateFn = (inputValue)=>{
    const errors = {};
    if(!inputValue.username){
      errors.username = "Username is required";
    }
    if(!inputValue.email){
      errors.email = "Email is required";
    }
    if(!inputValue.phone){
      errors.phone = "Contact no. is required";
    }else if(inputValue.phone.length > 10 || inputValue.phone.length < 10){
      errors.phone = "Invalid Contact no.";
    }

    if(!inputValue.password){
      errors.password = "Password is required";
    }else if(inputValue.password.length < 6){
      errors.password = "Password must have more than 4 characters";
    } 
    return errors;
    
  }  
  // console.log(formErrors)

   return (

    <>
      <Dialog open={open} onClose={HandleClose}  >
     
     <ContainerBox>
       <LeftBox>
         <TextStyleH1 variant='h4'>{loginStatus.Heading}
           
         </TextStyleH1>
        
         <TextStyleH6 variant='h6'>
           {loginStatus.SubHeading}
         
         </TextStyleH6>
         
       </LeftBox>
       {
         isFormSubmitted ? 
         <>Thanks</>
         :
           loginStatus.view === 'login' ? 
           <RightBox>
           <TextField id="standard-basic" label="Email" variant="standard" />
           <TextField id="standard-basic" label="Password" variant="standard" />
           <Typography style={BtnStyle1}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
           <LoginBtn variant='contained'>Login</LoginBtn>
           <Typography style={{textAlign : 'center' , fontSize : '12px', }} >OR</Typography>
           <RequestOTP variant='contained'>Request OTP</RequestOTP>
           <Typography  style={BtnStyle2} onClick={()=> setLoginStatus(initialState.signup)}>New to Flipkart? Create an account</Typography>
         </RightBox>
         :
         <RightBox>
           
         <TextField id="standard-basic" onChange={HandleInputData} value={userdata.username} name='username' label="Enter Name" variant="standard" />
         {formErrors.username && <p style={{color: 'red' ,marginBottom :'-8px',paddingBottom : '2px',marginTop :'8px', fontSize : '12px',fontWeight : '500'}}> {formErrors.username}</p>}
         <TextField id="standard-basic" onChange={HandleInputData} value={userdata.email} name='email' label="Email" variant="standard" />
         {formErrors.email && <p style={{color: 'red' ,marginBottom :'-8px',paddingBottom : '2px',marginTop :'8px', fontSize : '12px',fontWeight : '500'}}> {formErrors.email}</p>}
         <TextField id="standard-basic" onChange={HandleInputData} value={userdata.phone} name='phone' label="Phone" variant="standard" />
         {formErrors.phone && <p style={{color: 'red' ,marginBottom :'-8px',paddingBottom : '2px',marginTop :'8px', fontSize : '12px',fontWeight : '500'}}> {formErrors.phone}</p>}
         <TextField id="standard-basic" onChange={HandleInputData} value={userdata.password} name='password' label="Password" variant="standard" />
         {formErrors.password && <p style={{color: 'red' ,marginBottom :'8px',paddingBottom : '2px',marginTop :'8px', fontSize : '12px',fontWeight : '500'}}> {formErrors.password}</p>}
         
         <LoginBtn variant='contained' onClick={regesterFn}>Continue</LoginBtn>
         
      
       </RightBox>
         }
       
     </ContainerBox>
    
   </Dialog>
    
    </>

  )
}
