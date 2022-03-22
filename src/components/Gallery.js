import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Gallery() {
    return (
        <div style={{ display: 'block', width: 700, height: 1000, padding: 100, margin: 'auto' }}>
      <h4>React Memes!</h4>
      <Carousel interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"
            alt="Image One"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
src="https://i.imgflip.com/5cocxw.jpg"
            alt="Image Two"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
src="https://www.netlify.com/v3/img/blog/tweet-markdalgleish-hooks.jpg"
            alt="Image Three"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
src="https://www.freecodecamp.org/news/content/images/2019/10/o60oxupyz8cfce0cknvz.png"
            alt="Image Four"/>
        </Carousel.Item>
      </Carousel>
    </div>
    );

}
