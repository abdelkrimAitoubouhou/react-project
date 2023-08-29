import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'

import Header from "./components/Header";
import CreateStudent from "./components/CreateStudent";
import ListPatientsComponents from "./components/ListPatientsComponents";
import Edit from "./components/Edit";

function App() {
    return (
        <div className="App" >
            <Router>

                <div><Header/></div>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<ListPatientsComponents/>}/>
                        <Route path="/patient-list" element={<ListPatientsComponents/>}/>
                        <Route path="/add-patient" element={<CreateStudent/>}/>
                        <Route path="/edit-patient/:patId" element={<Edit/>}/>


                    </Routes>
                </div>

                {/*
                 <div>
                    <Footer/>
                </div>*/}
            </Router>
        </div>

    );
}

export default App;
