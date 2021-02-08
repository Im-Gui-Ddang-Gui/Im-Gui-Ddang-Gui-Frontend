import React from 'react';
import { Switch, Route} from "react-router-dom";
import {
    Login,
    RemovePost,
    Approval,
    Report,
}
from "../Admin/index";

const AdminRouter = () => {

    return (
        <>
            <Switch>
                <Route path="/admin/login" component={Login} exact />
                <Route path="/admin/remove-post" component={RemovePost} exact />
                <Route path="/admin/approval" component={Approval} exact />
                <Route path="/admin/report" component={Report} exact />
            </Switch>
        </>
    )
}

export default AdminRouter;