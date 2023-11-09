import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, FireIcon, ClockIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline'

const navigation = [
  { name: '熱門貼文', href: '#' },
  { name: '最新貼文', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-x-10">
          <a href="#" className="text-xl -m-1.5 p-1.5 text-transparent bg-gradient-to-r from-cyan-500 to-blue-500  bg-clip-text transition duration-300 transform hover:scale-110">
            北美留学舍
          </a>
          
          <div className="hidden lg:flex lg:gap-x-2">
            <div className="flex items-center space-x-1  hover:bg-gray-100 rounded-md px-2 py-1">
                <FireIcon className="h-6 w-6 text-gray-500" />
                <a className="text-sm font-semibold leading-6 text-gray-900" href="#">
                热门贴文
                </a>
            </div>
            <div className="group flex items-center space-x-1 hover:bg-gray-100 rounded-md px-2 py-1">
                <ClockIcon className="h-6 w-6 text-gray-500" />
                <a className="text-sm font-semibold leading-6 text-gray-900" href="#">
                最新贴文
                </a>
            </div>

            <div class="relative flex items-center space-x-2">
                <input
                type="text"
                placeholder="搜尋"
                class="py-1 px-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 w-96"
                />
                <button class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                </button>
            </div>

            
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            註册/登入 <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}