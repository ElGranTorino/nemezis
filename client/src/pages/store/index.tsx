import { StoreGetProductsParams } from "@medusajs/medusa"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "@modules/store/components/refinement-list"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { NextPageWithLayout } from "types/global"
const Store: NextPageWithLayout = () => {
  const router = useRouter();
  const [params, setParams] = useState<StoreGetProductsParams>({});
  useEffect(() => {
    const pref: StoreGetProductsParams = {}
    const collection_id = router.query.collection_id;
    const tags = router.query.tags;

    if(collection_id) {
      if(typeof collection_id === 'string') {
        pref.collection_id = [collection_id]
      } else if(Array.isArray(collection_id)) {
        pref.collection_id = collection_id
      }
    }
    if(tags) {
      if(typeof tags === 'string') {
        pref.tags = [tags]
      } else if(Array.isArray(tags)) {
        pref.tags = tags
      }
    }
    setParams(pref)
  }, [router])
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl mb-10">
              Каталог
            </h2>

            {/* <p className="max-w-md mt-4 text-gray-500">
              Тут ви можете знайти повний перелік .
            </p> */}
          </header>
        {/* 
          <div className="mt-8 mb-6 sm:flex sm:items-center sm:justify-between">
            <div className="block sm:hidden">
              <button
                className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
              >
                <span className="text-sm font-medium"> Filters & Sorting </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden sm:flex sm:gap-4">
              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
                  >
                    <span className="text-sm font-medium"> Колір </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div
                    className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div className="bg-white border border-gray-200 rounded w-96">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> 0 Обрано </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Скинути
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            htmlFor="FilterRed"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterRed"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Червоний
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterBlue"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Синій
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterGreen"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterGreen"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Зелений
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOrange"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOrange"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Оранжевий
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPurple"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPurple"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Фіолетовий
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterTeal"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Чорний
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterTeal"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Білий
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
                  >
                    <span className="text-sm font-medium"> Категорія </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div
                    className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div className="bg-white border border-gray-200 rounded w-96">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> 0 Обрано </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Скинути
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            htmlFor="FilterRed"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterRed"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Red
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterBlue"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Blue
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterGreen"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterGreen"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Green
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterOrange"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterOrange"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Orange
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterPurple"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterPurple"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Purple
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterTeal"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterTeal"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Teal
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>

              <div className="relative">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
                  >
                    <span className="text-sm font-medium"> Стать </span>

                    <span className="transition group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div
                    className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
                  >
                    <div className="bg-white border border-gray-200 rounded w-96">
                      <header className="flex items-center justify-between p-4">
                        <span className="text-sm text-gray-700"> 0 Обрано </span>

                        <button
                          type="button"
                          className="text-sm text-gray-900 underline underline-offset-4"
                        >
                          Скинути
                        </button>
                      </header>

                      <ul className="p-4 space-y-1 border-t border-gray-200">
                        <li>
                          <label
                            htmlFor="FilterRed"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterRed"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Чоловіча
                            </span>
                          </label>
                        </li>

                        <li>
                          <label
                            htmlFor="FilterBlue"
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              id="FilterBlue"
                              className="w-5 h-5 border-gray-300 rounded"
                            />

                            <span className="text-sm font-medium text-gray-700">
                              Жіноча
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </details>
              </div>
            </div>

             <div className="hidden sm:block">
              <label htmlFor="SortBy" className="sr-only">SortBy</label>

              <select id="SortBy" className="h-10 text-sm border-gray-300 rounded pl-4 pr-4">
                <option> Сортувати за </option>
                <option value="Title, DESC">Ціною, Менша-Більша</option>
                <option value="Title, ASC">Ціною, Більша-Менша</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div> 

             <div className="inline-flex items-stretch rounded-md border bg-white" onClick={() => {
                }}>
              <button
                className="rounded-l-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                Сортувати
              </button>

              <div className={`relative `}>
                <button
                  type="button"
                  className="inline-flex h-full items-center justify-center rounded-r-md border-l border-gray-100 px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                >
                  <span className="sr-only">Menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 z-10 mt-4 w-56 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg ${showSelect ? '' : 'hidden'}`}
                  role="menu"
                >
                  <div className="flow-root py-2">
                    <div className="-my-2 divide-y divide-gray-100">
                      <div className="p-2">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          За Ціною. Вища - Нижча
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          За Ціною. Нижча - Вища
                        </a>
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          За Наявністю
                        </a>

                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          За Популярністю
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div> */}
          <div className="mt-4 mb-4"></div>
          <InfiniteProducts params={params}/>
          {/* <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Prev Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                1
              </a>
            </li>

            <li
              className="block h-8 w-8 rounded border-blue-600 bg-black text-center leading-8 text-white"
            >
              2
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                3
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
              >
                4
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
              >
                <span className="sr-only">Next Page</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ol> */}

        </div>
      </section>
                
    </div>
    // <>
    //   <Head title="Store" description="Explore all of our products." />
    //   <div className="flex flex-col small:flex-row small:items-start py-6">
    //     <RefinementList refinementList={params} setRefinementList={setParams} />
    //     
    //   </div>
    // </>
  )
}

Store.getLayout = (page) => <Layout>{page}</Layout>

export default Store
