export const FAQ = () => {
    return (
        <div className="space-y-4" style={{maxWidth: '1480px', margin: '100px auto'}}>
            <div className="flex items-center justify-center -mt-2 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-20">
                <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold text-heading">F.A.Q</h3>
            </div>
            <details
                className="group border-l-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                    Які способи доставки є в магазині Nemezis?
                </h2>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    На даний момент, доступна лише доставка у відділення нової пошти.
                </p>
            </details>

            <details
                className="group border-l-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                    Яка вартість і терміни доставки?
                </h2>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                <b>Відділення «Нова Пошта»</b>
                <br/>
                Згідно з тарифами перевізника
                <br/>
                Термін доставки до 5 днів з моменту оформлення замовлення
                <br/>
                <br/>

                <b>Кур'єр «Нова Пошта»</b>
                <br/>
                Тичасово недоступно
                <br/>
                <br/>
                <b>Самовивіз із магазину</b>
                <br/>
                Тимчасово недоступно


                </p>
            </details>

            <details
                className="group border-l-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                    Як я можу оплатити товар?
                </h2>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    1) Готівкою/Картою при отриманні товару на новій пошті.
                    <br/>
                    2) Переказом на карту.
                </p>
            </details>


            <details
                className="group border-l-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                    Чи можу я зарезервувати товар?
                </h2>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Нажаль, на даний момент можливість бронювання товару відсутня.
                </p>
            </details>


            <details
                className="group border-l-4 border-black bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
            >
                <summary className="flex items-center justify-between cursor-pointer">
                <h2 className="text-lg font-medium text-gray-900">
                    Чи є у вас товари зі знижками? Чи можу я отримати додаткову знижку на товар?
                </h2>

                <span
                    className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                    />
                    </svg>
                </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">
                    Знижки на асортимент інтернет-магазину <b>Nemezis</b> можливі в періоди розпродажу. Товари, на які поширюється дія знижки, ви можете знайти на головній сторінці веб-сайту.
                </p>
            </details>
            </div>

    );
}