import { StoreGetProductsParams } from "@medusajs/medusa"
import { useCollections } from "medusa-react"
import { ChangeEvent } from "react"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
}

const RefinementList = ({
  refinementList,
  setRefinementList,
}: RefinementListProps) => {
  const { collections, isLoading } = useCollections()

  const handleCollectionChange = (
    e: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { checked } = e.target

    const collectionIds = refinementList.collection_id || []

    const exists = collectionIds.includes(id)

    if (checked && !exists) {
      setRefinementList({
        ...refinementList,
        collection_id: [...collectionIds, id],
      })

      return
    }

    if (!checked && exists) {
      setRefinementList({
        ...refinementList,
        collection_id: collectionIds.filter((c) => c !== id),
      })

      return
    }

    return
  }

  return (
    <div>
      <div className="px-8 py-4  small:pr-0 small:pl-8 small:min-w-[250px]">
        <div className="flex gap-x-3 small:flex-col small:gap-y-3">
          <span className="text-base-semi">Collections</span>
          <ul className="text-base-regular flex items-center gap-x-4 small:grid small:grid-cols-1 small:gap-y-2">
            {collections?.map((c) => (
              <li key={c.id}>
                <label className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    defaultChecked={refinementList.collection_id?.includes(
                      c.id
                    )}
                    onChange={(e) => handleCollectionChange(e, c.id)}
                    className="accent-amber-200"
                  />
                  {c.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <section>
    //   <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    //     <header>
    //       <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
    //         Product Collection
    //       </h2>

    //       <p className="max-w-md mt-4 text-gray-500">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
    //         praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
    //         natus?
    //       </p>
    //     </header>

    //     <div className="mt-8 sm:flex sm:items-center sm:justify-between">
    //       <div className="block sm:hidden">
    //         <button
    //           className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
    //         >
    //           <span className="text-sm font-medium"> Filters & Sorting </span>

    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             className="w-4 h-4"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //             />
    //           </svg>
    //         </button>
    //       </div>

    //       <div className="hidden sm:flex sm:gap-4">
    //         <div className="relative">
    //           <details className="group [&_summary::-webkit-details-marker]:hidden">
    //             <summary
    //               className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
    //             >
    //               <span className="text-sm font-medium"> Availability </span>

    //               <span className="transition group-open:-rotate-180">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth="1.5"
    //                   stroke="currentColor"
    //                   className="w-4 h-4"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                   />
    //                 </svg>
    //               </span>
    //             </summary>

    //             <div
    //               className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
    //             >
    //               <div className="bg-white border border-gray-200 rounded w-96">
    //                 <header className="flex items-center justify-between p-4">
    //                   <span className="text-sm text-gray-700"> 0 Selected </span>

    //                   <button
    //                     type="button"
    //                     className="text-sm text-gray-900 underline underline-offset-4"
    //                   >
    //                     Reset
    //                   </button>
    //                 </header>

    //                 <ul className="p-4 space-y-1 border-t border-gray-200">
    //                   <li>
    //                     <label
    //                       for="FilterInStock"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterInStock"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         In Stock (5+)
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterPreOrder"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterPreOrder"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Pre Order (3+)
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterOutOfStock"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterOutOfStock"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Out of Stock (10+)
    //                       </span>
    //                     </label>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </details>
    //         </div>

    //         <div className="relative">
    //           <details className="group [&_summary::-webkit-details-marker]:hidden">
    //             <summary
    //               className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
    //             >
    //               <span className="text-sm font-medium"> Price </span>

    //               <span className="transition group-open:-rotate-180">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth="1.5"
    //                   stroke="currentColor"
    //                   className="w-4 h-4"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                   />
    //                 </svg>
    //               </span>
    //             </summary>

    //             <div
    //               className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
    //             >
    //               <div className="bg-white border border-gray-200 rounded w-96">
    //                 <header className="flex items-center justify-between p-4">
    //                   <span className="text-sm text-gray-700">
    //                     The highest price is $600
    //                   </span>

    //                   <button
    //                     type="button"
    //                     className="text-sm text-gray-900 underline underline-offset-4"
    //                   >
    //                     Reset
    //                   </button>
    //                 </header>

    //                 <div className="p-4 border-t border-gray-200">
    //                   <div className="flex justify-between gap-4">
    //                     <label
    //                       for="FilterPriceFrom"
    //                       className="flex items-center gap-2"
    //                     >
    //                       <span className="text-sm text-gray-600">$</span>

    //                       <input
    //                         type="number"
    //                         id="FilterPriceFrom"
    //                         placeholder="From"
    //                         className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
    //                       />
    //                     </label>

    //                     <label for="FilterPriceTo" className="flex items-center gap-2">
    //                       <span className="text-sm text-gray-600">$</span>

    //                       <input
    //                         type="number"
    //                         id="FilterPriceTo"
    //                         placeholder="To"
    //                         className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
    //                       />
    //                     </label>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </details>
    //         </div>

    //         <div className="relative">
    //           <details className="group [&_summary::-webkit-details-marker]:hidden">
    //             <summary
    //               className="flex items-center gap-2 pb-1 text-gray-900 transition border-b border-gray-400 cursor-pointer hover:border-gray-600"
    //             >
    //               <span className="text-sm font-medium"> Colors </span>

    //               <span className="transition group-open:-rotate-180">
    //                 <svg
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   fill="none"
    //                   viewBox="0 0 24 24"
    //                   strokeWidth="1.5"
    //                   stroke="currentColor"
    //                   className="w-4 h-4"
    //                 >
    //                   <path
    //                     strokeLinecap="round"
    //                     strokeLinejoin="round"
    //                     d="M19.5 8.25l-7.5 7.5-7.5-7.5"
    //                   />
    //                 </svg>
    //               </span>
    //             </summary>

    //             <div
    //               className="z-50 group-open:absolute group-open:top-auto group-open:left-0 group-open:mt-2"
    //             >
    //               <div className="bg-white border border-gray-200 rounded w-96">
    //                 <header className="flex items-center justify-between p-4">
    //                   <span className="text-sm text-gray-700"> 0 Selected </span>

    //                   <button
    //                     type="button"
    //                     className="text-sm text-gray-900 underline underline-offset-4"
    //                   >
    //                     Reset
    //                   </button>
    //                 </header>

    //                 <ul className="p-4 space-y-1 border-t border-gray-200">
    //                   <li>
    //                     <label
    //                       for="FilterRed"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterRed"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Red
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterBlue"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterBlue"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Blue
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterGreen"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterGreen"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Green
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterOrange"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterOrange"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Orange
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterPurple"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterPurple"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Purple
    //                       </span>
    //                     </label>
    //                   </li>

    //                   <li>
    //                     <label
    //                       for="FilterTeal"
    //                       className="inline-flex items-center gap-2"
    //                     >
    //                       <input
    //                         type="checkbox"
    //                         id="FilterTeal"
    //                         className="w-5 h-5 border-gray-300 rounded"
    //                       />

    //                       <span className="text-sm font-medium text-gray-700">
    //                         Teal
    //                       </span>
    //                     </label>
    //                   </li>
    //                 </ul>
    //               </div>
    //             </div>
    //           </details>
    //         </div>
    //       </div>

    //       <div className="hidden sm:block">
    //         <label for="SortBy" className="sr-only">SortBy</label>

    //         <select id="SortBy" className="h-10 text-sm border-gray-300 rounded">
    //           <option>Sort By</option>
    //           <option value="Title, DESC">Title, DESC</option>
    //           <option value="Title, ASC">Title, ASC</option>
    //           <option value="Price, DESC">Price, DESC</option>
    //           <option value="Price, ASC">Price, ASC</option>
    //         </select>
    //       </div>
    //     </div>

    //     <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
    //       <li>
    //         <a href="#" className="block overflow-hidden group">
    //           <img
    //             src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    //             alt=""
    //             className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    //           />

    //           <div className="relative pt-3 bg-white">
    //             <h3
    //               className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    //             >
    //               Basic Tee
    //             </h3>

    //             <p className="mt-2">
    //               <span className="sr-only"> Regular Price </span>

    //               <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
    //             </p>
    //           </div>
    //         </a>
    //       </li>

    //       <li>
    //         <a href="#" className="block overflow-hidden group">
    //           <img
    //             src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    //             alt=""
    //             className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    //           />

    //           <div className="relative pt-3 bg-white">
    //             <h3
    //               className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    //             >
    //               Basic Tee
    //             </h3>

    //             <p className="mt-2">
    //               <span className="sr-only"> Regular Price </span>

    //               <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
    //             </p>
    //           </div>
    //         </a>
    //       </li>

    //       <li>
    //         <a href="#" className="block overflow-hidden group">
    //           <img
    //             src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    //             alt=""
    //             className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    //           />

    //           <div className="relative pt-3 bg-white">
    //             <h3
    //               className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    //             >
    //               Basic Tee
    //             </h3>

    //             <p className="mt-2">
    //               <span className="sr-only"> Regular Price </span>

    //               <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
    //             </p>
    //           </div>
    //         </a>
    //       </li>

    //       <li>
    //         <a href="#" className="block overflow-hidden group">
    //           <img
    //             src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    //             alt=""
    //             className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    //           />

    //           <div className="relative pt-3 bg-white">
    //             <h3
    //               className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
    //             >
    //               Basic Tee
    //             </h3>

    //             <p className="mt-2">
    //               <span className="sr-only"> Regular Price </span>

    //               <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
    //             </p>
    //           </div>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </section>
  )
}

export default RefinementList
