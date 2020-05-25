import React from 'react';
import { Media } from 'reactstrap';

const items = [
    {
        heading: 'Angular developer',
        src: '/img/angular.png',
        experiance : 'experiance :- 2 year',
        description : 'Full time job work with other developers ',
        salary : 'salary per month :- 15000/-'
    },
    {
        heading: 'Java developer',
        src: '/img/java.png',
        experiance : 'experiance :- 5 year',
        description : 'Full time job work with other developers ',
        salary : 'salary per month :- 45000/-'
    
    },
    {
        heading: 'Javascript developer',
        src: '/img/javascript.png',
        experiance : 'experiance :- 1 year',
        description : 'Full time job work with other developers ',
        salary : 'salary per month :- 15000/-'
    }
];







function Dashboard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-9" style={{backgroundColor : '#ADDFF5',borderRadius : 20}}>
                    <div className="d-flex justify-content-center">
                        <h1 className="mt-5" style={{backgroundColor : '#0A2472',color : 'white',opacity : 0.7,borderRadius:10}}>Job Dashboard</h1>
                    </div>

                    {items.map(item => 
                        <Media className="mt-5"  >
                            <Media left href="#">
                                <img className="mr-3 img-thumbnail" src={item.src} style={{ height:64,width:64 }}  />
                            </Media>
                            <Media body>
                                <Media heading>
                                    {item.heading}
                                </Media>
                               {item.description}
                               <div>
                               {item.experiance}

                               </div>
                               <div>
                               {item.salary}

                               </div>
                               
                            </Media>
                        </Media>


                    )}

                </div>
                <div className="col-12 col-md-3">
                    <div className="row d-flex justify-content-center">
                        <h1>updates</h1>
                        <h1>updates</h1>
                        <h1>updates</h1>
                        <h1>updates</h1>
                        <h1>updates</h1>

                    </div>
                   

                </div>

            </div>


        </div>

    );
}

export default Dashboard;