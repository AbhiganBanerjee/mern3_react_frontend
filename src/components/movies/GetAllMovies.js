import { AddShoppingCart, Bookmark, BookmarkBorder, Check, ChevronLeft, ChevronRight, Close, Delete, DeleteOutline, Favorite, FavoriteBorder, MoreHoriz, Movie, PauseCircle, PlayCircle, ShoppingCart } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const GetAllMovies = ()=>{
    //Get all the Games
    const[games,setGames] = useState([{}]);
    const[idx,setIdx] = useState(0);
    const[len,setLen] = useState(0);
    const[timer,setTimer] = useState(0);

    useEffect(()=>{
        //Make the API call
        fetch("https://mern3-node-mongo.onrender.com/fetchMovies")
        .then((res)=>{
            return res.json();
        }).then((datas)=>{
            setGames(datas);
            setLen(datas.length);
        })
    },[idx,games]);//Dependencies must be given to change the image on id

    //manage states for managing the buttons
    const[isFav,setIsFav] = useState(false);
    const[isCart,setIsCart] = useState(false);
    const[isDel,setIsDel] = useState(false);
    const[isPp,setIsPp] = useState(false);
    const[isBook,setIsBook] = useState(false);

    //Manage states and methods for a seperate Dialog for Delete button
    const[openDelModal,setOpenDelModal] = useState(false);
    const[delModalTitle,setDelModalTitle] = useState("");
    const[delModalContent,setDelModalContent] = useState("");
    const[delProps,setDelProps] = useState(isDel);

    //Create a seperate function for performing the DELETE REST Request for clicking yes
    const handleDelete = ()=>{
        //Perform the deleltion call to the backend node server here

        //Open a modal and state that deletion is done
        setDialogOpen(true);
        setDialogTitle("Deleted");
        setDialogContent(`Selected ${games[idx].name} Item Deleted!!`);
        setProps(isDel);

        //We require to perform the call to the Server Side NodeJS script for deletion operation
        /*axios.delete(`http://localhost:4000/deleteGalaxy?name=${galaxies[idx].name}`)
        .then((res)=>{
            console.log(res.data);
        })*/
        fetch(`https://mern3-node-mongo.onrender.com/deleteMovie?name=${games[idx].name}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        

        //Now the modal will remain open so immediately close it after deletion
        setTimeout(()=>{
            handleDelModalClose();
        },100)

        //Change the flag isDel so that the del button toogles to normal
        setIsDel(!isDel);
    }
    const handleDelModalOpen = ()=>{
        setOpenDelModal(true);
        setDelModalTitle("Are you sure you want to delete?");
        setDelModalContent("This action cannot be undone. Are you sure you want to proceed?");
    }
    const handleDelModalClose = ()=>{
        setOpenDelModal(false);
        //Change the flag isDel so that the del button toogles to normal
        setIsDel(!isDel);
    }
    const DelDialog = ({delProps})=>{
        return(
            <Dialog open={openDelModal} onClose={handleDelModalClose}>
                <DialogTitle className="font-monospace fw-bolder fs-5 text-bg-warning">{delModalTitle}</DialogTitle>
                <DialogContent className="mt-3 font-monospace fw-bolder fs-6 text-danger">{delModalContent}</DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete} className="fs-6 font-monoscape fw-bolder" size="small" variant="contained" color="error"><Check/><b>&nbsp;Yes</b></Button>
                    &nbsp;
                    <Button onClick={handleDelModalClose} className="fs-6 font-monoscape fw-bolder" size="small" variant="contained" color="success"><Close/><b>&nbsp;No</b></Button>
                </DialogActions>
            </Dialog>
        )
    }

    //Manage states and functions for another custom general dialog
    const[dialogOpen,setDialogOpen] = useState(false);
    const[dialogTitle,setDialogTitle] = useState("");
    const[dialogContent,setDialogContent] = useState("");
    const[props,setProps] = useState(isFav);

    const handleDialogOpen = (msg)=>{
        setDialogOpen(true);
        switch(msg){
            case "fav":{
                if(!isFav){
                    //If it is not clicked then positive response
                    setProps(isFav);
                    setDialogTitle("Info");
                    setDialogContent("Added to Favourites.. :)");
                }else{
                    //Now someone again tapping on fav so removing it from favourites
                    setProps(isFav);
                    setDialogTitle("Alert");
                    setDialogContent("Removed from Favourites!! :(");
                }
                break;
            }
            case "cart":{
                if(!isCart){
                    //If it is not clicked then positive response
                    setProps(isCart);
                    setDialogTitle("Info");
                    setDialogContent("Added to Cart.. :)");
                }else{
                    //Now someone again tapping on fav so removing it from favourites
                    setProps(isCart);
                    setDialogTitle("Alert");
                    setDialogContent("Removed from Cart!! :(");
                }
                break;
            }
            case "book":{
                if(!isBook){
                    //If it is not clicked then positive response
                    setProps(isBook);
                    setDialogTitle("Info");
                    setDialogContent("Bookmark Added.. :)");
                }else{
                    //Now someone again tapping on fav so removing it from favourites
                    setProps(isBook);
                    setDialogTitle("Alert");
                    setDialogContent("Bookmark Removed!! :(");
                }
                break;
            }
        }
    }
    const handleDialogClose = ()=>{
        setDialogOpen(false);
    }
    const MyDialog = ({props})=>{
        return(
            <Dialog open={dialogOpen}   onClose={handleDialogClose}>
                <DialogTitle className={!props ? "font-monospace fw-bolder fs-5 text-bg-success" : "font-monospace fw-bolder fs-5 text-bg-danger"}>{dialogTitle}</DialogTitle>
                <DialogContent className={!props ? "mt-3 font-monospace fw-bolder text-success" : "mt-3 font-monospace fw-bolder text-danger"}>{dialogContent}</DialogContent>
                <DialogActions>
                    <IconButton onClick={handleDialogClose}>
                        <Close/>
                    </IconButton>
                </DialogActions>
            </Dialog>
        )
    }

    const favClick = ()=>{
        setIsFav(!isFav);
        if(!isFav){
            handleDialogOpen("fav");
        }else{
            handleDialogOpen("fav");
        }
    }
    const cartClick = ()=>{
        setIsCart(!isCart);
        if(!isCart){
            handleDialogOpen("cart");
        }else{
            handleDialogOpen("cart");
        }
    }
    const delClick = ()=>{
        setIsDel(!isDel);
        if(!isDel){
            handleDelModalOpen();
        }else{
            handleDelModalOpen();
        }
    }
    const ppClick = ()=>{
        setIsPp(!isPp);
        const sts = document.getElementById("status");
        if(!isPp){
            sts.style.display = "block";
            setTimer(setInterval(()=>{
                setIdx((prevIdx)=>(prevIdx+1)%len);
            },2000))
            sts.innerHTML = `Slideshow has Started.. :)`;
        }else{
            sts.innerHTML = `Slideshow has Stopped!! :(`;
            clearInterval(timer);
            //Hide the status para again after 2sec of pausing
            setTimeout(()=>{
                sts.style.display = "none";
            },1000)
        }
    }
    const bookClick = ()=>{
        setIsBook(!isBook);
        if(!isCart){
            handleDialogOpen("book");
        }else{
            handleDialogOpen("book");
        }
    }
    const prevClick = ()=>{
        setIdx((idx-1+len)%len);
    }
    const nextClick = ()=>{
        setIdx((idx+1)%len);
    }

    // Hex codes: #00246B, #CADCFC
    return(
        <div className="container-fluid">
            <header className="m-1 p-1 text-center" style={{border:"2px solid #00246B",backgroundColor:"#CADCFC",color:"#00246B"}}>
                <h4 className="fs-7 font-monospace fw-bold fst-italic">
                    <Movie/> All Movies Related Information are Displayed Here
                </h4>
            </header>
            <Container component="main" maxWidth="xs">
                {/* Start the Card */}
                <Card style={{backgroundColor:"#CADCFC",color:"#00246B"}} className="mt-3 mb-2" elevation={4} >
                    {/* Create the Card Header */}
                    <CardHeader 
                        avatar = {
                            <Avatar 
                                style={{border:"2px solid #00246B",borderRadius:"50%"}} 
                                // data:image/jpeg;base64,{{ base64Image }}
                                src={`data:image/jpeg;base64,${games[idx].image}`}
                            />
                        }
                        action = {
                            <IconButton color="inherit">
                                <MoreHoriz/>
                            </IconButton>
                        }
                        title = {<b className="fs-5 font-monospace fw-bolder fst-italic">{games[idx].name}</b>}
                    />
                    {/* Card Body */}
                    <CardContent className="row card-body">
                        <Typography className="font-monospace mb-1">
                            Type: <b className="font-monospace">{games[idx].type}</b><br/>
                            Director: <b className="font-monospace">{games[idx].director}</b><br/> 
                        </Typography>
                        <CardActions className="col-1 d-flex justify-content-center flex-column">
                            <Button onClick={prevClick} variant="text" size="small" color="inherit"><b><ChevronLeft/></b></Button>
                        </CardActions>
                        <div className="col-10 d-flex flex-column">
                            {/* Image goes here */}
                            <CardMedia 
                                component="img"
                                //image={`data:${actualImg.contentType};base64,${base64Image}`}
                                image={`data:image/jpeg;base64,${games[idx].image}`}
                                style={{border:"3px solid #00246B"}}
                                height="340"
                            />
                            <b className="font-monospace text-center fst-italic" id="status" style={{display:"none",color:"#00246B"}}></b>
                        </div>
                        <CardActions className="col-1 d-flex justify-content-center flex-column">
                            <Button onClick={prevClick} variant="text" size="small" color="inherit"><b><ChevronRight/></b></Button>
                        </CardActions>
                    </CardContent>
                    {/* Card Footer */}
                    <div className="row" style={{borderTop:"2px solid #00246B"}}>
                        <div className="col-4 d-flex justify-content-center">
                            <IconButton onClick={favClick} color="inherit">
                                {!isFav ? <FavoriteBorder/> : <Favorite/>}
                            </IconButton>
                            <IconButton onClick={cartClick} color="inherit">
                                {!isCart ? <AddShoppingCart/> : <ShoppingCart/>}
                            </IconButton>
                            <IconButton onClick={delClick} color="inherit">
                                {isDel ?  <Delete/> : <DeleteOutline/>}
                            </IconButton>
                        </div>

                        <div className="col-5 d-flex justify-content-center"/>

                        <div className="col-3 d-flex justify-content-center">
                            <IconButton onClick={ppClick} color="inherit">
                                {!isPp ? <PlayCircle/> : <PauseCircle/>}
                            </IconButton>
                            <IconButton onClick={bookClick} color="inherit">
                                {!isBook ? <BookmarkBorder/> : <Bookmark/>}
                            </IconButton>
                        </div>
                    </div>
                </Card>
                {/*Create A Seperate dialog for delete */}
                <DelDialog delProps={delProps}/>
                   
                {/* Create a Seperate dialog for handling other buttons */}
                 <MyDialog props={props}/>
            </Container>
        </div>
    )
}
export default GetAllMovies;