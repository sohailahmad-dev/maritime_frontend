import React from 'react'
import './SignUp.css'
import InputField from '../../components/inputField/InputField'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EmailIcon from '@mui/icons-material/Email';
import SelectBox from '../../components/selectBox/SelectBox';
import Btn from '../../components/btn/Btn';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="signUpRight" data-aos="fade-left">
                <div className="heading1" style={{ marginBottom: '30px' }}>SIGN UP</div>
                <InputField icon={AccountCircleIcon} placeholder="Full Name" />
                <InputField icon={EmailIcon} placeholder="Email" />
                <InputField icon={LockOpenIcon} placeholder="Password" isPassword={true} />
                <SelectBox label="Select Role" options={['Student', 'Employer', 'Admin', 'Job Seeker']} />
                <Btn label='Create Account' />
                <div className="text1 accountSignIn">
                    Already have an account?
                    <span onClick={() => navigate('/SignIn')} > Sign In</span>
                </div>
            </div>
            <div className="signUpLeft" data-aos="fade-right">
                <div className="heading2" style={{ color: 'white' }}>Hello, Friend!</div>
                <div className="text1">Embark on a new adventure! Sign up and join our vibrant community. Together, let's build memories and share joy. </div>
            </div>
        </div>
    )
}
