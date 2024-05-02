import { Grid, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './AdminProfile.css'
import { getData } from '../../../../config/apiCalls';
import Btn from '../../../../components/btn/Btn';
import InputField from '../../../../components/inputField/InputField';
import CancelIcon from '@mui/icons-material/Cancel';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import SelectBox from '../../../../components/selectBox/SelectBox';


export default function AdminProfile() {
    let [userData, setUserData] = useState({});
    let [usersData, setUsersData] = useState([]);
    let [adminData, setAdminData] = useState({});
    let [openEditUserModal, setOpenEditUserModal] = useState(false);
    let [editUserObj, setEditUserObj] = useState({});



    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error');
    let [snackMsg, setSnackMsg] = useState('');
    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }

    const getUsers = async () => {
        setIsLoading(true)
        getData(`admins`).then((response) => {
            if (response.success) {
                setIsLoading(false)
                setUsersData(response.data)
            } else {
                setSnackMsg(response.message);
                setOpenSnack(true);
                setIsLoading(false)
            }
        })
            .catch((error) => {
                setSnackMsg(error.message ?? "Network Error");
                setOpenSnack(true);
                setIsLoading(false)
            });
    }

    useEffect(() => {
        getUsers();
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const data = JSON.parse(storedUserData);
            setUserData(data);
        }
    }, [])


    useEffect(() => {
        let currentUser = usersData.filter((user) => user?.email === userData?.email)
        if (currentUser && currentUser.length > 0) {
            setAdminData(currentUser[0])
            console.log(currentUser[0])
        }
    }, [usersData])

    const addData1 = (key, val) => {
        editUserObj[key] = val;
        setDataObj({ ...editUserObj });
    }

    const editUser = () => {
        setEditUserObj(adminData)
        setOpenEditUserModal(true)
    }

    const handleEditUser = () => {
        setIsLoading(true)
        const { username, email, password, role, user_id, user_gender, user_age } = editUserObj;
        if (username && email && password && role && user_id && user_gender && user_age) {
            // api call 
            putData(`update_user/${user_id}`, editUserObj).then((response) => {
                if (response.success) {
                    setOpenEditUserModal(false);
                    getUsers();
                    setSnackMsg(response.msg);
                    setOpenSnack(true);
                    setSeverity('success');
                    setIsLoading(false);
                    getUsers()
                } else {
                    setSnackMsg(response.msg);
                    setOpenSnack(true);
                    setIsLoading(false)
                }
            })
                .catch((error) => {
                    setSnackMsg(error.msg ?? "Network Error");
                    setOpenSnack(true);
                    setIsLoading(false)
                });
        } else {
            setSnackMsg('Required Fields are missing!')
            setOpenSnack(true)
            setIsLoading(false)
        }
    }


    const editUserModal = () => {
        return (
            <Modal open={openEditUserModal}>
                <div className='ap-userModal-style' >
                    <div className='ap-userModal-content' style={{paddingTop:'250px'}}>
                        <div
                            onClick={() => setOpenEditUserModal(false)}
                            className='ap-modal-cancel-icon'><CancelIcon /></div>
                        <InputField
                            icon={AccountCircleIcon}
                            placeholder="Full Name"
                            onChange={(e) => addData1("username", e.target.value)}
                            value={editUserObj?.username}
                        />
                        <InputField
                            icon={EmailIcon}
                            placeholder="Email"
                            onChange={(e) => addData1("email", e.target.value)}
                            value={editUserObj?.email}
                        />
                        <InputField
                            icon={EventIcon}
                            placeholder="Age"
                            inputType='number'
                            onChange={(e) => addData1("user_age", e.target.value)}
                            value={editUserObj?.user_age}
                        />
                        <InputField
                            icon={EmailIcon}
                            placeholder="Email"
                            onChange={(e) => addData1("email", e.target.value)}
                            value={editUserObj?.email}
                        />
                        <InputField
                            icon={EventIcon}
                            placeholder="Age"
                            inputType='number'
                            onChange={(e) => addData1("user_age", e.target.value)}
                            value={editUserObj?.user_age}
                        />
                        <InputField
                            icon={LockOpenIcon}
                            placeholder="Password"
                            isPassword={true}
                            onChange={(e) => addData1("password", e.target.value)}
                            value={editUserObj?.password}
                        />
                        <SelectBox
                            label="Select Gender"
                            options={['Male', 'Female']}
                            onSelect={(val) => addData1("user_gender", val)}
                            selected={editUserObj?.user_gender}

                        />
                        <SelectBox
                            label="Select Role"
                            options={['Student', 'Employer', 'Job Seeker', 'Admin']}
                            onSelect={(val) => addData1("role", val)}
                            selected={editUserObj?.role}
                        />
                        <Btn
                            label='Save Changes'
                            onClick={handleEditUser}
                        />
                    </div>
                </div>
            </Modal >
        )
    }

    return (
        <div className='ap-table-data' >
            <div className="profile-heading">Profile Details</div>
            <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>Admin ID: </span>
                        {adminData?.admin_id}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>User ID: </span>
                        {adminData?.user_id}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>Username: </span>
                        {adminData?.username}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>First Name: </span>
                        {adminData?.first_name}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>Last Name: </span>
                        {adminData?.last_name}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>Email: </span>
                        {adminData?.email}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>Password: </span>
                        {adminData?.password}
                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <div className="profile-item">
                        <span>Contact Number: </span>
                        {adminData?.contact_number}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="profile-item">
                        <span>Role Description: </span>
                        {adminData?.role_description}
                    </div>
                </Grid>
                <Grid item xs={12} >
                    <div style={{ textAlign: 'center' }}>
                        <Btn
                            label='Edit Profile'
                            className="ap-edit-btn"
                            onClick={editUser} />
                    </div>
                </Grid>
            </Grid>
            {editUserModal()}
        </div>
    )
} 
