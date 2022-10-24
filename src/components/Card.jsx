import ImgCode from '../assets/images/image-qr-code.png'

const Card = ( {title, para} ) => {
    return (
        <section className='bg-red-200 rounded-2xl text-center max-w-[320px] p-4 bg-white'>
            <img className='w-full rounded-xl' src={ImgCode} alt="Img-qr-code" />
            <h1 className='p-[10px] pt-5 pb-[18px] text-[1.4em] text-Darkblue font-bold'>{title}</h1>
            <p className='p-3 pt-0 pb-6 text-[1em] text-GrayishBlue font-normal leading-5'>{para}</p>
        </section>
    )
};

export default Card;