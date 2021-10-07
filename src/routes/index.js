import React from "react";
import { Switch,Route } from "react-router-dom";

import Home from "../views/home";
import Signup from "../views/signup";

const Index= ()=>{

    return(

        <Switch>

            
            <Route component={Signup} path="/signup" />
            <Route component={Home} path={["/home", "/"]}/>
        </Switch>
    )
}

export default Index;