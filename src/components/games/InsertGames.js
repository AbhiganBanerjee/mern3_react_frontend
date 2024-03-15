import { Add, AutoAwesome, Brightness2, CloudUpload, LightMode, SportsEsports} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertGames = ()=>{

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
            <header className="m-1 p-1 text-center" style={{border:"3px solid #101820",color:"#101820",backgroundColor:"#FEE715"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><SportsEsports/> Insert Games Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className="mt-3" style={!isTheme ? {backgroundColor:"#FEE715",color:"#101820"} : {backgroundColor:"#101820",color:"#FEE715"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Game Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="http://localhost:4000/insertGames" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name = "id"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#101820',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#101820',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#101820', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#FEE715',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#FEE715', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Game ID"    
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#101820' : '#FEE715' // Set the color of the input text
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
                                            borderColor: '#101820',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#101820',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#101820',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#101820', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#FEE715',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#FEE715', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Game Name"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#101820' : '#FEE715' // Set the color of the input text
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
                                    label="Game Price"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#101820' : '#FEE715' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#101820',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#101820',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#101820', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#FEE715',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#FEE715', // Label color when focused
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
                                    name = "publisher"
                                    type="text"
                                    variant="outlined"
                                    label="Publishers"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#101820' : '#FEE715' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#101820',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#101820',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#101820',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#101820', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#FEE715',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#FEE715',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#FEE715', // Label color when focused
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
                                        style={!isTheme ? {backgroundColor:"#101820",color:"#FEE715"} : {backgroundColor:"#FEE715",color:"#101820"}}
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
                                <Button  style={!isTheme ? {backgroundColor : "#101820",color:"#FEE715"} : {backgroundColor : "#FEE715",color:"#101820"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertGames;