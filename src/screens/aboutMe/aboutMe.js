import React from 'react'
import './aboutMe.css'

import person from '../../images/person.png'

function aboutMe() {
  return (
    <div className='about_container' id='about-me'>
      <div>
        <img src={person} alt='avatar' />
      </div>
      <div className='about_text'>
        <h1>ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Et ultrices neque ornare aenean euismod elementum. 
          Tincidunt augue interdum velit euismod in. Dictum non consectetur a erat nam. Sed odio morbi quis commodo odio aenean sed. 
          Cursus mattis molestie a iaculis. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. 
          Facilisis magna etiam tempor orci eu lobortis elementum nibh. Mauris a diam maecenas sed enim ut sem. Lectus proin nibh nisl condimentum id venenatis. 
          Aliquam ultrices sagittis orci a scelerisque purus. A iaculis at erat pellentesque adipiscing commodo elit. 
          Lacus sed viverra tellus in hac habitasse platea dictumst. Faucibus vitae aliquet nec ullamcorper sit.
        </p>
      </div>
    </div>
  )
}

export default aboutMe
