import Link from "next/link"
import { slugify } from "../utils/helpers"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { navItemLength } from "../ecommerce.config"
import CartLink from "../components/CartLink"
import BurgerMenu from "../components/BurgerMenu"

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    categories = categories.slice(0, navItemLength)
  }
  return (
    <div>
      {/* <BurgerMenu /> */}
      {/* HEADER */}
      <div className="sticky mobile:relative top-0 z-98 flex justify-between items-center bg-white mobile:px-12 p-4 w-auto sm:max-w-none">
        <Link href="/">
          <a aria-label="Home">
            <img src="/logo.png" alt="logo" width="125" height="28" className='cursor-pointer' />
          </a>
        </Link>
        <CartLink />
      </div>
      <nav className='relative mobile:sticky top-0 z-98 bg-white'>
        <div className="flex justify-center">
          <div
            className="
            mobile:px-12 sm:flex-row sm:py-4 desktop:px-0
            px-4 flex flex-col w-fw
          "
          >
            <div className="flex flex-wrap mt-1">
              <Link href="/">
                <a aria-label="Home">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4
                  "
                  >
                    Home
                  </p>
                </a>
              </Link>
              {categories.map((category, index) => (
                <Link href={`/category/${slugify(category)}`} key={index}>
                  <a aria-label={category}>
                    <p
                      className="
                          sm:mr-8 sm:mb-0
                          mb-4 text-left text-smaller mr-4
                        "
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>
                  </a>
                </Link>
              ))}
              <Link href="/categories">
                <a aria-label="All categories">
                  <p
                    className="
                    sm:mr-8 sm:mb-0
                    mb-4 text-left text-smaller mr-4 
                  "
                  >
                    All
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <footer className="flex justify-center">
        <div
          className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300">
          <span className="block text-gray-700 text-xs">Copyright © 2022 OK-OK Ecommerce. TOUT DROIT RESERVER UNIQUEMENT A RYMO .</span>
          <div className="
            sm:justify-end sm:m-0
            flex flex-1 mt-4
          "
          >
          </div>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  )
}
