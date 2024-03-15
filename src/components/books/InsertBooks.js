import { Add, AutoAwesome, Brightness2, CloudUpload, FourK, LightMode, MenuBook, SportsEsports} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertBooks= ()=>{

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
            <header className="m-1 p-1 text-center" style={{border:"3px solid #CC313D",color:"#CC313D",backgroundColor:"#F7C5CC"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><MenuBook/> Insert Books Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className="mt-3" style={!isTheme ? {backgroundColor:"#F7C5CC",color:"#CC313D"} : {backgroundColor:"#CC313D",color:"#F7C5CC"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Book Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="https://mern3-node-mongo.onrender.com/insertBooks" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name = "id"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CC313D',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CC313D', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F7C5CC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F7C5CC', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Book ID"    
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#CC313D' : '#F7C5CC' // Set the color of the input text
                                        }
                                    }}
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
                                            borderColor: '#CC313D',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CC313D',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CC313D', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F7C5CC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F7C5CC', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Book Name"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#CC313D' : '#F7C5CC' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name = "price"
                                    type="number"
                                    variant="outlined"
                                    label="Book Price"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#CC313D' : '#F7C5CC' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CC313D',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CC313D', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F7C5CC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F7C5CC', // Label color when focused
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
                                    name = "author"
                                    type="text"
                                    variant="outlined"
                                    label="Book Author"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#CC313D' : '#F7C5CC' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CC313D',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CC313D',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CC313D', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F7C5CC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F7C5CC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F7C5CC', // Label color when focused
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
                                        style={!isTheme ? {backgroundColor:"#CC313D",color:"#F7C5CC"} : {backgroundColor:"#F7C5CC",color:"#CC313D"}}
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
                                <Button  style={!isTheme ? {backgroundColor:"#CC313D",color:"#F7C5CC"} : {backgroundColor:"#F7C5CC",color:"#CC313D"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertBooks;
