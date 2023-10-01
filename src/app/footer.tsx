import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <div className="max-w-2xl mx-auto text-white py-10">
                <div className="text-center">
                    <div className="flex justify-center my-10">

                        <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                            <div className="flex items-center px-4 py-2 w-52 mx-2">

                                <Image
                                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                    src="/next.svg"
                                    alt="Next.js Logo"
                                    width={180}
                                    height={37}
                                    priority
                                />
                            </div>
                            <a
                                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                By{' '}
                                <Image
                                    src="/vercel.svg"
                                    alt="Vercel Logo"
                                    className="dark:invert"
                                    width={100}
                                    height={24}
                                    priority
                                />
                            </a>
                        </div>


                    </div>
                    <div className="flex justify-center my-10">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Teknoids Studios AB, 2023. </p>
                    </div>
                </div>
            </div>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">

                </div>
            </div>
        </footer>
    );
}