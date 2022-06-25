import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../scss/_welcome_page.scss';

export default class WelcomePage extends React.Component{
    render(){
        return(
            <div className="shadow-background">
            <div className="opacity-background"></div>
                    <div className="section-welcome-user d-flex flex-column justify-content-center align-items-center pt-5"> 
                       <Link to="/login" className="sing-in-desktop">
                            Sing in    
                        </Link>
                        <h1 className="m-5">Welcome to TodoAppList</h1>
                        <span>a website to help you with your daily challenges</span>
                        <button className="get-start w-25 m-5">
                            <Link to="/register" className="get-start">
                                Get Startet
                            </Link>
                        </button>
                    </div>
            </div>
        );
    }
}