import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, getData } from '../../../../config/apiCalls';
import Snack from '../../../../components/snack/Snack';
import Loader from '../../../../components/loader/Loader';
import { Grid } from '@mui/material';
import Card from '../../../../components/card/Card';

const CourseManagement = () => {
    let [courses, setCourses] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');

    const handleCloseSnack = () => {
        setOpenSnack(false);
        setSnackMsg('');
        setSeverity('error');
    }

    const getCourses = () => {
        setIsLoading(true)
        getData(`courses`).then((response) => {
            if (response.success) {
                console.log(response?.data)
                setCourses(response?.data)
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

    useEffect(()=>{
        getCourses();
    },[])

    // course creation handling 
  const [courseData, setCourseData] = useState({
    course_name: '',
    description: '',
    duration: '',
    instructor: ''
  });
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('course_name', courseData.course_name);
    formData.append('description', courseData.description);
    formData.append('duration', courseData.duration);
    formData.append('instructor', courseData.instructor);
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/course`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Course created successfully');
      setError('');
      console.log('Course created successfully', response.data);
      // Optionally, reset form fields here
      setCourseData({
        course_name: '',
        description: '',
        duration: '',
        instructor: ''
      });
      setFiles([]);
    } catch (error) {
      setMessage('');
      setError('Error creating course. Please try again.');
      console.error('Error creating course', error);
    }
  };

  return (
    <>
    <div className="heading1" data-aos="fade-up">All Courses</div>
    <div style={{margin:'20px 0px'}}>
    <Grid container spacing={5}>
        {courses && courses.length > 0 &&
        courses.map((e,i)=>{
            return(
                <Grid item key={i} sm={4} xs={12}>
                    <Card
                    name={e?.course_name}
                    description={e?.description}
                    duration={e?.duaration}
                    // img={e?.image_url}
                    />
                 </Grid>   
            )
        })
        }
    </Grid>
    </div>
                    
    {/* course creation form  */}
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Course Name:</label>
          <input type="text" name="course_name" style={{border:'1px solid black'}} value={courseData.course_name} onChange={handleChange} />
        </div>
        <br />
        <div>
          <label>Description:</label>
          <textarea name="description" value={courseData.description} onChange={handleChange} />
        </div>
        <div>
          <label>Duration:</label>
          <input type="text" name="duration" value={courseData.duration} onChange={handleChange} />
        </div>
        <div>
          <label>Instructor:</label>
          <input type="text" name="instructor" value={courseData.instructor} onChange={handleChange} />
        </div>
        <div>
          <label>Files:</label>
          <input type="file" name="files" multiple onChange={handleFileChange} />
        </div>
        <button type="submit">Create Course</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
    <Loader isLoading={isLoading} />
    </>
  );
};

export default CourseManagement;
