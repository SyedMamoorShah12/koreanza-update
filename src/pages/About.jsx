import React from 'react';
import './About.css';
import img from "../assets/Images/3.jpg";
const BeautyLanding = () => {
  return (
    <div className="container">
      <header className="main-header">
        <h1>Welcome To Our Beauty World</h1>
      </header>

      <main className="content-grid">
        <div className="text-side">
          {/* Who We Are Section */}
          <section className="section-who">
            <h2>Who We Are</h2>
            <p>
              we are possionate about all thing beauty. <br />
              Our Mission is empower you to feel confident and beautiful <br />
              in your own skin.we offer high quality,cruelity free cosmatics <br />
              that are crfted with love and care
            </p>
          </section>

          <div className="divider-horizontal"></div>

          <div className="bottom-sections">
            {/* Our Mission Section */}
            <section className="section-mission">
              <h2>Our Vission</h2>
              <p>
                To inspire beauty and <br />
                confidence in every individual. <br />
                we believe everyone deserves <br />
                to look and feel their best.
              </p>
            </section>

            <div className="divider-vertical"></div>

            {/* Why Choose Us Section */}
            <section className="section-why">
              <h2>Why Choose Us ?</h2>
              <ul>
                <li>Cruely- free & safe ingrediants</li>
                <li>Trendy and invoative products</li>
                <li>exceptinal costumer service</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="image-side">
          <img 
            src={img}
            alt="Peachmanu Cushion Foundation" 
          />
        </div>
      </main>
    </div>
  );
};

export default BeautyLanding;