import React from 'react'

const Navbar = () => {
  return (
    <header className="p-4 dark:bg-gray-800 text-white">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
            icon
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>
            <li className="flex">
              <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 text-white">Link</a>
            </li>

          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Log in</button>
          <ul className='flex'>
            <li>ONE</li>
            <li>TWO</li>
            <li>THREE</li>
          </ul>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar