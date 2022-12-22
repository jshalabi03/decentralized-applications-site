import React from 'react'
import Cards from "../Cards/Cards.js";
import banner from "../../Files/Images/blog.jpg";
import './BlogPage.css';

function BlogPage() {
  return(
    <div className='banner'>
      <div className='articles'>
        <Cards />
      </div>

    </div>
  );
}

export default BlogPage;