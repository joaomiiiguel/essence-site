import Image from "next/image"

export const CardPortfolio = ({id, title, client, durationVideo, imageCover, onClickCard }) => {
    return (
        <div key={id} className='relative flex rounded-lg overflow-hidden w-[250px] h-[400px] cursor-pointer hover:scale-[+1.1] transition delay-100 duration-300 ease-in-out ' onClick={onClickCard}>
            <Image src={imageCover} alt={title} className="w-full absolute" />
            <div className='absolute flex flex-col w-full justify-center items-center bottom-6'>
                <p className="font-bold text-white uppercase">{title}</p>
                <p className="text-white text-sm">{client} - {durationVideo}</p>
            </div>
        </div>
    )
}