import { Box, TextField, Button, styled, Typography } from '@mui/material';
import { useState } from 'react';

import { API } from '../../service/api.js';

const Component = styled(Box)`
width:400px;
margin: auto;
box-shadow: 5px 2px 5px 2px rgb ( 0 0 0/ 0.6);
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(228,250,255,1) 26%, rgba(199,246,255,1) 55%, rgba(219,249,255,1) 72%, rgba(255,255,255,1) 89%, rgba(255,255,255,1) 100%);

`
const LoginButton = styled(Button)`
text-transform: none;
height:28px;

`
const SignupButton = styled(Button)`
text-transform: none;
height:28px;
`

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex:1;
flex-direction: column;
&>div, &>Button, &>p {
    margin-top:20px;
}
`
const signupInitialValues = {
    name: ' ',
    username: ' ',
    password: ' ',
}



const Login = () => {
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.value]: e.target.name });
    }
    const signupUser = async () => {
        console.log("hello");
      await API.userSignup(signup);
    }
    return (
        <Component> <Box>
            <Image src={imageURL} alt="login" />
            {
                account === 'login' ?
                    <Wrapper>
                        <TextField id="outlined-basic" label="Username" variant="standard" />
                        <TextField id="outlined-basic" label="Password" variant="standard" />

                        <LoginButton variant="contained">Login</LoginButton>
                        <Typography>or</Typography>
                        <SignupButton onClick={() => toggleSignup()} variant="outlined">Signup</SignupButton>
                    </Wrapper>

                    :
                    <Wrapper>
                        <TextField id="outlined-basic" onChange={(e) => onInputChange(e)} name="Name" label="Name" variant="standard" />
                        <TextField id="outlined-basic" onChange={(e) => onInputChange(e)} name="Username" label="Username" variant="standard" />
                        <TextField id="outlined-basic" onChange={(e) => onInputChange(e)} name="Password" label="Password" variant="standard" />

                        <LoginButton onClick={() => signupUser()} variant="contained">Signup</LoginButton>
                        <Typography>or</Typography>
                        <SignupButton onClick={() => toggleSignup()} variant="outlined">Already Have an account</SignupButton>
                    </Wrapper>

            }
        </Box>
        </Component>
    )
}
export default Login;