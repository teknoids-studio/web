import Image from 'next/image'
import { Tomorrow } from 'next/font/google'

const tomorrow = Tomorrow({ weight: '700', subsets: ['latin'] })

export default function Header() {

    return (
        <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
                <div className="justify-center">
                    {/* 
                    dark:drop-shadow-[0_0_0.3rem_#ec4899]
                    dark:drop-shadow-[0_0_0.3rem_#fef08a]
                    */}
                    <h1 className={`${tomorrow.className} `}>
                        <div className='teknoids text-pink-700 xl:text-9xl lg:text-8xl md:text-6xl sm:text-4xl xs:text-2xl'>
                            TEKNOIDS
                        </div>
                        <div className='studio text-yellow-400 leading-none xl:text-8xl lg:text-7xl md:text-5xl sm:text-3xl xs:text-1xl'>
                            STUDIO
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    );
}