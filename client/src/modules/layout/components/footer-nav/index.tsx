import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import urls from "@lib/urls"

const FooterNav = () => {
  const { collections } = useCollections()
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // return (
  //   <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
  //     <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
  //       <div>
  //         <Link href="/">
  //           <a className="text-xl-semi uppercase">
  //             <span>
  //               Nem<span style={{transform: 'scaleX(-1)', display: 'inline-block'}}>e</span>zis
  //             </span>
  //           </a>
  //         </Link>
  //       </div>
  //       <div className="text-small-regular grid grid-cols-2 gap-x-16">
  //         <div className="flex flex-col gap-y-2">
  //           <span className="text-base-semi">Collections</span>
  //           <ul
  //             className={clsx("grid grid-cols-1 gap-y-2", {
  //               "grid-cols-2": (collections?.length || 0) > 4,
  //             })}
  //           >
  //             {collections?.map((c) => (
  //               <li key={c.id}>
  //                 <Link href={`/collections/${c.id}`}>
  //                   <a>{c.title}</a>
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         <div className="flex flex-col gap-y-2">
  //           <span className="text-base-semi">Medusa</span>
  //           <ul className="grid grid-cols-1 gap-y-2">
  //             <li>
  //               <a
  //                 href="https://github.com/medusajs"
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 GitHub
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="https://docs.medusajs.com"
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 Documentation
  //               </a>
  //             </li>
  //             <li>
  //               <a
  //                 href="https://github.com/medusajs/nextjs-starter-medusa"
  //                 target="_blank"
  //                 rel="noreferrer"
  //               >
  //                 Source code
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
  //       <span className="text-xsmall-regular text-gray-500">
  //         © Copyright {currentYear} Nemezis
  //       </span>
  //       <div className="min-w-[316px] flex xsmall:justify-end">
  //         <CountrySelect />
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <footer aria-label="Site Footer" className="bg-white dark:bg-gray-900">
      <div
        className="max-w-screen-2xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h2 className="text-xl-semi uppercase">
              NEMEZIS
            </h2>

            <p className="max-w-xs mt-4 text-gray-500 dark:text-gray-400">
              Одяг, взуття і аксесуари від українських брендів 🇺🇦.
            </p>

            <ul className="flex gap-6 mt-8">
            

              <li>
                <a
                  href="https://www.instagram.com/nemezisua/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

           
            </ul>
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4"
          >
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Каталог</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <a
                      href={urls.for_him}
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Для Нього
                    </a>
                  </li>

                  <li>
                    <a
                      href={urls.for_her}
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Для Неї
                    </a>
                  </li>

                  <li>
                    <a
                      href={urls.shoes}
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Взуття
                    </a>
                  </li>

                  <li>
                    <a
                      href={urls.clothing}
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Одяг
                    </a>
                  </li>

                  <li>
                    <a
                      href={urls.accessories}
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Аксесуари
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Компанія</p>

              <nav  className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Про нас
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Контакти
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/policy"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Політика Конфіденційності
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/terms"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Умови використання
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Навігація</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Головна
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/account"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Аккаунт
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Питання/Відповіді
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/store"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Категорії
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/Contact"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Контакти
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">Магазин</p>

              <nav className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/account/login"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Увійти
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/account/login"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Зареєструватись
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/return"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Повернення та Обмін
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/delivery"
                      className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                    >
                      Купівля та Доставка
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {currentYear} Nemezis. All rights reserved
        </p>
      </div>
    </footer>

  );
}

export default FooterNav
