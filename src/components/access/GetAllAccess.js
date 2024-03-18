import { AddShoppingCart, AutoAwesome, Bookmark, BookmarkBorder, Check, ChevronLeft, ChevronRight, Close, DarkMode, Delete, DeleteOutline, Favorite, FavoriteBorder, LightMode, MoreHoriz, PauseCircle, PlayCircle, ShoppingCart } from "@mui/icons-material";
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const GetAllAccess = () => {
    const [products, setProducts] = useState([{}]);
    const [idx, setIdx] = useState(0);
    const [len, setLen] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        fetch("https://mern3-node-mongo.onrender.com/fetchAccess")
            .then((res) => res.json())
            .then((datas) => {
                setProducts(datas);
                setLen(datas.length);
            });
    }, [idx, products]);

    const [isFav, setIsFav] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isDel, setIsDel] = useState(false);
    const [isPp, setIsPp] = useState(false);
    const [isBook, setIsBook] = useState(false);

    const [openDelModal, setOpenDelModal] = useState(false);
    const [delModalTitle, setDelModalTitle] = useState("");
    const [delModalContent, setDelModalContent] = useState("");
    const [delProps, setDelProps] = useState(isDel);

    const handleDelete = () => {
        setDialogOpen(true);
        setDialogTitle("Deleted");
        setDialogContent(`Selected ${products[idx].name} Item Deleted!!`);
        setProps(isDel);

        fetch(`https://mern3-node-mongo.onrender.com/deleteAccess?name=${products[idx].name}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        handleDelModalClose();
        setIsDel(!isDel);
    }

    const handleDelModalOpen = () => {
        setOpenDelModal(true);
        setDelModalTitle("Are you sure you want to delete?");
        setDelModalContent("This action cannot be undone. Are you sure you want to proceed?");
    }

    const handleDelModalClose = () => {
        setOpenDelModal(false);
        setIsDel(!isDel);
    }

    const DelDialog = ({ delProps }) => {
        return (
            <Dialog open={openDelModal} onClose={handleDelModalClose}>
                <DialogTitle className="font-monospace fw-bolder fs-5 text-bg-warning">{delModalTitle}</DialogTitle>
                <DialogContent className="mt-3 font-monospace fw-bolder fs-6 text-danger">{delModalContent}</DialogContent>
                <DialogActions>
                    <Button onClick={handleDelete} className="fs-6 font-monoscape fw-bolder" size="small" variant="contained" color="error"><Check /><b>&nbsp;Yes</b></Button>
                    &nbsp;
                    <Button onClick={handleDelModalClose} className="fs-6 font-monoscape fw-bolder" size="small" variant="contained" color="success"><Close /><b>&nbsp;No</b></Button>
                </DialogActions>
            </Dialog>
        )
    }

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogContent, setDialogContent] = useState("");
    const [props, setProps] = useState(isFav);

    const handleDialogOpen = (msg) => {
        setDialogOpen(true);
        switch (msg) {
            case "fav": {
                if (!isFav) {
                    setProps(isFav);
                    setDialogTitle("Info");
                    setDialogContent("Added to Favourites.. :)");
                } else {
                    setProps(isFav);
                    setDialogTitle("Alert");
                    setDialogContent("Removed from Favourites!! :(");
                }
                break;
            }
            case "cart": {
                if (!isCart) {
                    setProps(isCart);
                    setDialogTitle("Info");
                    setDialogContent("Added to Cart.. :)");
                } else {
                    setProps(isCart);
                    setDialogTitle("Alert");
                    setDialogContent("Removed from Cart!! :(");
                }
                break;
            }
            case "book": {
                if (!isBook) {
                    setProps(isBook);
                    setDialogTitle("Info");
                    setDialogContent("Bookmark Added.. :)");
                } else {
                    setProps(isBook);
                    setDialogTitle("Alert");
                    setDialogContent("Bookmark Removed!! :(");
                }
                break;
            }
        }
    }

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const MyDialog = ({ props }) => {
        return (
            <Dialog open={dialogOpen} onClose={handleDialogClose}>
                <DialogTitle className={!props ? "font-monospace fw-bolder fs-5 text-bg-success" : "font-monospace fw-bolder fs-5 text-bg-danger"}>{dialogTitle}</DialogTitle>
                <DialogContent className={!props ? "mt-3 font-monospace fw-bolder text-success" : "mt-3 font-monospace fw-bolder text-danger"}>{dialogContent}</DialogContent>
                <DialogActions>
                    <IconButton onClick={handleDialogClose}>
                        <Close />
                    </IconButton>
                </DialogActions>
            </Dialog>
        )
    }

    const favClick = () => {
        setIsFav(!isFav);
        handleDialogOpen("fav");
    }

    const cartClick = () => {
        setIsCart(!isCart);
        handleDialogOpen("cart");
    }

    const delClick = () => {
        setIsDel(!isDel);
        handleDelModalOpen();
    }

    const ppClick = () => {
        setIsPp(!isPp);
        const sts = document.getElementById("status");
        if (!isPp) {
            sts.style.display = "block";
            setTimer(setInterval(() => {
                setIdx((prevIdx) => (prevIdx + 1) % len);
            }, 2000))
            sts.innerHTML = `Slideshow has Started.. :)`;
        } else {
            sts.innerHTML = `Slideshow has Stopped!! :(`;
            clearInterval(timer);
            setTimeout(() => {
                sts.style.display = "none";
            }, 1000)
        }
    }

    const bookClick = () => {
        setIsBook(!isBook);
        handleDialogOpen("book");
    }

    const prevClick = () => {
        setIdx((idx - 1 + len) % len);
    }

    const nextClick = () => {
        setIdx((idx + 1) % len);
    }

    //Set card toggle theme
    const[isTheme,setIsTheme] = useState(false);
    const cardTheme = ()=>{
        setIsTheme(!isTheme);
    }

    return (
        <div className="container-fluid">
            <header className="m-1 p-1 text-center" style={{ border: "2px solid #735DA5", backgroundColor: "#D3C5E5", color: "#735DA5" }}>
                <h4 className="fs-7 font-monospace fw-bold fst-italic">
                    <span className="bi bi-keyboard-fill"></span> All Accessories Related Information are Displayed Here
                </h4>
            </header>
            <Container component="main" maxWidth="xs">
                <Card style={{ backgroundColor: !isTheme ? "#D3C5E5" : "#735DA5", color: !isTheme ? "#735DA5" : "#D3C5E5" }} className="mt-3 mb-2" elevation={4} >
                    <CardHeader
                        avatar={
                            <Avatar
                                style={{ border: !isTheme ? "2px solid #735DA5" : "2px solid #D3C5E5" , borderRadius: "50%" }}
                                src={`data:image/jpeg;base64,${products[idx].image}`}
                            />
                        }
                        action={
                            <IconButton onClick={cardTheme} color="inherit">
                                {!isTheme ? <DarkMode/> : <LightMode/>}
                            </IconButton>
                        }
                        title={<b className="fs-5 font-monospace fw-bolder fst-italic">{products[idx].name}</b>}
                    />
                    <CardContent className="row card-body">
                        <Typography className="font-monospace mb-1">
                            Price: <b className="font-monospace">{products[idx].price}</b><br />
                            Category: <b className="font-monospace">{products[idx].category}</b><br />
                        </Typography>
                        <CardActions className="col-1 d-flex justify-content-center flex-column">
                            <Button onClick={prevClick} variant="text" size="small" color="inherit"><b><ChevronLeft /></b></Button>
                        </CardActions>
                        <div className="col-10 d-flex flex-column">
                            <CardMedia
                                component="img"
                                image={`data:image/jpeg;base64,${products[idx].image}`}
                                style={{ border: !isTheme ? "4px solid #735DA5" : "4px solid #D3C5E5"}}
                                height="340"
                            />
                            <b className="font-monospace text-center fst-italic" id="status" style={{ display: "none",color: !isTheme ? "#735DA5" : "#D3C5E5"}} ></b>
                        </div>
                        <CardActions className="col-1 d-flex justify-content-center flex-column">
                            <Button onClick={prevClick} variant="text" size="small" color="inherit"><b><ChevronRight /></b></Button>
                        </CardActions>
                    </CardContent>
                    <div className="row" style={{ borderTop:!isTheme ? "2px solid #735DA5" : "2px solid #D3C5E5" }}>
                        <div className="col-4 d-flex justify-content-center">
                            <IconButton onClick={favClick} color="inherit">
                                {!isFav ? <FavoriteBorder /> : <Favorite />}
                            </IconButton>
                            <IconButton onClick={cartClick} color="inherit">
                                {!isCart ? <AddShoppingCart /> : <ShoppingCart />}
                            </IconButton>
                            <IconButton onClick={delClick} color="inherit">
                                {isDel ? <Delete /> : <DeleteOutline />}
                            </IconButton>
                        </div>
                        <div className="col-5 d-flex justify-content-center" />
                        <div className="col-3 d-flex justify-content-center">
                            <IconButton onClick={ppClick} color="inherit">
                                {!isPp ? <PlayCircle /> : <PauseCircle />}
                            </IconButton>
                            <IconButton onClick={bookClick} color="inherit">
                                {!isBook ? <BookmarkBorder /> : <Bookmark />}
                            </IconButton>
                        </div>
                    </div>
                </Card>
                <DelDialog delProps={delProps} />
                <MyDialog props={props} />
            </Container>
        </div>
    )
}

export default GetAllAccess;
