import React from 'react';
import './features.css';
import Feature from '../../components/features/feature'

const featuresData =[
  {
    title : 'Improving and distrust instantly',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eaque architecto beatae sunt perspiciatis natus atque doloremque autem quas, veniam reprehenderit accusamus facilis dolor earum recusandae odit et corrupti suscipit.'
  },
  {
    title : 'Become the Tended Active',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eaque architecto beatae sunt perspiciatis natus atque doloremque autem quas, veniam reprehenderit accusamus facilis dolor earum recusandae odit et corrupti suscipit.'
  },
  {
    title : 'Message or am Nothings',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eaque architecto beatae sunt perspiciatis natus atque doloremque autem quas, veniam reprehenderit accusamus facilis dolor earum recusandae odit et corrupti suscipit.'
  },
  {
    title : 'Really Bow Low County',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eaque architecto beatae sunt perspiciatis natus atque doloremque autem quas, veniam reprehenderit accusamus facilis dolor earum recusandae odit et corrupti suscipit.'
  }
]

const Features = () => {
  return (
    <div className='gtp3__features section__padding' id='features'>
      <div className='gtp3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step Into Future Today And Make It Happen</h1>
        <p>Rerquest Early Access To Get Started</p>
      </div>
      <div className='gtp3__features-container'>
        {
          featuresData.map((item, index)=>(
            <Feature title = {item.title} text = {item.text} key = {item.title + index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features