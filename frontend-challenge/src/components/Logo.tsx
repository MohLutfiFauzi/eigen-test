import React from 'react'

function Logo (): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M10 0c5.523 0 10 4.477 10 10V0h10c5.523 0 10 4.477 10 10s-4.477 10-10 10c5.523 0 10 4.477 10 10a9.968 9.968 0 01-2.892 7.033l-.037.038-.033.033A9.968 9.968 0 0130 40a9.968 9.968 0 01-7.137-2.995A9.968 9.968 0 0120 30c0 5.523-4.477 10-10 10S0 35.523 0 30V20h10C4.477 20 0 15.523 0 10S4.477 0 10 0zm8 10a8 8 0 01-8 8V2a8 8 0 018 8zm20 20a8 8 0 10-16 0h16zM2 22v8a8 8 0 1016 0v-8H2zm20-4V2h8a8 8 0 110 16h-8z"
        className="ccustom"
        clipRule="evenodd"
        stopColor="#fff"
      ></path>
    </svg>
  )
}

export default Logo
