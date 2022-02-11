import React from 'react'

type SelectFilterProps = {
  text: string
  icon: JSX.Element | undefined
}

const SelectFilter: React.FC<SelectFilterProps> = ({ text, icon }) => {
  return (
    <div className="font-bold text-xs  border-gray-300 border rounded-xl  p-3 flex items-center justify-center mx-2 w-1/6 ">
      {icon}
      <p className=" mx-2  ">{text}</p>
    </div>
  )
}

export default SelectFilter
