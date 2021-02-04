import React from 'react';
import { Switch, Route} from "react-router-dom";
import {
    Main,
}
from "../User/index";

const UserRouter = () => {

    return (
        <>
            <Switch>
                <Route path="/" component={Main} exact />
            </Switch>
        </>
    )
}

export default UserRouter;