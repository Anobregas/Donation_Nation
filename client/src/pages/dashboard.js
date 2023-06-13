import React from "react";
import Footer from "../Components/footer";
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHARITY } from "../Utils/queries"

export default function Dashboard() {
  const { loading, error, data } = useQuery(QUERY_CHARITY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { charity } = data;


  return (

    <div>
      <div className="dashboard">
        <h1 className="dash-title">Dashboard</h1>

        <div className="dash-container">
          <div className="column">
            <section className="donated-column">
              <h3 className="donated-title">Previously Donated</h3>
              <div className="donated-history">Compassion Cares $500</div>
            </section>
          </div>

            <div>
              {charity.map((item) => (
                <div key={item._id} className="dash-card">
                  <h3 className="dash-card-title">{item.charityName}</h3>
                  <p className="dash-card-text">{item.description}</p>
                  <p>Goal: {item.goal}</p>
                  <a href={item.stripeLink} className="donate-btn">Donate</a>
                </div>
              ))}
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
