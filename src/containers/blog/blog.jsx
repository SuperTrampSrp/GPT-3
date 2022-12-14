import React from 'react';
import './blog.css';
import Article from '../../components/article/article';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id = 'blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are bloggig about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01} date = '16 Dec 22' tiltle = 'GPY-3 and openAI is the future. let us explore how it is'/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date = '16 Dec 22' tiltle = 'GPY-3 and openAI is the future. let us explore how it is'/>
          <Article imgUrl={blog03} date = '16 Dec 22' tiltle = 'GPY-3 and openAI is the future. let us explore how it is'/>
          <Article imgUrl={blog04} date = '16 Dec 22' tiltle = 'GPY-3 and openAI is the future. let us explore how it is'/>
          <Article imgUrl={blog05} date = '16 Dec 22' tiltle = 'GPY-3 and openAI is the future. let us explore how it is'/>
        </div>
      </div>
    </div>
  )
}

export default Blog