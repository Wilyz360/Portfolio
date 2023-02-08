import React from 'react'
import './header.css'
import { TypeAnimation } from 'react-type-animation'

export default function Header() {
  return (
    <div className="main-info">
      <h1>What I am?</h1>
      <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    ' ',
    1000,
    'A Software Engineer',
    1000,
    'Also known as an',
    1000,
    'Front-end developer',
    1000,
    'Back-end developer',
    1000,
    'Or!',
    1000,
    `"a coder?"`,
    1000,
    ' ',
    3500
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '2em' }}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
    </div>
  )
}
