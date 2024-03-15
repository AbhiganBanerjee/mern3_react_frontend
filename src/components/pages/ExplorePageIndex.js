import { Dashboard, Home } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ExplorePageHome from "./ExplorePageHome";
import ExplorePageDashboard from "./ExplorePageDashboard";
import GetAllGalaxies from "../galaxies/GetAllGalaxies";
import GetAllMovies from "../movies/GetAllMovies";
import InsertGalaxies from "../galaxies/InsertGalaxies";
import InsertMovies from "../movies/InsertMovies";
import GetAllGames from "../games/GetAllGames";
import InsertGames from "../games/InsertGames";
import InsertAnimes from "../animes/InsertAnimes";
import GetAllAnimes from "../animes/GetAllAnimes";
import InsertBooks from "../books/InsertBooks";
import GetAllBooks from "../books/GetAllBooks";
import GetAllProducts from "../products/GetAllProducts";
import GetAllAccess from "../access/GetAllAccess";
import InsertProducts from "../products/InsertProducts";
import InsertAccess from "../access/InsertAccess";

const ExplorePageIndex = ()=>{  
    return(
        <div className="container-fluid mt-2" style={{height:"5000px"}}>
            <header className="m-2 p-2 text-center" style={{backgroundColor:"maroon",color:"green"}}>
                <h1 className="font-monospace fst-italic fw-bolder">Welcome to Exploration Index Page</h1>
            </header>
            <BrowserRouter>
                <section className="row mt-2 mb-2">
                    <nav className="col-3 mt-2 mb-2">
                        <div className="mt-2 mb-3" style={{marginLeft:"8px"}}>
                            <Link to="/home"><Button size="large" className="fs-5 w-100 font-monospace fw-bolder" style={{backgroundColor:"maroon",color:"green"}}  variant="contained"><Home/>&nbsp;<b>Home</b></Button></Link>
                        </div>
                        <div className="mt-2 mb-3" style={{marginLeft:"8px"}}>
                            <Link to="/dashboard"><Button size="large" className="fs-5 w-100 font-monospace fw-bolder" style={{backgroundColor:"maroon",color:"green"}} variant="contained"><Dashboard/>&nbsp;<b>Dashboard</b></Button></Link>
                        </div>
                    </nav>
                    <main className="mt-2 mb-2 col-9">
                        <Routes>
                            <Route path="home" element={<ExplorePageHome/>}>
                                <Route path="insertGalaxies" element={<InsertGalaxies/>}></Route>
                                <Route path="insertMovies" element={<InsertMovies/>}></Route>
                                <Route path="insertGames" element={<InsertGames/>}></Route>
                                <Route path="insertAnimes" element={<InsertAnimes/>}></Route>
                                <Route path="insertBooks" element={<InsertBooks/>}></Route>
                                <Route path="insertAccess" element={<InsertAccess/>}></Route>
                                <Route path="insertProducts" element={<InsertProducts/>}></Route>
                            </Route>
                            <Route path="dashboard" element={<ExplorePageDashboard/>}>
                                <Route path="getGalaxies" element={<GetAllGalaxies/>}></Route>
                                <Route path="getMovies" element={<GetAllMovies/>}></Route>
                                <Route path="getGames" element={<GetAllGames/>}></Route>
                                <Route path="getAnimes" element={<GetAllAnimes/>}></Route>
                                <Route path="getBooks" element={<GetAllBooks/>}></Route>
                                <Route path="getProducts" element={<GetAllProducts/>}></Route>
                                <Route path="getAccess" element={<GetAllAccess/>}></Route>
                            </Route>
                        </Routes>
                    </main>
                </section>
            </BrowserRouter>
        </div>
    )
}
export default ExplorePageIndex;

