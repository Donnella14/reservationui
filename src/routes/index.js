import React from 'react';
import {Switch,Route} from "react-router-dom";

import Home from "../views/home";
import AllMentors from "../views/AllMentors";
import Dashboard from "../views/Dashboard";
import Contacts from '../views/contact';
import Abouts from '../views/about';
import DashMentors from "../views/dashboard/Mentors";
import profile from '../views/profile';


const Index=()=>{
    return(
        <Switch>
        <Route component={AllMentors} path="/allmentors"/>

        <Route component={Dashboard} path="/dashboard"/>
        <Route component={DashMentors} path="/dashmentors"/>
       
         
        <Route component={Contacts} path="/contact"/> 
         <Route component={Abouts} path="/about"/>  
         <Route component={profile} path="/profile"/> 
        <Route component={Home} path={["/home","/"]} />

        </Switch>
    )
}

export default Index;
