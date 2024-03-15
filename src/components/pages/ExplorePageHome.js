import { AutoAwesome, FourK, Home, Keyboard, MenuBook, MovieFilter, ShoppingBag, SportsEsports } from "@mui/icons-material";
import { Button} from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const ExplorePageHome = ()=>{
    return(
        <div className="container-fluid">
            <header className="text-center m-1 p-1 text-bg-white" style={{border:"4px solid maroon",color:"green"}}>
                <h2 className="text-center font-monospace fw-bolder fst-italic"><Home/> Welcome to Exploration Home Page</h2>
            </header>
            <section className="row mt-2 mb-2">
                <nav className="col-3 mt-2 mb-2">
                    <div className="mt-2 mb-3">
                        <Link to="insertGalaxies"><Button style={{backgroundColor:"black"}} className="fs-6 w-100 fw-bolder font-monospace" variant="contained"><AutoAwesome/>&nbsp;Insert Galaxies</Button></Link>
                    </div>
                    <div className="mt-2 mb-3">
                        <Link to="insertMovies"><Button  style={{backgroundColor:"#CADCFC",color:"#00246B"}} className="fs-6 w-100 fw-bolder font-monospace" variant="contained"><MovieFilter/>&nbsp;Insert Movies</Button></Link>
                    </div>
                    <div className="mt-2 mb-3">
                        <Link to="insertGames"><Button  style={{backgroundColor:"#FEE715",color:"#101820"}} className="fs-6 w-100 fw-bolder font-monospace" variant="contained"><SportsEsports/>&nbsp;Insert Games</Button></Link>
                    </div>
                    <div className="mt-2 mb-3">
                        <Link to="insertAnimes"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"green",color:"maroon"}}><FourK/>&nbsp;Insert Animes</Button></Link>
                    </div>
                    <div className="mt-2 mb-3">
                        <Link to="insertBooks"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#CC313D",color:"#F7C5CC"}}><MenuBook/>&nbsp;Insert Books</Button></Link>
                    </div>
                    <div className="mt-2 mb-3">
                        <Link to="insertAccess"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#D3C5E5",color:"#735DA5"}}><Keyboard/>&nbsp;Insert Accessories</Button></Link>
                    </div>
                    <div className="mt-2 mb-3">
                        <Link to="insertProducts"><Button className="fs-6 w-100 font-monospace fw-bolder" variant="contained" size="medium" style={{backgroundColor:"#A1BE95",color:"#F98866"}}><ShoppingBag/>&nbsp;Insert Products</Button></Link>
                    </div>
                </nav>
                <main className="col-9 mt-2 mb-2 d-flex justify-content-center align-items-center" style={{height:"625px"}}>
                    <Outlet/>
                </main>
            </section>
        </div>
    );
}

export default ExplorePageHome;