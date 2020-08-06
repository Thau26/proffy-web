import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../src/pages/Landing';
import TeacherList from '../src/pages/TeacherList';
import TeacherForm from '../src/pages/TeacherForm';


function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/study" component={TeacherList} />

        </BrowserRouter>
    );
}

export default Routes;

