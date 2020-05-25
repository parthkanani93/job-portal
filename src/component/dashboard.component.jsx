import React from 'react';
import { Media } from 'reactstrap';

const items = [
    {
        heading: 'Angular developer',
        src: '/img/angular.png',
        experiance: 'experiance :- 2 year',
        description: 'Full time job work with other developers ',
        salary: 'salary per month :- 15000/-'
    },
    {
        heading: 'Java developer',
        src: '/img/java.png',
        experiance: 'experiance :- 5 year',
        description: 'Full time job work with other developers ',
        salary: 'salary per month :- 45000/-'

    },
    {
        heading: 'Javascript developer',
        src: '/img/javascript.png',
        experiance: 'experiance :- 1 year',
        description: 'Full time job work with other developers ',
        salary: 'salary per month :- 15000/-'
    },
    {
        heading: 'Administrator developer',
        src: '/img/administrator-developer.png',
        experiance: 'experiance :- 4 year',
        description: 'Full time job  ',
        salary: 'salary per month :- 10000/-'
    },
    {
        heading: 'Android developer',
        src: '/img/android-color.png',
        experiance: 'experiance :- 6 year',
        description: 'Full time job work with other developers ',
        salary: 'salary per month :- 75000/-'
    },
    {
        heading: 'HR Manager',
        src: '/img/young-business-woman.png',
        experiance: 'experiance :- 10 year',
        description: 'Full time job  ',
        salary: 'salary per month :- 115000/-'
    },
    {
        heading: 'Manager',
        src: '/img/speak-speech.png',
        experiance: 'experiance :- 15 year',
        description: 'Full time job  ',
        salary: 'salary per month :- 125000/-'
    }
];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: items,
            searchfield: ''
        }
    }

    render() {
        const { data, searchfield } = this.state;
        const filterdata = data.filter(data => data.heading.toLowerCase().includes(searchfield.toLowerCase()));




        return (
            <div className="mt-5 container">
                <div className="row">
                    <div className="col-12 col-md-9" style={{ backgroundColor: '#ADDFF5', borderRadius: 20 }}>
                        <div className="ml-2 row">
                            <div className="col-12 col-md-9 align-self-start">
                                <h1 className="mt-5 text-center" style={{ backgroundColor: '#0A2472', color: 'white', opacity: 0.7, borderRadius: 10 }}>Job Dashboard</h1>
                            </div>
                            <div className="col-12 col-md-3 align-self-end align-middle">
                                <input className="form-control " type="search" placeholder="Search job" aria-label="Search"
                                    onChange={(e) => { this.setState({ searchfield: e.target.value }) }} />

                            </div>

                        </div>

                        {filterdata.map(item =>
                            <div className="mt-5">
                                <Media className="ml-5"  >
                                    <Media left href="#">
                                        <img className="mr-3 img-thumbnail" src={item.src} style={{ height: 64, width: 64 }} />
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
                            </div>


                        )}

                    </div>
                    <div className="col-12 col-md-3 ">
                        <div className="row d-flex justify-content-center" style={{backgroundColor : "#00B1BB",borderRadius: 20}}>
                            <h1>Job Updates</h1>
                            <ul className="list-group pb-5">
                                <li className="list-group-item disabled" aria-disabled="true"><marquee>Jobs Available</marquee></li>
                                <li className="list-group-item"><marquee>Php developer jobs</marquee></li>
                                <li className="list-group-item"><marquee>Bank Manager job</marquee></li>
                                <li className="list-group-item"><marquee>School Principal Job</marquee></li>
                                <li className="list-group-item"><marquee>Part-time works</marquee></li>
                            </ul>


                        </div>


                    </div>

                </div>


            </div>

        );
    }
}








export default Dashboard;