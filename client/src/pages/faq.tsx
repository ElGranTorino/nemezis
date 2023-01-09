import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import { FAQ as FAQComponent } from "@modules/custom/components/faq"
import Head from "@modules/common/components/head"

const FAQ: NextPageWithLayout = () => {
    return (
        <main className="relative flex-grow" style={{ minHeight: '-webkit-fill-available' }}>
            <Head
                title="Поширені запитання"
                description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
            />
            <div className="flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover" style={{ backgroundImage: 'url("/for_her.jpg")' }}>
                <div className="absolute top-0 start-0 bg-black w-full h-full opacity-50 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="w-full flex items-center justify-center relative z-10 py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
                        <span className="font-satisfy block font-normal mb-3"></span>Поширені запитання
                    </h2>
                </div>
            </div>
            <FAQComponent/>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Powering innovation at <span className="font-extrabold">200,000+</span> companies worldwide</h2>
                        <p className="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                        <p className="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                        <a href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                            Learn more
                            <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                </section>
        </main>
    );
}
FAQ.getLayout = (page) => <Layout>{page}</Layout>
export default FAQ;