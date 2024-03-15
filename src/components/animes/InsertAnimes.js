import { Add, AutoAwesome, Brightness2, CloudUpload, FourK, LightMode, SportsEsports} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertAnimes = ()=>{

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

    // style={{backgroundColor:"#FEE715",color:"#101820"}}

    return(
        <div className="container-fluid">
            <header className="m-1 p-1 text-center" style={{border:"3px solid maroon",color:"maroon",backgroundColor:"green"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><FourK/> Insert Anime Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className="mt-3" style={!isTheme ? {backgroundColor:"green",color:"maroon"} : {backgroundColor:"maroon",color:"green"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Anime Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="https://mern3-node-mongo.onrender.com/insertAnimes" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name = "id"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'maroon',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'maroon', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'green',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'green', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Anime ID"    
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? 'maroon' : 'green' // Set the color of the input text
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
                                            borderColor: 'maroon',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'maroon',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'maroon', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'green',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'green', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Anime Name"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? 'maroon' : 'green' // Set the color of the input text
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
                                    label="Anime Price"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? 'maroon' : 'green' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'maroon',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'maroon', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'green',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'green', // Label color when focused
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
                                    label="Anime Author"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? 'maroon' : 'green' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'maroon',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'maroon',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'maroon', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: 'green',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: 'green',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: 'green',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: 'green', // Label color when focused
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
                                        style={!isTheme ? {backgroundColor:"maroon",color:"green"} : {backgroundColor:"green",color:"maroon"}}
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
                                <Button  style={!isTheme ? {backgroundColor:"maroon",color:"green"} : {backgroundColor:"green",color:"maroon"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertAnimes;