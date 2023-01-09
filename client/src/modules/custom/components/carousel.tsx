import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';


export const Carousel = () => {
    return (
        <AwesomeSlider style={{maxHeight: '100vh', overflow: 'hidden'}}>
            <div>
                {/* <div className='background-overlay'></div> */}
                <Image  
                    src="/leather.jpg"
                    layout="fill"
                    loading="eager"
                    priority={true}
                    quality={100}
                    objectFit="cover"
                    alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                    className="absolute inset-0"
                    draggable="false"
                />
            </div>
            <div>
                <Image
                    src="/new.jpg"
                    layout="fill"
                    loading="eager"
                    priority={true}
                    quality={100}
                    objectFit="cover"
                    alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                    className="absolute inset-0"
                    draggable="false"
                />
            </div>
            <div>
                <div className='background-overlay'></div>
                <Image
                    src="/leather.jpg"
                    layout="fill"
                    loading="eager"
                    priority={true}
                    quality={100}
                    objectFit="cover"
                    alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                    className="absolute inset-0"
                    draggable="false"
                />
            </div>
        </AwesomeSlider>
    );
}