import React from 'react';

export default function Button({ title, onClick, full = false }) {
  let classNames = "text-sm font-bold tracking-wider hover:bg-transparent bg-primary hover:text-black font-semibold text-white py-4 px-12 border-0 border-transparent border-2 hover:border-black"

  if (full) {
    classNames = `${classNames} w-full`
  }
  return (
    <button onClick={onClick} className={classNames}>
      <div>
        {title}
      </div>
    </button>
  )
}