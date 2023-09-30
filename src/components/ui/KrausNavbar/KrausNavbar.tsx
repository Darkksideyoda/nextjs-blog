'use client';

import { Image, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import NextImage from 'next/image';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import KrausNavLink from '../KrausNavLink/KrausNavLink';
import KrausSettingsLayout from '../KrausSettingsLayout/KrausSettingsLayout';
import KrausMobileBottomNavbar from './KrausMobileBottomNavbar';

export default function KrausNavbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return isMobile ? (
    <KrausMobileBottomNavbar />
  ) : (
    <Navbar isBlurred>
      <NavbarContent>
        {/* <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" /> */}
        <NavbarBrand>
          {/* <NextImage loading="eager" className="mask mask-squircle w-11" alt="Logo" src={LogoImage} /> */}
          <Image width={44} height={44} as={NextImage} loading="eager" alt="Logo" src="/Images/ppgithyb.png" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <KrausNavLink linkContent="Home" href="" />
        <KrausNavLink linkContent="Blog" href="blog" linkColorString=" from-yellow-400 to-red-500 " />
        <KrausNavLink linkContent="Projects" href="projects" linkColorString=" from-cyan-400 to-lime-400 " />
        <KrausNavLink linkContent="Apps" href="apps" linkColorString=" from-cyan-400 to-violet-400 " />
        <KrausNavLink linkContent="Contact" href="contact" linkColorString=" from-red-500 to-gray-400 " />
      </NavbarContent>
      <NavbarContent justify="end">
        <KrausSettingsLayout />
      </NavbarContent>
    </Navbar>
  );
}

{
  /* <NavbarMenu>
      <KrausNavLink isMenuItem={true} linkContent="Home" href="" />
      <KrausNavLink isMenuItem={true} linkContent="Blog" href="blog" linkColorString=" from-yellow-400 to-red-500 " />
      <KrausNavLink
        isMenuItem={true}
        linkContent="Projects"
        href="projects"
        linkColorString=" from-cyan-400 to-lime-400 "
      />
      <KrausNavLink
        isMenuItem={true}
        linkContent="Apps"
        href="apps"
        linkColorString=" from-cyan-400 to-violet-400 "
      />
      <KrausNavLink
        isMenuItem={true}
        linkContent="Contact"
        href="contact"
        linkColorString=" from-red-500 to-gray-400 "
      />
    </NavbarMenu> */
}
