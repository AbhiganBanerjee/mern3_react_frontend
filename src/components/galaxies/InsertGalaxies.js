import { Add, AutoAwesome, Brightness2, CloudUpload, LightMode} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertGalaxies = ()=>{

    //Manage state for form theme change
    const[isTheme,setIsTheme] = useState();
    const themeClick = ()=>{
        setIsTheme(!isTheme);
    }

    //Manage States for file upload button and show the filename on uploading
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        //Take the first file from the array, files[0] then its name
        setFileName(event.target.files[0].name); // Update file name
    };

    return(
        <div className="container-fluid">
            <header className="m-1 p-1 text-center text-white" style={{border:"3px solid white",backgroundColor:"black"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><AutoAwesome/> Insert Galaxies Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className={!isTheme ? "mt-3  text-white" : "mt-3"} style={!isTheme ? {backgroundColor:"black"} : {backgroundColor:"white",color:"black"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Galaxy Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="https://mern3-node-mongo.onrender.com/insertGalaxies" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name = "id"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'black', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Galaxy ID"    
                                    InputProps={ !isTheme ? { className: 'font-monospace  text-white' } :{ className: 'font-monospace text-dark' } }
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name = "name"
                                    type="text"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold` ,
                                            '&.Mui-focused': {
                                                color: 'black', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } }
                                    label="Galaxy Name"
                                    InputProps={ !isTheme ? { className: 'font-monospace  text-white' } :{ className: 'font-monospace text-dark' } }
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name = "type"
                                    type="text"
                                    variant="outlined"
                                    label="Galaxy Type"
                                    InputProps={ !isTheme ? { className: 'font-monospace  text-white' } :{ className: 'font-monospace text-dark' } }
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'black', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }    
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name = "distance"
                                    type="text"
                                    variant="outlined"
                                    label="Distance From Earth"
                                    InputProps={ !isTheme ? { className: 'font-monospace  text-white' } :{ className: 'font-monospace text-dark' } }
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'white',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'white',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'white',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'white', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'black',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'black',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'black',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'black', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }    
                                />
                            </div>
                            <div className="text-center mt-4 mb-3">
                                <input
                                    type="file"
                                    accept="image/*"   
                                    style={{ display: 'none' }}
                                    id="upload-button"
                                    name="image"
                                    onChange={handleFileChange}
                                    required
                                />
                                <label htmlFor="upload-button" >
                                    <Button
                                        size="small"
                                        variant="contained"
                                        component="span"
                                        startIcon={<CloudUpload />}
                                        className="w-100 font-monospace"
                                        style={!isTheme ? {backgroundColor:"white",color:"black"} : {backgroundColor:"black",color:"white"}}
                                    >
                                        <b>Upload Image</b>
                                    </Button>
                                </label>
                                {fileName && (
                                    <Typography variant="body1" component="p">
                                        Uploaded File: {fileName}
                                    </Typography>
                                )}
                            </div>
                            <div className="mt-4 text-center">
                                <Button  style={!isTheme ? {backgroundColor : "white",color:"black"} : {backgroundColor : "black",color:"white"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertGalaxies;