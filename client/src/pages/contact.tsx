import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head";

const Contact: NextPageWithLayout = () => {
    return (
        <main className="relative flex-grow" style={{ minHeight: '-webkit-fill-available' }}>
            <Head
                title="Залишайтесь на зв'язку"
                description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
            />
            <section className="py-24 2xl:py-44 max-w-7xl mx-auto">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        {/* <span className="mb-9 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-300"></span> */}
                        <h2 className="mb-12 font-heading font-medium text-9xl md:text-10xl xl:text-11xl leading-tight">Контакти</h2>
                        <p className="mb-20 xl:mb-32 font-heading text-lg leading-8 text-darkBlueGray-400 max-w-lg mx-auto">
                            <span><b>email:</b> <i>support@nemezis.store</i></span> <br/>
                            <span><b>instagram:</b> <i><a href="instagram.com" className="underline">nemezis.official</a></i></span><br/>
                            <span><b>telegram:</b> <i>nemezis.offical</i></span><br/>
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 lg:items-center gap-14 lg:gap-16 xl:gap-44">
                        <img src="/mail.jpg" alt="" />
                        <div className="lg:max-w-lg">
                            <img className="h-18 mb-9" src="uinel-assets/elements/content/icon-orange-pencil.svg" alt="" />
                            {/* <h2 className="mb-10 font-heading font-medium text-7xl xl:text-8xl leading-snug">A spatial system is a set of rules for how you measure and size your UI elements.</h2> */}
                            <h2 className="mb-10 font-heading font-medium text-7xl xl:text-8xl leading-snug">Ми завжди раді звортньому зв'язку від наших клієнтів. Це допомагає покращити наш сервіс</h2>
                            <p className="mb-14 text-lg leading-6 text-darkBlueGray-400">Щоб зв'язатись з нами, скористайтесь посиланням нижче</p>
                            <a className="inline-flex items-center text-green-600 hover:text-green-700 border-b border-green-600 pb-1 hover:border-green-700" href="#">
                                <span className="text-xl font-bold tracking-tight">Зв'язатися з нами</span>
                                <svg className="ml-4" width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8 1L15 7H1" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M11 12L15 7" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
Contact.getLayout = (page) => <Layout>{page}</Layout>
export default Contact;