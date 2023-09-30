'use client';

import './style.css';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { CircleMenu, CircleMenuItem } from 'react-circular-menu-customization';
import { Home } from 'styled-icons/boxicons-solid';
import { BookContacts, Settings, SpeakerMute, WindowApps } from 'styled-icons/fluentui-system-filled';
import { Moon, Sun } from 'styled-icons/heroicons-solid';
import { Architecture, Translate } from 'styled-icons/material';
import { Stream } from 'styled-icons/material-sharp';

import KrausMobileNavLink from '../KrausNavLink/KrausMobileNavLink';

function KrausMobileBottomNavbar() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitcherOnClick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <nav className="fixed inset-x-0 bottom-0 flex h-bottombar-height items-center justify-around border-t border-foreground-200 bg-foreground-50 text-center text-foreground-500 backdrop-blur-sm">
      <KrausMobileNavLink
        href=""
        linkContent="Home"
        iconComponent={<Home style={{ fill: 'url(#home-gradient)' }} size={20} />}
      />
      <KrausMobileNavLink
        linkColorString=" from-yellow-400 to-red-500 "
        linkContent="Blog"
        href="blog"
        iconComponent={<Stream style={{ fill: 'url(#blog-gradient)' }} size={20} />}
      />

      <KrausMobileNavLink
        className=""
        linkColorString=" from-cyan-400 to-lime-400 "
        href="projects"
        linkContent="Projects"
        iconComponent={<Architecture style={{ fill: 'url(#projects-gradient)' }} size={20} />}
      />

      <KrausMobileNavLink
        linkColorString=" from-cyan-400 to-violet-400 "
        href="apps"
        linkContent="Apps"
        iconComponent={<WindowApps style={{ fill: 'url(#apps-gradient)' }} size={20} />}
      />
      <div className="mb-9 grid items-center justify-items-center">
        <CircleMenu
          className="bottom-6 left-3"
          itemSize={1.2}
          startAngle={-190}
          rotationAngle={150}
          rotationAngleInclusive={false}
          circleMenuToggleItem={<Settings />}
          backgroundHexColor={theme === 'dark' ? '18181B' : 'FAFAFA'}
          borderHexColor={theme === 'light' ? '18181B' : 'FAFAFA'}
          borderWidth={0.05}
          textHexColor={theme === 'light' ? '18181B' : 'FAFAFA'}
        >
          <CircleMenuItem>
            <SpeakerMute />
          </CircleMenuItem>
          <CircleMenuItem>
            <Translate />
          </CircleMenuItem>
          <CircleMenuItem onClick={handleThemeSwitcherOnClick}>{theme === 'light' ? <Sun /> : <Moon />}</CircleMenuItem>
        </CircleMenu>

        <KrausMobileNavLink
          linkColorString=" from-red-500 to-gray-400 "
          href="contact"
          linkContent="Contact"
          iconComponent={<BookContacts style={{ fill: 'url(#blog-gradient)' }} size={20} />}
        />
      </div>

      <div style={{ position: 'absolute', width: 0, height: 0 }}>
        <svg width="0" height="0">
          <radialGradient id="home-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#34D399" offset="0%" />
            <stop stopColor="#4ADE80" offset="33.33%" />
            <stop stopColor="#6EE7B7" offset="66.66%" />
            <stop stopColor="#10B981" offset="100%" />
          </radialGradient>
        </svg>

        <svg width="0" height="0">
          <radialGradient id="blog-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#FFD700" offset="0%" />
            <stop stopColor="#FF0000" offset="100%" />
          </radialGradient>
        </svg>

        <svg width="0" height="0">
          <radialGradient id="projects-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#00CED1" offset="0%" />
            <stop stopColor="#32CD32" offset="100%" />
          </radialGradient>
        </svg>

        <svg width="0" height="0">
          <radialGradient id="apps-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop stopColor="#00CED1" offset="0%" />
            <stop stopColor="#EE82EE" offset="100%" />
          </radialGradient>
        </svg>
      </div>
    </nav>
  );
}

export default KrausMobileBottomNavbar;
