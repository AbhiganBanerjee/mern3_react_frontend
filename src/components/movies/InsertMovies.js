import { Add, Brightness2, CloudUpload, LightMode, MovieFilter} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertMovies = ()=>{

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
            <header className="m-1 p-1 text-center" style={{border:"3px solid #00246B",backgroundColor:"#CADCFC",color:"#00246B"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><MovieFilter/> Insert Movies Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className="mt-3" style={!isTheme ? {backgroundColor:"#CADCFC",color:"#00246B"} : {backgroundColor:"#00246B",color:"#CADCFC"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Movie Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="https://mern3-node-mongo.onrender.com/insertMovies" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name = "id"
                                    variant="outlined"
                                    //{backgroundColor:"#CADCFC",color:"#00246B"}
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#00246B',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#00246B', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CADCFC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CADCFC', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Movie ID"    
                                    InputProps={{
                                        
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#00246B' : '#CADCFC' // Set the color of the input text
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
                                            borderColor: '#00246B',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#00246B',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#00246B', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CADCFC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold` ,
                                            '&.Mui-focused': {
                                                color: '#CADCFC', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } }
                                    label="Movie Name"
                                    InputProps={{
                                        
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#00246B' : '#CADCFC' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                />
                            </div>
                            <div className="mt-4 mb-3">
                                <TextField
                                    required
                                    name = "type"
                                    type="text"
                                    variant="outlined"
                                    label="Movie Type"
                                    InputProps={{
                                        
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#00246B' : '#CADCFC' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#00246B',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#00246B', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CADCFC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CADCFC', // Label color when focused
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
                                    name = "director"
                                    type="text"
                                    variant="outlined"
                                    label="Movie Director"
                                    InputProps={{
                                        
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#00246B' : '#CADCFC' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#00246B',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#00246B',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#00246B', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#CADCFC',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#CADCFC',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#CADCFC', // Label color when focused
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
                                        style={!isTheme ? {backgroundColor:"#00246B",color:"#CADCFC"} : {backgroundColor:"#CADCFC",color:"#00246B"}}
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
                                <Button  style={!isTheme ? {backgroundColor : "#00246B",color:"#CADCFC"} : {backgroundColor : "#CADCFC",color:"#00246B"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertMovies;