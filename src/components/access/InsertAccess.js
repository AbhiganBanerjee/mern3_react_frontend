import { Add, AutoAwesome, Brightness2, CloudUpload, FourK, Keyboard, LightMode, SportsEsports} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertAccess = ()=>{

    //Manage state for form theme change
    const[isTheme,setIsTheme] = useState(false);
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
            <header className="m-1 p-1 text-center" style={{border:"3px solid #735DA5",color:"#735DA5",backgroundColor:"#D3C5E5"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><Keyboard/> Insert Access Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className="mt-3" style={!isTheme ? {backgroundColor:"#D3C5E5",color:"#735DA5"} : {backgroundColor:"#735DA5",color:"#D3C5E5"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Access Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="https://mern3-node-mongo.onrender.com/insertAccess" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name="id"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#735DA5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#735DA5', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#D3C5E5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#D3C5E5', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="ID"    
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#735DA5' : '#D3C5E5' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name="name"
                                    type="text"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#735DA5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#735DA5', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#D3C5E5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#D3C5E5', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Name"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#735DA5' : '#D3C5E5' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name="price"
                                    type="number"
                                    variant="outlined"
                                    label="Price"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#735DA5' : '#D3C5E5' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#735DA5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#735DA5', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#D3C5E5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#D3C5E5', // Label color when focused
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
                                    name="category"
                                    type="text"
                                    variant="outlined"
                                    label="Category"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#735DA5' : '#D3C5E5' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#735DA5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#735DA5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#735DA5', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#D3C5E5',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#D3C5E5',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#D3C5E5', // Label color when focused
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
                                        style={!isTheme ? {backgroundColor:"#735DA5",color:"#D3C5E5"} : {backgroundColor:"#D3C5E5",color:"#735DA5"}}
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
                            <div className="text-center mt-4 mb-3">
                                <Button  style={!isTheme ? {backgroundColor:"#735DA5",color:"#D3C5E5"} : {backgroundColor:"#D3C5E5",color:"#735DA5"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertAccess;
