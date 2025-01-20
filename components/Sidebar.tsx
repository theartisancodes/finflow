'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'
import PlaidLink from './PlaidLink'

const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();

    return (

        <section className="flex flex-col justify-between rounded-3xl m-6 w-[270px] h-[95%] bg-sidebar-gradient p-[1rem]">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <Image
                        src="/icons/logo-main.png"
                        width={54}
                        height={54}
                        alt="FinFlow logo"
                        className="size-[54px] max-xl:size-14 text-white"
                    />
                    <h1 className="sidebar-logo text-white">FinFlow</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={cn(
                                'sidebar-link hover:bg-gray-300 transition-all duration-200 ease-in-out text-sm',
                                {
                                    'bg-primary-gradient hover:scale-105 hover:bg-blue-500 text-sm': isActive,
                                }
                            )}
                        >
                            <div className="relative size-5">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({
                                        'brightness-[3] size-5 invert-0': isActive,
                                    })}
                                />
                            </div>
                            <p
                                className={cn(
                                    'sidebar-label transition-all duration-200 ease-in-out test-sm',
                                    {'!text-white': isActive}
                                )}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}

                <PlaidLink user={user} variant="ghost"/>
            </nav>

            <Footer user={user}/>
        </section>)
            }

            export default Sidebar
