import { useState, useEffect } from "react"
import { ContextProviderComponent, SiteContext } from "../context/mainContext"
import { FaShoppingCart, FaCircle } from "react-icons/fa"
import Link from "next/link"
import { colors } from "../theme"
const { primary } = colors

function CartLink(props) {
  const [renderClientSideComponent, setRenderClientSideComponent] =
    useState(false)
  useEffect(() => {
    setRenderClientSideComponent(true)
  }, [])
  let {
    context: { numberOfItemsInCart = 0 },
  } = props
  return (
    <div>
      <div
        className="flex justify-center sm:top-53 right-24 desktop:right-flexible margin top-40 z-10"
      >
        <div className="flex flex-1 justify-end items-center pl-2 pr-3 relative rounded-xl bg-primary">
          <Link href="/cart">
            <a aria-label="Cart" className='flex items-center'>
              <FaShoppingCart />
          {renderClientSideComponent && numberOfItemsInCart > Number(0) && (
            <p className="text-black ml-1 pt-1">{numberOfItemsInCart}</p>
            )}
            </a>
            </Link>
        </div>
      </div>
    </div>
  )
}

function CartLinkWithContext(props) {
  return (
    <ContextProviderComponent>
      <SiteContext.Consumer>
        {(context) => <CartLink {...props} context={context} />}
      </SiteContext.Consumer>
    </ContextProviderComponent>
  )
}

export default CartLinkWithContext
