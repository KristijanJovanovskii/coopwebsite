import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'find mentor',
    text: 'loremloremloremloremloremloremloremloremloremloremloremloremloremlorem'

  },
  {
    title: 'find peer',
    text: 'loremloremloremloremloremloremloremloremloremloremloremloremloremlorem'

  },
  {
    title: 'help others',
    text: 'loremloremloremloremloremloremloremloremloremloremloremloremloremlorem'

  }
]

const Features = () => {
  return (
    <div className='coop__features section__padding' id='features'>
        <div className='coop__features-heading'>
          <h1 className='gradient__text'>Join the coop comunity to expand your knowledge and help others.</h1>
        </div>
        <div className='coop__features-container'>
          {featuresData.map((item, index) => ( //dynamic block of code
            <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
        </div>
    </div>
  )
}

export default Features