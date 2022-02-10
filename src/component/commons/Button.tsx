import React from 'react'

type ButtonProps = {
  text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="bg-black w-16 rounded-lg text-white text-xs py-2">
      {text}
    </button>
  )
}

export default Button
