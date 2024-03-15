import { Add, AutoAwesome, Brightness2, CloudUpload, FourK, LightMode, ShoppingBag, SportsEsports} from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

const InsertProducts = ()=>{

    // Manage state for form theme change
    const[isTheme,setIsTheme] = useState(false);
    const themeClick = ()=>{
        setIsTheme(!isTheme);
    }

    // Manage States for file upload button and show the filename on uploading
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        //Take the first file from the array, files[0] then its name
        setFileName(event.target.files[0].name); // Update file name
    };

    return(
        <div className="container-fluid">
            <header className="m-1 p-1 text-center" style={{border:"3px solid #F98866",color:"#F98866",backgroundColor:"#A1BE95"}}>
                <h4 className="fst-italic font-monospace fw-bolder"><ShoppingBag/> Insert Product Information Here</h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Insert Form Here */}
                <Card elevation={4} className="mt-3" style={!isTheme ? {backgroundColor:"#A1BE95",color:"#F98866"} : {backgroundColor:"#F98866",color:"#A1BE95"}}>
                    {/* Card Header */}
                    <CardHeader 
                        action = {
                            <IconButton onClick={themeClick} color="inherit">
                                {!isTheme ? <LightMode/> : <Brightness2/>}
                            </IconButton>
                        }
                        title = {<b className="fs-5 fst-italic font-monospace fw-bolder">Product Insertion Form</b>}
                    />
                    {/* Make the Form in the Card Body */}
                    <CardContent className="mt-2 card-body">
                        <form encType="multipart/form-data" action="https://mern3-node-mongo.onrender.com/insertProducts" method="POST">
                            <div className="mt-1 mb-3">
                                <TextField
                                    required
                                    type="number"
                                    name = "id"
                                    variant="outlined"
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F98866',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F98866', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#A1BE95',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#A1BE95', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Product ID"    
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#F98866' : '#A1BE95' // Set the color of the input text
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
                                            borderColor: '#F98866',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F98866',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F98866', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#A1BE95',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#A1BE95', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            }  
                                        },
                                    } }
                                    label="Product Name"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#F98866' : '#A1BE95' // Set the color of the input text
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
                                    label="Product Price"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#F98866' : '#A1BE95' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F98866',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F98866', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#A1BE95',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#A1BE95', // Label color when focused
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
                                    name = "category"
                                    type="text"
                                    variant="outlined"
                                    label="Product Category"
                                    InputProps={{ 
                                        className : "font-monospace",
                                        style: {
                                            color: !isTheme ? '#F98866' : '#A1BE95' // Set the color of the input text
                                        }
                                    }}
                                    fullWidth
                                    sx={!isTheme ? {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#F98866',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#F98866',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#F98866', // Label color when focused
                                                fontFamily : `monospace`,
                                                fontWeight : `bold`
                                            } 
                                        },
                                    } : {
                                        '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#A1BE95',
                                        },
                                        },
                                        '& .MuiInputLabel-root': {
                                            color: '#A1BE95',
                                            fontFamily : `monospace`,
                                            fontWeight : `bold`,
                                            '&.Mui-focused': {
                                                color: '#A1BE95', // Label color when focused
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
                                        style={!isTheme ? {backgroundColor:"#F98866",color:"#A1BE95"} : {backgroundColor:"#A1BE95",color:"#F98866"}}
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
                                <Button  style={!isTheme ? {backgroundColor:"#F98866",color:"#A1BE95"} : {backgroundColor:"#A1BE95",color:"#F98866"}} variant="contained" className="text-center w-50 fs-5 font-monospace fw-bolder" type="submit"><Add/>Insert</Button>
                            </div>
                        </form>
                    </CardContent>   
                </Card>
            </Container>
        </div>
    )
}
export default InsertProducts;
