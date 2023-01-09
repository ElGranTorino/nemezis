import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { FAQ as FAQComponent } from "@modules/custom/components/faq"
import Head from "@modules/common/components/head"

const Terms: NextPageWithLayout = () => {
    return (
        <main className="relative flex-grow" style={{ minHeight: '-webkit-fill-available' }}>
            <Head
                title="Поширені запитання"
                description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
            />
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg mx-auto text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white text-center">Умови користування</h2>
                        <p className="mb-4 font-medium">
                            Сайт https://www.nemezis.store належить Немезіс, яка є контролером для ваших особистих даних.

                            Ми використовуємо цю Політику конфіденційності, яка визначає, як ми обробляємо інформацію, зібрану https://www.nemezis.store, а також причини, за якими ми повинні збирати певні особисті дані про вас. Тому ви повинні прочитати цю Політику конфіденційності перед використанням сайту https://www.nemezis.store.

                            Translated with www.DeepL.com/Translator (free version)
                        </p>

                    </div>
                </div>
            </section>
        </main>
    );
}
Terms.getLayout = (page) => <Layout>{page}</Layout>
export default Terms;