import React from 'react';
import {Switch,Route} from "react-router-dom";

import Home from "../views/home";

import Dashboard from "../views/Dashboard";
import Contacts from '../views/contact';
import Abouts from '../views/about';
import profile from '../views/profile';
import AllSectors from '../views/AllSectors';
import DashSectors from '../views/dashboard/Sectors';
import SchedulerList from '../views/SchedulerList';
import AppointmentList from '../views/AppointmentList';

const Index=()=>{
    return(
        <Switch>
        <Route component={AllSectors} path="/allsectors"/>
        
        <Route component={SchedulerList} path="/schedulers"/>
        <Route component={AppointmentList} path="/appointments"/>

        <Route component={Dashboard} path="/dashboard"/>
        <Route component={DashSectors} path="/dashsectors"/>
       
         
        <Route component={Contacts} path="/contact"/> 
         <Route component={Abouts} path="/about"/> 
         
         <Route component={profile} path="/profile"/> 
        <Route component={Home} path={["/home","/"]} />

        </Switch>
    )
}

export default Index;
