import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navbar/Navbar'
import { Grid } from '@mui/material'
import Snack from '../../components/snack/Snack'
import Loader from '../../components/loader/Loader'
import { useNavigate } from 'react-router-dom'
import { getData } from '../../config/apiCalls'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'




export default function Trainings() {
    let [programs, setPrograms] = useState([]);
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
    const getPrograms = () => {
        setIsLoading(true)
        getData(`programs`).then((response) => {
            if (response.success) {
                setPrograms(response?.data);
                setCardsToRender(response?.data);
                setIsLoading(false);
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
        getPrograms();
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
                                    <Grid item key={i} md={4} sm={6} xs={12}>
                                   <Card
                                        name={e?.program_name}
                                        description={e?.description}
                                        duration={e?.duaration}
                                        onDetail={() => handleDetail(e)}
                                         img={e?.img_url}
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


