import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

const navigation = [
  {
    name: '校園看板',
    current: false,
    children: [
      { name: '普渡大学-西拉法叶分校', href: '#' },
      { name: '芝加哥大学', href: '#' },
      { name: '伊利诺伊大学厄巴纳-香檳分校', href: '#' },
      { name: '威斯康星麦迪逊大学-麥迪遜分校', href: '#' },
      { name: '西北大学', href: '#' },
      { name: '印地安那大学-伯明顿分校', href: '#' },
    ],
  },
  {
    name: '生活資訊',
    current: false,
    children: [
      { name: '省钱快报', href: '#' },
      { name: '旅游资讯', href: '#' },
      { name: '美食资讯', href: '#' },
      { name: '穿搭潮流', href: '#' },
      { name: '租屋资讯', href: '#' },
    ],
  },
  {
    name: '感情生活',
    current: false,
    children: [
      { name: '感情版', href: '#' },
      { name: '男孩版', href: '#' },
      { name: '女孩版', href: '#' },
    ],
  },
  {
    name: '留学申请',
    current: false,
    children: [
      { name: 'PhD 申请', href: '#' },
      { name: 'Master 申请', href: '#' },
      { name: 'Undergraduate 申请', href: '#' },
    ],
  },
  {
    name: '找工实习',
    current: false,
    children: [
      { name: '面经', href: '#' },
      { name: '职缺', href: '#' },
      { name: '内推', href: '#' },
    ],
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
    <div className="container mx-auto flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white pl-20 pt-5">

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                        'block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700'
                      )}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                              'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700'
                            )}
                          >
                            <ChevronRightIcon
                              className={classNames(
                                open ? 'rotate-90 text-gray-500' : 'text-gray-400',
                                'h-5 w-5 shrink-0'
                              )}
                              aria-hidden="true"
                            />
                            {item.name}
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50',
                                    'block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700'
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>

        </ul>
      </nav>
    </div>
  )
}
