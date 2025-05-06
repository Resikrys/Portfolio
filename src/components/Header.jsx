//New header COMPONENT + efectos nav-link
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from './ThemeToggle';

const sections = ['about', 'experience', 'skills', 'education', 'contact', 'projects'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offset = section.offsetTop;
          const height = section.offsetHeight;
          if (window.scrollY >= offset - 150 && window.scrollY < offset + height - 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // set initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClasses = (id, hoverColor) =>
    `${activeSection === id ? 'underline text-pink-500 underline-offset-4 font-semibold' : ''} hover:${hoverColor} transition-colors duration-200`;

  return (
    <header className="sticky top-0 z-50 bg-[var(--background-color)] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">
          ResikrysDev Portfolio
        </h1>

        <ThemeToggle />

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-6 text-base font-medium">
          <a href="#about" className={linkClasses('about', 'text-[var(--rose-color)]')}>About Me</a>
          <a href="#experience" className={linkClasses('experience', 'text-[var(--rose-color)]')}>Experience</a>
          <a href="#skills" className={linkClasses('skills', 'text-[var(--rose-color)]')}>Dev Skills</a>
          <a href="#education" className={linkClasses('education', 'text-[var(--rose-color)]')}>Education</a>
          <a href="#contact" className={linkClasses('contact', 'text-[var(--rose-color)]')}>Contacto</a>
          <a href="#projects" className={linkClasses('projects', 'text-[var(--rose-color)]')}>Projects</a>
        </nav>

        {/* Botón Hamburguesa Móvil */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--background-color)] text-white px-6 pb-4 flex flex-col gap-3">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={toggleMenu}
              className={`${activeSection === id ? 'underline text-pink-500 underline-offset-4 font-semibold' : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace('-', ' ')}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}


//My Header component -> MENÚ + Dropdown submenús
// import { useState } from "react";
// // import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import ThemeToggle from './ThemeToggle';

// // const sections = ['about', 'experience', 'skills', 'education', 'contact', 'interests'];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   // const [activeSection, setActiveSection] = useState('');

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     let current = '';
//   //     for (let id of sections) {
//   //       const section = document.getElementById(id);
//   //       if (section) {
//   //         const top = section.offsetTop - 100;
//   //         if (window.scrollY >= top) current = id;
//   //       }
//   //     }
//   //     setActiveSection(current);
//   //   };

//   //   window.addEventListener('scroll', handleScroll);
//   //   handleScroll(); // inicial

//   //   return () => window.removeEventListener('scroll', handleScroll);
//   // }, []);

//   return (
//     <header className="sticky top-0 z-50 bg-[var(--background-color)] text-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Título */}
//         <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)]">
//           ResikrysDev Portfolio
//         </h1>

//         <ThemeToggle />

//         {/* Menú Desktop */}
//         <nav className="hidden md:flex gap-6 text-base font-medium">
//           <a href="#about" className="hover:text-[var(--fuchsia-color)]">About Me</a>
//           <a href="#experience" className="hover:text-[var(--rose-color)]">Experience</a>
//           <a href="#skills" className="hover:text-[var(--primary-color)]">Dev Skills</a>
//           <a href="#education" className="hover:text-[var(--white)]">Education</a>
//           <a href="#contact" className="hover:text-[var(--light-gray)]">Contacto</a>
//           <a href="#interests" className="hover:text-[var(--primary-color)]">Also interested</a>
//         </nav>

//         {/* Botón Hamburguesa Móvil */}
//         <button onClick={toggleMenu} className="md:hidden text-white">
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Menú móvil desplegable */}
//       {menuOpen && (
//         <div className="md:hidden bg-[var(--background-color)] text-white px-6 pb-4 flex flex-col gap-3">
//           <a href="#about" onClick={toggleMenu}>About Me</a>
//           <a href="#experience" onClick={toggleMenu}>Experience</a>
//           <a href="#skills" onClick={toggleMenu}>Dev Skills</a>
//           <a href="#education" onClick={toggleMenu}>Education</a>
//           <a href="#contact" onClick={toggleMenu}>Contacto</a>
//           <a href="#interests" onClick={toggleMenu}>Also Interested</a>
//         </div>
//       )}
//     </header>
//   );
// }


/*
//Template navbar + popover prodcuts submenú TAILWIND
//'use client' //mark the module and its transitive dependencies as client code
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
              Product
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Features
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
*/

//export default Header;
