import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import '../components/Nimages.css';

function Nimages() {
    const itemData = [
        {
          img: 'https://plus.unsplash.com/premium_photo-1667538960104-25726d82a6e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'mirorless',
        },
        {
          img: 'https://images.unsplash.com/photo-1593215112122-1e626ee1603d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'camerabag',
        },
        {
          img: 'https://plus.unsplash.com/premium_photo-1684783848071-0fbc44f1939c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Tripod',
        },
        {
          img: 'https://images.unsplash.com/photo-1520904678866-e4e8a0dd07af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Studycam',
        },
        {
          img: 'https://images.unsplash.com/photo-1623982228799-9233a4ada2cd?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'Gimbal',
        },
        {
          img: 'https://images.unsplash.com/photo-1524512099866-c65c6bfb2617?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          title: 'dronecam',
        },
      ];

    return (
      <div>
        <h2 style={{fontWeight:'bolder'}}>EXCLUSIVE <span style={{color:'red'}}>CATEGORIES</span></h2>
        <ImageList sx={{ width: '100%', height: 490 }} cols={3} rowHeight={284}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="image-item">
              <img
                src={`${item.img}`}
                alt={item.title}
                loading="lazy"
                className="image"
              />
              <div className="hover-text">
                <h3>{item.title}</h3>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
}

export default Nimages;
