/* eslint-disable */
import React from 'react'

const FlipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="32" width={props.width} height={props.height} rx="6" transform="rotate(90 32 0)" fill={props.color} />
    <path
      d="M10.5 12.0429L13.8333 8.83301V19.6663"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M21.5 19.9561L18.1667 23.166L18.1667 12.3327"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

export default FlipIcon
