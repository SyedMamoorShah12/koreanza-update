import React from 'react';
import './Testimonials.css';
import img from "../assets/Images/3.jpg";

const Testimonials = () => {
  const data = [
    {
      name: "Nimra",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg", // Replace with your local paths
    },
    {
      name: "Spogmai",
      img: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg",
    },
    {
      name: "Gul",
      img: img,
    }
  ];

  return (
    <section className="testimonial-container">
      <h2 className="testimonial-title">What People Say About US</h2>
      
      <div className="testimonial-grid">
        {data.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="image-wrapper">
              <img src={item.img} alt={item.name} />
            </div>
            <h3 className="user-name">{item.name}</h3>
            <p className="user-text">
              Lorem Ipsum is simply dummy text of the printing and type 
              setting industry. Lorem Ipsum has been the industry's standard 
              dummy text ever since the 1500s
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;