import { NavLinks } from '@/constant'
import { Session } from 'inspector'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders'

const Navbar = () => {
  const Session = {};
  
  return (
    <nav className="navbar flexBetween">
        <div className="flex-1 flexStart gap-10">
            <Link href="/" passHref>
                <Image src="/logo.svg" width={115} height={43} alt="Flexibble"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
              {NavLinks.map((link) => (
                <Link href={link.href} key={link.key} passHref>
                  {link.text}
                </Link>
              ))}
            </ul>
        </div>

        <div className="flexCenter gap-4">
          {Session ? (
            <>
            UserPhoto

            <Link href="/create-project" passHref>
              Share Work 
            </Link>
            </>
          ) : (
            <AuthProviders />
          )}
        </div>
    </nav>
  )
}

export default Navbar
