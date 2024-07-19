import LoaderSvg from '@/public/loader.svg';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full">
            <Image
                src={LoaderSvg}
                alt="loader"
                width={22}
                height={22}
                className="animate-spin"
            />
        </div>
    )
}
export default Loader