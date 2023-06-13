import React from 'react';
import { Link } from 'react-router-dom';


export default function Donate() {

    return (

        <div className="card">
            <div className="content">
                <p className="heading">Charity Name</p>
                <p className="para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
                    laboriosam at voluptas minus culpa deserunt delectus sapiente
                    nventore pariatur
                </p>
                <Link to='https://donate.stripe.com/test_eVa7ug0l22en6Y08ww'><button className="donate-btn">
                    Donate now
                </button></Link>
            </div>
        </div>
    )
}