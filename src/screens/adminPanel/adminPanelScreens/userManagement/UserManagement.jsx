import React, { useEffect, useState } from 'react'
// import '../dashboard/Dashboard.css'
import '../../Dashboard.css'
// import avatar from '../../../assets/img/avatar.png'
// import search from '../../../assets/img/search.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, FormControl, Grid, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import { deleteData, getData, postData, putData } from '../../../../config/apiCalls';
// import Snack from '../../../components/snack/Snack';
// import Loader from '../../../components/loader/Loader';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InputField from '../../../../components/inputField/InputField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AccountCircleIcon from '../../../assets/img/accountIcon.png'
// import passwordIcon from '../../../assets/img/passwordIcon.png'
// import EmailIcon from '../../../assets/img/mailIcon.png'
// import Btn from '../../../components/btn/Btn';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import CancelIcon from '@mui/icons-material/Cancel';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import EventIcon from '@mui/icons-material/Event';
import Snack from '../../../../components/snack/Snack';
import Loader from '../../../../components/loader/Loader';
import Btn from '../../../../components/btn/Btn';
import SelectBox from '../../../../components/selectBox/SelectBox';

export default function UserManagement() {

    let [userData, setUserData] = useState({});
    let [pageNumber, setPageNumber] = useState(1);
    let [totalUsers, setTotalUsers] = useState(0);
    let [limit, setLimit] = useState(0)
    let [usersData, setUsersData] = useState([]);
    let [usersData1, setUsersData1] = useState([
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Ali',
            email: 'soh@gmail.com',
            role: 'employer',
            user_age: 42,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Ali',
            email: 'soh@gmail.com',
            role: 'employer',
            user_age: 42,
            user_gender: 'male',
        },
        {
            username: '2nd Page',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 2,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Ali',
            email: 'soh@gmail.com',
            role: 'employer',
            user_age: 42,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Ali',
            email: 'soh@gmail.com',
            role: 'employer',
            user_age: 42,
            user_gender: 'male',
        },
        {
            username: '3rd',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
        {
            username: 'Sohail',
            email: 'soh@gmail.com',
            role: 'student',
            user_age: 22,
            user_gender: 'male',
        },
    ]);
    let [openCreateUserModal, setOpenCreateUserModal] = useState(false)
    let [openEditUserModal, setOpenEditUserModal] = useState(false)
    const [dataObj, setDataObj] = useState({
        email: "",
        password: "",
        role: "",
        user_age: "",
        user_gender: "",
        username: "",
    });
    let [editUserObj, setEditUserObj] = useState({});
    let [roles, setRoles] = useState([]);
    let [openAssignRoleModal, setOpenAssignRoleModal] = useState(false);

    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');

    const getUsers = () => {
        setIsLoading(true)
        getData(`users`).then((response) => {
            if (response.success) {
                // console.log(response.data)
                setUsersData(response?.data)
                setTotalUsers(response?.data.length)
                setIsLoading(false)
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
    }, [])

    // pagination 

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [usersToRender, setUsersToRender] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentUsers = usersData?.slice(startIndex, endIndex);
        // console.log(currentUsers)
        setUsersToRender(currentUsers);

    }, [currentPage, usersData]);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(usersData.length / itemsPerPage)) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
        else {
            setSnackMsg('Your are already at the last page.');
            setOpenSnack(true);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
        else {
            setSnackMsg('Your are already at the first page.');
            setOpenSnack(true);
        }
    };

    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === Math.ceil(usersData?.length / itemsPerPage);


    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }


    useEffect(() => {
        const storedUserData = localStorage.getItem("user");
        if (storedUserData) {
            const data = JSON.parse(storedUserData);
            setUserData(data)
        }
    }, [])





    const deleteUser = (id) => {
        setIsLoading(true)
        deleteData(`/user/${id}`).then((response) => {
            if (response.success) {
                setSnackMsg(response.message);
                setOpenSnack(true);
                setSeverity('success');
                getUsers();
                setIsLoading(false);
            } else {
                setSnackMsg(response.message);
                setOpenSnack(true);
                setIsLoading(false);
            }
        })
            .catch((error) => {
                setSnackMsg("Network Error ", error.message);
                setOpenSnack(true);
                setIsLoading(false);
            });
    }

    const handleCreateUser = () => {
        setIsLoading(true)
        const { username, password, email, role, user_age, user_gender } = dataObj;
        if (username && password && email && role && user_age && user_gender) {
            // api call 
            postData('create_user', dataObj).then((response) => {
                console.log(response)
                if (response) {
                    setOpenCreateUserModal(false);
                    getUsers();
                    setSnackMsg(response.msg);
                    setOpenSnack(true);
                    setSeverity('success');
                    setIsLoading(false);
                } else {
                    setSnackMsg(response.message);
                    setOpenSnack(true);
                    setIsLoading(false)
                }
            })
                .catch((error) => {
                    console.log(error)
                    setSnackMsg("Network Error");
                    setOpenSnack(true);
                    setIsLoading(false)
                });
        } else {
            setSnackMsg('Required Fields are missing!')
            setOpenSnack(true)
            setIsLoading(false)
        }
    }

    const setInpValue = (key, value) => {
        userObj[key] = value;
        setUserObj({ ...userObj })
    }

    const addData = (key, val) => {
        dataObj[key] = val;
        setDataObj({ ...dataObj });
    }



    const createUserModal = () => {
        return (
            <Modal open={openCreateUserModal}>
                <div className='ap-userModal-style'  >
                    <div className='ap-userModal-content'>
                        <div
                            onClick={() => setOpenCreateUserModal(false)}
                            className='ap-modal-cancel-icon'><CancelIcon /></div>
                        <InputField
                            icon={AccountCircleIcon}
                            placeholder="Full Name"
                            onChange={(e) => addData("username", e.target.value)}
                        />
                        <InputField
                            icon={EmailIcon}
                            placeholder="Email"
                            onChange={(e) => addData("email", e.target.value)}
                        />
                        <InputField
                            icon={EventIcon}
                            placeholder="Age"
                            inputType='number'
                            onChange={(e) => addData("user_age", e.target.value)}
                        />
                        <InputField
                            icon={LockOpenIcon}
                            placeholder="Password"
                            isPassword={true}
                            onChange={(e) => addData("password", e.target.value)}
                        />
                        <SelectBox
                            label="Select Gender"
                            options={['Male', 'Female']}
                            onSelect={(val) => addData("user_gender", val)}
                        />
                        <SelectBox
                            label="Select Role"
                            options={['Student', 'Employer', 'Job Seeker']}
                            onSelect={(val) => addData("role", val)}
                        />
                        <Btn
                            label='Create User'
                            onClick={handleCreateUser}
                        />
                    </div>
                </div>
            </Modal >
        )
    }



    const addData1 = (key, val) => {
        editUserObj[key] = val;
        setDataObj({ ...editUserObj });
    }

    const editUser = (item) => {
        setEditUserObj(item)
        setOpenEditUserModal(true)
    }

    const handleEditUser = () => {
        setIsLoading(true)
        const { username, email, password, role, user_id, user_gender, user_age } = editUserObj;
        if (username && email && password && role && user_id && user_gender && user_age) {
            // api call 
            putData(`update_user/${user_id}`, editUserObj).then((response) => {
                if (response.success) {
                    console.log("Response", response)
                    setOpenEditUserModal(false)
                    setSnackMsg(response.message);
                    setOpenSnack(true);
                    setSeverity('success');
                    setIsLoading(false);
                    getUsers()
                } else {
                    console.log("Response Error", response)
                    setSnackMsg(response.message);
                    setOpenSnack(true);
                    setIsLoading(false)
                }
            })
                .catch((error) => {
                    console.log("Error", error)
                    setSnackMsg(error.msg);
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
                    <div className='ap-userModal-content'>
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
                            options={['Student', 'Employer', 'Job Seeker']}
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

    const assignRole = (id) => {
        setOpenAssignRoleModal(true);
        setIdForRole(id)
    }

    let [role, setRole] = useState('');
    let [idForRole, setIdForRole] = useState('')

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const assignRoleModal = () => {
        return (
            <Modal open={openAssignRoleModal}>
                <div className='ap-userModal-style' >
                    <div className='ap-userModal-content'>
                        <div
                            onClick={() => setOpenAssignRoleModal(false)}
                            className='ap-modal-cancel-icon'><CancelIcon /></div>
                        <Box sx={{ width: '90%', margin: '30px 0px' }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    label="Role"
                                    onChange={handleChange}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item) => {
                                            return (
                                                <MenuItem key={item?._id} value={item?.name}>{item?.name}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Box>

                        <Btn label='Assign Role' onClick={handleAssignRole} />
                    </div>
                </div>
            </Modal >
        )
    }

    const handleAssignRole = () => {
        setIsLoading(true)
        const roleObj = {
            userId: idForRole,
            name: role
        }
        if (idForRole && role) {
            // api call 
            postData('/assign-role', roleObj).then((response) => {
                if (response.success) {
                    setOpenAssignRoleModal(false)
                    setSnackMsg(response.message);
                    setOpenSnack(true);
                    setSeverity('success');
                    setIsLoading(false);
                    getUsers();
                } else {
                    setSnackMsg(response.message);
                    setOpenSnack(true);
                    setIsLoading(false)
                }
            })
                .catch((error) => {
                    setSnackMsg(error.message);
                    setOpenSnack(true);
                    setIsLoading(false)
                });
        } else {
            setSnackMsg('Required Fields are missing!')
            setOpenSnack(true)
            setIsLoading(false)
        }
    }



    // const getRoles = () => {
    //     setIsLoading(true)
    //     getData(`/role?page=${1}`).then((response) => {
    //         if (response.success) {
    //             setRoles(response.roles)
    //             setIsLoading(false)
    //         } else {
    //             setSnackMsg(response.message);
    //             setOpenSnack(true);
    //             setIsLoading(false)
    //         }
    //     })
    //         .catch((error) => {
    //             setSnackMsg("Network Error2 ", error.message);
    //             setOpenSnack(true);
    //             setIsLoading(false)
    //         });
    // }

    // useEffect(() => {
    //     getRoles();
    // }, [])


    return (
        <div className='dashboard-ap'>
            <div className="ap-upperMost">
                <div className="dashboard-pd">
                    {/* <img src={avatar} alt="avatar" /> */}
                    <div>
                        <div className="dashboard-pd-heading">
                            <span>Hello, </span>{userData?.username ?? "Admin"}
                        </div>
                        <div className="dashboard-pd-subHeading">Check your activities in this dashboard.</div>
                    </div>
                </div>
                <div>
                    <div onClick={() => setOpenCreateUserModal(true)} className="ap-add-user-btn">Add User</div>
                </div>
            </div>

            <div className="ap-table-data">
                <div className="ap-table-data-header">
                    <div>
                        <div className="ap-table-data-heading">All Users</div>
                        <div className="ap-table-data-subHeading">Total Users : {totalUsers}</div>
                    </div>
                    {/* <div className='ap-table-data-header-right'>
                        <div className="ap1-searchBox">
                            <img src={search} alt="search" />
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="ap1-selectBox">
                            <span> Sort by : </span>
                            Newest  <KeyboardArrowDownIcon />
                        </div>
                    </div> */}
                </div>
                <div className="table-data-headings-Box">
                    <Grid container spacing={3}>
                        <Grid item sm={1.25}>
                            <div className="table-data-heading">
                                User ID
                            </div>
                        </Grid>
                        <Grid item sm={2}>
                            <div className="table-data-heading">
                                Username
                            </div>
                        </Grid>
                        <Grid item sm={2.25}>
                            <div className="table-data-heading">
                                Email
                            </div>
                        </Grid>
                        <Grid item sm={1.5}>
                            <div className="table-data-heading">
                                Password
                            </div>
                        </Grid>
                        <Grid item sm={1.5}>
                            <div className="table-data-heading">
                                Age
                            </div>
                        </Grid>
                        <Grid item sm={1.5}>
                            <div className="table-data-heading">
                                Role
                            </div>
                        </Grid>
                        <Grid item sm={2}>
                            <div className="table-data-heading">
                                Actions
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="table-data-content-box">
                    {usersToRender && usersToRender.length > 0 &&
                        usersToRender.map((item, index) => {
                            return (
                                <div key={index} className="table-data-content-item">
                                    <Grid container spacing={3}>
                                        <Grid item sm={1.25} xs={12}>
                                            <div className="table-data-item-text">
                                                <span>User ID: </span>
                                                {item?.user_id}
                                            </div>
                                        </Grid>
                                        <Grid item sm={2} xs={12}>
                                            <div className="table-data-item-text">
                                                <span>Username: </span>
                                                {item?.username}
                                            </div>
                                        </Grid>
                                        <Grid item sm={2.25} xs={12}>
                                            <div className="table-data-item-text">
                                                <span>Email: </span>
                                                {item?.email}
                                            </div>
                                        </Grid>
                                        <Grid item sm={1.5} xs={12}>
                                            <div className="table-data-item-text">
                                                <span>Password: </span>
                                                123456
                                            </div>
                                        </Grid>
                                        <Grid item sm={1.5} xs={12}>
                                            <div className="table-data-item-text">
                                                <span>Age: </span>
                                                {item?.user_age}
                                            </div>
                                        </Grid>
                                        <Grid item sm={1.5} xs={12}>
                                            <div className="table-data-item-text">
                                                <span>Role: </span>
                                                {item?.role}
                                            </div>
                                        </Grid>
                                        <Grid item sm={2} xs={12}>
                                            <div className="table-data-item-btns">
                                                {/* <div onClick={() => assignRole(item?._id)} className="ap-assign-btn">
                                                    Assign Role
                                                </div> */}
                                                <div onClick={() => editUser(item)} className="ap-edit-btn">
                                                    Edit
                                                </div>
                                                <div onClick={() => deleteUser(item?._id)}
                                                    className="ap-delete-btn">
                                                    Delete
                                                </div>


                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        })
                    }
                    {usersData && usersData.length > 0 &&
                        <div className='ap-pagination-style' >
                            <span onClick={handlePrevPage} ><ArrowBackIcon /></span>
                            <div> Page no.{currentPage} of {Math.ceil(usersData.length / itemsPerPage)}</div>
                            <span onClick={handleNextPage}><ArrowForwardIcon /></span>
                        </div>
                    }

                </div>
            </div>
            {createUserModal()}
            {editUserModal()}
            {assignRoleModal()}

            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
            <Loader isLoading={isLoading} />
        </div>
    )
}