import { NextPageWithLayout } from "types/global"
import Layout from "@modules/layout/templates"
import Head from "@modules/common/components/head";
const About: NextPageWithLayout = () => {
    return (
        
        <main className="relative flex-grow pb-20" style={{ minHeight: '-webkit-fill-available' }}>
            <Head
                title="Про нас"
                description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
            />
            <div className="text-center mt-10">
                        {/* <span className="mb-9 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-300"></span> */}
                        <h2 className="mb-12 font-heading font-medium text-9xl md:text-10xl xl:text-11xl leading-tight">Про нас</h2>
                        <p className="mb-20 xl:mb-32 font-heading text-lg leading-8 text-darkBlueGray-400 max-w-lg mx-auto">Newest haretra neque non mi aliquam, finibus mollis is the nulla aliquet in molestie odio congue.</p>
                    </div>
            <section>
                <div className="bg-white ">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="rgba(255,255,255,1)"/></svg>
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-semibold leading-8 text-gray-900">Лише вітчизняні бренди</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:shrink-0">
                                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                                        </svg>
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-semibold leading-8 text-gray-900">No hidden fees</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:shrink-0">
                                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                        </svg>
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-semibold leading-8 text-gray-900">Миттєва доставка</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                                    </div>
                                </div>

                                <div className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:shrink-0">
                                        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    </div>
                                    <div className="sm:min-w-0 sm:flex-1">
                                        <p className="text-lg font-semibold leading-8 text-gray-900">Завжди на зв'язку</p>
                                        <p className="mt-2 text-base leading-7 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container px-6 mx-auto max-w-7xl mt-40">
                
                {/* <section className="mb-32 text-gray-800 text-center">
                    <style>
                   
                    </style>
                    <h2 className="text-3xl font-bold mb-12">Більше <u className="">2500+</u> товарів від українських брендів</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                    <div className="mb-12 lg:mb-0">
                        <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/2.png"
                        className="img-fluid grayscale px-6 md:px-12"
                        alt="Nasa - logo"
                        />
                    </div>

                    <div className="mb-12 lg:mb-0">
                        <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/1.png"
                        className="img-fluid grayscale px-6 md:px-12"
                        alt="Amazon - logo"
                        />
                    </div>

                    <div className="mb-12 lg:mb-0">
                        <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/3.png"
                        className="img-fluid grayscale px-6 md:px-12"
                        alt="Nike - logo"
                        />
                    </div>

                    <div className="mb-12 lg:mb-0">
                        <img
                        src="https://mdbootstrap.com/img/Photos/new-templates/landing-page/4.png"
                        className="img-fluid grayscale px-6 md:px-12"
                        alt="Ikea - logo"
                        />
                    </div>
                    </div>
                </section> */}
                
                </div>
        </main>
    );
}
About.getLayout = (page) => <Layout>{page}</Layout>
export default About;