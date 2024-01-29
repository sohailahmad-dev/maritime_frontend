import React from 'react'
import './SignIn.css'
import InputField from '../../components/inputField/InputField'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/btn/Btn';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="signInLeft" data-aos="fade-right">
                <div className="heading1" style={{ marginBottom: '30px' }}>SIGN IN</div>
                {/* <InputField icon={AccountCircleIcon} placeholder="Full Name" /> */}
                <InputField icon={EmailIcon} placeholder="Email" />
                <InputField icon={LockOpenIcon} placeholder="Password" isPassword={true} />
                <SelectBox label="Select Role" options={['Student', 'Employer', 'Admin', 'Job Seeker']} />
                <Btn label='Login' onClick={() => navigate('/')} />
                <div className="text1 accountSignIn">
                    Don't have an account?
                    <span onClick={() => navigate('/SignUp')} > Sign Up</span>
                </div>
            </div>
            <div className="signInRight" data-aos="fade-left">
                <div className="heading2" style={{ color: 'white' }}>Welcome Back</div>
                <div className="text1">Welcome! Your journey begins here. Sign in with a smile, and let's create beautiful moments together.</div>
            </div>
        </div>
    )
}
