import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div className='flex flex-col w-full mt-24'>
        <h2 id='projects' className='font-bold text-lg tracking-widest text-white uppercase mb-10'>Projects</h2>
        <div className='flex flex-col w-full'>
            <div className='flex items-start gap-8 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://pkw.finance/">
                    <Image src="/philipswebsite.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>PKW.FINANACE</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>PKW.FINANCE</span> is a professional website offering outsourced accounting and finance services.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/react-icon.svg" alt='react icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>React</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonaldKisaka/PKW-corporate">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://furniture-app-utbp.vercel.app/">
                    <Image src="/RenoTzy.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>RENOTZY</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>RENOTZY</span> is a modern platform designed to enhance your home experience by integrating smart furniture solutions.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                    <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/next-icon.svg" alt='nextjs icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Next Js</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/react-icon.svg" alt='react icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>React</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonaldKisaka/furniture-app">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>

            <div className='flex items-start gap-8 mt-10 max-md:flex-col max-md:items-center'>
                <div className='rounded-lg w-full max-w-[640px] border border-[#D3D3D3]/50 p-3 sm:p-5 flex flex-col gap-5'>
                  <Link target='_blank' aria-label='See more about philip&apos;s website' href="https://insyc.vercel.app/">
                    <Image src="/Insync.png" alt="project screenshot" loading='lazy' width={600} height={380} className='rounded-md object-cover w-full h-auto text-transparent'/> 
                  </Link>
                  <div className='flex flex-col'>
                    <p className='font-semibold text-white text-xl tracking-widest'>INSYNC</p>
                    <p className='text-gray-400 mt-3'>
                        <span className='text-white'>INSYNC</span> InSync is a digital marketing agency that provides a variety of digital solutions that include responsive web design, app development, digital marketing strategies, and more.
                    </p>
                    <div className='grid grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2 items-center gap-2 mt-5'>
                    <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/next-icon.svg" alt='nextjs icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Next Js</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300'>
                           <Image src="/react-icon.svg" alt='react icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>React</p>
                        </div> 
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-500/20 text-blue-300'>
                           <Image src="/typescript-icon.svg" alt='typescript icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Typescript</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-400/20 text-blue-300'>
                           <Image src="/tailwind-icon.svg" alt='tailwind icon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Tailwind</p>
                        </div>
                        <div className='flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-white/20 text-white'>
                           <Image src="/shadcn-icon.svg" alt='shadcnicon' loading='lazy' width={20} height={20}
                           className='text-transparent' />
                           <p className='text-xs whitespace-nowrap'>Shadcn</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-4 w-full'>
                        <Link target='_blank' className='w-full sm:w-auto uppercase text-xs whitespace-nowrap transition-all rounded-full font-bold text-white hover:text-gray-800 hover:bg-white bg-transparent border border-white flex items-center justify-center px-4 py-2 gap-2' href="https://github.com/DonaldKisaka/Insyc">
                        <Image src="/github-icon.svg" loading="lazy" alt="GitHub" width={20} height={20} className="text-transparent"/>                
                        Source code
                        </Link>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project


