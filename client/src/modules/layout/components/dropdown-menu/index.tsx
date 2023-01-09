import { Popover, Transition } from "@headlessui/react"
import {
  useFeaturedProductsQuery,
  useNavigationCollections,
} from "@lib/hooks/use-layout-data"
import repeat from "@lib/util/repeat"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import clsx from "clsx"
import { chunk } from "lodash"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import urls from "@lib/urls"
const DropdownMenu = () => {
  const [open, setOpen] = useState(false)
  const { push } = useRouter()
  const { data: collections, isLoading: loadingCollections } =
    useNavigationCollections()
  const { data: products, isLoading: loadingProducts } =
    useFeaturedProductsQuery()

  return (
    <div
      
      className="h-full"
    >
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          <>
            <Link href={urls.for_him} passHref>
              <Popover.Button
                  className={clsx(
                    "relative h-full flex items-center transition-all ease-out duration-200 pl-4 pr-4 header-link"
                  )}
                >
                  Чоловікам
                </Popover.Button>
            </Link>
            <Link href={urls.for_her} passHref className="pl-4 pr-4">
                <Popover.Button
                      className={clsx(
                        "relative h-full flex items-center transition-all ease-out duration-200 pl-4 pr-4 header-link"
                      )}
                    >
                    Жінкам
                </Popover.Button>
            </Link>
            <Link href={urls.clothing} passHref className="pl-4 pr-4">
            <Popover.Button
                  className={clsx(
                    "relative h-full flex items-center transition-all ease-out duration-200 pl-4 pr-4 header-link"
                  )}
                >
                  Одяг
                </Popover.Button>
            </Link>
            <Link href={urls.shoes} passHref className="pl-4 pr-4">
              <Popover.Button
                  className={clsx(
                    "relative h-full flex items-center transition-all ease-out duration-200 pl-4 pr-4 header-link"
                  )}
                >
                  Взуття
                </Popover.Button>
            </Link>
            <Link href={urls.bags} passHref className="pl-4 pr-4">
              <Popover.Button
                  className={clsx(
                    "relative h-full flex items-center transition-all ease-out duration-200 pl-4 pr-4 header-link"
                  )}
                >
                  Сумки
                </Popover.Button>
            </Link>
            <Link href={urls.accessories} passHref className="pl-4 pr-4">
              <Popover.Button
                  className={clsx(
                    "relative h-full flex items-center transition-all ease-out duration-200 pl-4 pr-4 header-link"
                  )}
                >
                  Аксесуари
                </Popover.Button>
            </Link>
            <Transition
              show={open}
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Panel
                static
                className="absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200"
                
              >
                <div className="relative bg-white py-8" onMouseLeave={() => setOpen(false)}>
                  <div className="flex items-start content-container">
                    <div className="flex flex-col flex-1 max-w-[30%]">
                      <h3 className="text-base-semi text-gray-900 mb-4">
                        Категорії
                      </h3>
                      <div className="flex items-start">
                        {collections &&
                          chunk(collections, 6).map((chunk, index) => {
                            return (
                              <ul
                                key={index}
                                className="min-w-[152px] max-w-[200px] pr-4"
                              >
                                {chunk.map((collection) => {
                                  return (
                                    <div key={collection.id} className="pb-3">
                                      <Link
                                        href={`/collections/${collection.id}`}
                                      >
                                        <a onClick={() => setOpen(false)}>
                                          {collection.title}
                                        </a>
                                      </Link>
                                    </div>
                                  )
                                })}
                              </ul>
                            )
                          })}
                        {loadingCollections &&
                          repeat(6).map((index) => (
                            <div
                              key={index}
                              className="w-12 h-4 bg-gray-100 animate-pulse"
                            />
                          ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-3 gap-4">
                        {products?.slice(0, 3).map((product) => (
                          <ProductPreview {...product} key={product.id} />
                        ))}
                        {loadingProducts &&
                          repeat(3).map((index) => (
                            <SkeletonProductPreview key={index} />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>
      </div>
    </div>
  )
}

export default DropdownMenu
