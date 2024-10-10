import React from 'react';
import './work.css';

const OurWork = () => {
  const workImages = [
    {
      id: 1,
      imgUrl: 'https://rafaelsbarbershop.com/storage/photos/1/posts/mens-haircuts/mens-haircuts-1.jpg',
    },
    {
      id: 2,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUszl-A67pcvvy6y3TZqQbBrmrDnPnWMd_8w&s',
    },
    {
      id: 3,
      imgUrl: 'https://vendor.mschirpy.com/blogs/1696850528.jpg',
    },
    {
      id: 4,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLqYFSiNaout59HO0YVRkbuQPQ1hEUqmlKVcmJBzib8cc6wLPBbwH3C7rQT5p7hgPYbHg&usqp=CAU',
    },
    {
        id:5,
        imgUrl:'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/08/09231822/pixabay6.jpg',
    },
    {
        id:6,
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgWuilbMa3bYusPZ0NZzDAAvsGAyX0ct40ygkdGAWzDJh3C9pkEOxnvxmzyC0YGGgtZ4k&usqp=CAU',
    },
    // Add more images as needed
  ];

  return (
    <section className="our-work-section">
      <h2>Our Work</h2>
      <div className="work-grid">
        {workImages.map(image => (
          <div key={image.id} className="work-item">
            <img src={image.imgUrl} alt={`Work ${image.id}`} className="work-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
