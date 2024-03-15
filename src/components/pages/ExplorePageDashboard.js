import { AutoAwesome, Dashboard, FourK, Keyboard, MenuBook, Movie, ShoppingBag} from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const ExplorePageDashboard = ()=>{
    return(
        <div className="container-fluid">
            <header className="text-center text-bg-white m-1 p-1" style={{border:"4px solid maroon",color:"green"}}>
                <h2 className="fw-bolder fst-italic font-monospace"><Dashboard/> Welcome to Exploration Dashboard Page</h2>
            </header>
            <section className="row mt-2 mb-2">
                <nav className="col-3 mt-2 mb-2">
                    <div className="mt-1 mb-3">
                        <Link to="getGalaxies"><Button style={{backgroundColor:"black"}} className="fs-6 w-100 font-monospace fw-bolder text-white" variant="contained" color="inherit"><AutoAwesome/>&nbsp;Galaxies Information</Button></Link>
                    </div>
                    <div className="mt-1 mb-3">
                        <Link to="getMovies"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#CADCFC",color:"#00246B"}}><Movie/>&nbsp;Movies Information</Button></Link>
                    </div>
                    <div className="mt-1 mb-3">
                        <Link to="getGames"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#FEE715",color:"#101820"}}><span className="bi bi-steam"></span>&nbsp;Games Information</Button></Link>
                    </div>
                    <div className="mt-1 mb-3">
                        <Link to="getAnimes"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"green",color:"maroon"}}><FourK/>&nbsp;Animes Information</Button></Link>
                    </div>
                    <div className="mt-1 mb-3">
                        <Link to="getBooks"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#CC313D",color:"#F7C5CC"}}><MenuBook/>&nbsp;Books Information</Button></Link>
                    </div>
                    <div className="mt-1 mb-3">
                        <Link to="getAccess"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#D3C5E5",color:"#735DA5"}}><Keyboard/>&nbsp;Accessories Information</Button></Link>
                    </div>
                    <div className="mt-1 mb-3">
                        <Link to="getProducts"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#A1BE95",color:"#F98866"}}><ShoppingBag/>&nbsp;Products Information</Button></Link>
                    </div>
                </nav>
                <main className="col-9 mt-2 mb-2 d-flex justify-content-center align-items-center" style={{height:"612px"}}>
                    <Outlet/>
                </main>
            </section>
        </div>
    );
}

export default ExplorePageDashboard;