import React from 'react'
import Cards from "../Cards/Cards.js";
import banner from "../../Files/Images/blog.jpg";
import './BlogPage.css';

function BlogPage() {
  return(
    <div className='banner'>
      <img src = {banner} className= 'bannerphoto'></img>
      <div className='articles'>
        <Cards />
      </div>

    </div>
  );
}

export default BlogPage;