import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navbar/Navbar'
import { Grid } from '@mui/material'
import Snack from '../../components/snack/Snack'
import Loader from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'
import { getData } from '../../config/apiCalls'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import JobCard from '../../components/jobCard/JobCard'




export default function Jobs() {
    let [jobs, setJobs] = useState([]);
    let [cardsToRender, setCardsToRender] = useState([]);
    const navigate = useNavigate();
  
    let [isLoading, setIsLoading] = useState(false);
    let [openSnack, setOpenSnack] = useState(false);
    let [severity, setSeverity] = useState('error')
    let [snackMsg, setSnackMsg] = useState('');
  
    const handleCloseSnack = () => {
      setOpenSnack(false);
      setSnackMsg('');
      setSeverity('error');
    }
    const getjobs = () => {
        setIsLoading(true)
        getData(`jobs`).then((response) => {
            if (response.success) {
                console.log(response?.data)
                setJobs(response?.data)
                setCardsToRender(response?.data)
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
        getjobs();
    }, [])

      const handleDetail = (course) => {
        navigate('/CardDetails', {
          state: course
        })
      }
    
     
      
    

    return (
        <div>
            <NavBar />
            <section>
                <div className="about-sec-5" style={{ paddingBottom: '20px' }}>
                    <div className="about-sec5-circle" data-aos="zoom-in"></div>
            <div style={{ height: '70px' }} />
                   
                    <div className="about-sec5-body">
                        <Grid container spacing={4}>
                            {cardsToRender && cardsToRender.map((e, i) => {
                                return (
                                    <Grid item key={i} xs={12}>
                                      <JobCard
                                        name={e?.job_title}
                                        job_description={e?.job_job_description}
                                        requirements={e?.requirements}
                                        location={e?.location}
                                        salary={e?.salary}
                                        postingDate={e?.PostingDate}
                                        expiryDate={e?.ExpiryDate}
                                    />
                                  </Grid>
                                )
                            })}


                        </Grid>
                    </div>
            <div style={{ height: '30px' }} />
                   
                </div>
            </section >
           
            <Footer/>
            <Snack msg={snackMsg} open={openSnack} onClose={handleCloseSnack} severity={severity} />
      <Loader isLoading={isLoading} />
        </div >
    )
}


