import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <h3>TESTIMONIALS</h3>
        <h1>Hear From Our Customers</h1>
      </div>

      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Ugi8fmGskMCEqCL_3RdgK4ykumV_GsbbuQ&s" alt="Robert Fox" />
          </div>
          <p className="testimonial-text">
            “Just Came Back To Home And Should Say That It Is Definitely A Great Experience. I Would Recommend It For Everyone Who Needs A Bike For A Short Term Or Want To T...”
          </p>
          <h4 className="customer-name">Robert Fox</h4>
          <p className="customer-role">Writer</p>
          <div className="stars">★★★★★</div>
        </div>

        <div className="testimonial-card">
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyh9lLB738anuDkITpUmrdS0dLVhALvfGYg&s" alt="Marvin McKinney" />
          </div>
          <p className="testimonial-text">
            “Amazing Service! Claire Helped Me To Reduce The Shipping Price A Little And Shipped It Immediately After Purchasing. The Amethyst Cave I Got Is A Beauty And I C...”
          </p>
          <h4 className="customer-name">Marvin McKinney</h4>
          <p className="customer-role">Businessman</p>
          <div className="stars">★★★★★</div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
