import React from 'react';

export default function ButtonSecondary({ title, onClick, full = false }) {
  let classNames = "text-sm font-bold tracking-wider hover:bg-black bg-transparent hover:text-white font-semibold text-black py-4 px-12 border-0 border-black border-2 hover:border-black"

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