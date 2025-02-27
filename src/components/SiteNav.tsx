'use client';

import { type ReactNode, useState, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { type MotionProps, motion } from 'framer-motion'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { atomWithReducer, selectAtom } from 'jotai/utils'
import { useHover } from 'react-aria'
import * as R from 'ramda'
import { useScroll, useMotionValueEvent } from 'framer-motion'

import { BsDiscord } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { MdAssignment, MdAssignmentInd, MdArrowForward } from 'react-icons/md'
import { IoServer, IoNewspaperSharp } from 'react-icons/io5'
import { ImBlog } from 'react-icons/im'
import { RiTwitterXLine } from 'react-icons/ri'
import { PiTelegramLogoLight } from 'react-icons/pi'
import { FiChevronDown, FiBox } from 'react-icons/fi'

import './SiteNav.css'
import { ChangelogIcon } from '@/components/icons'

import { AnimatedDetails } from './Details'

function Banner() {
  const pathname = usePathname()
  if (pathname === '/ai') {
    return null
  }
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 xl:px-8 z-50">
      <div
        className={cn(
          "pointer-events-auto flex items-center justify-between gap-x-6",
          "bg-ai-agent sm:rounded-xs",
          "p-0.5",
        )}
      >
        <div className="px-12 py-2.5 sm:py-3 bg-blackAlpha-600 rounded-xs">
          <p className="text-sm leading-6 text-white">
            <Link href="/confidential-computation-with-tee?utm_source=website&utm_medium=banner&utm_campaign=annoucement&utm_id=annoucement">
              Build with GPU TEE
              &nbsp;<span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}


function IconCompute({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M15.1579 19.8935H21.4738C21.6103 19.9029 21.7387 19.9614 21.8354 20.0581C21.9321 20.1548 21.9906 20.2832 22 20.4196V21.4718C22 21.6115 21.9446 21.7455 21.846 21.8445C21.7474 21.9435 21.6136 21.9994 21.4738 22H15.1579C15.021 21.9909 14.8921 21.9323 14.7952 21.8351C14.6984 21.7379 14.6403 21.6087 14.6318 21.4718V20.4196C14.6318 20.3505 14.6454 20.2821 14.6719 20.2183C14.6983 20.1544 14.737 20.0964 14.7859 20.0476C14.8348 19.9987 14.8928 19.96 14.9566 19.9336C15.0204 19.9071 15.0889 19.8935 15.1579 19.8935Z" fill="currentColor"/>
      <path d="M15.158 16.737H21.4738C21.6104 16.746 21.7391 16.8043 21.8359 16.9011C21.9327 16.9978 21.991 17.1265 22 17.2631V18.3152C21.9994 18.4546 21.9438 18.5881 21.8453 18.6866C21.7467 18.7852 21.6132 18.8408 21.4738 18.8413H15.158C15.0214 18.8323 14.8927 18.774 14.7959 18.6772C14.6991 18.5804 14.6408 18.4518 14.6318 18.3152V17.2631C14.6315 17.1939 14.6449 17.1254 14.6713 17.0614C14.6976 16.9974 14.7364 16.9393 14.7853 16.8904C14.8342 16.8415 14.8923 16.8028 14.9563 16.7764C15.0202 16.7501 15.0888 16.7367 15.158 16.737Z" fill="currentColor"/>
      <path d="M15.1579 13.5783H21.4738C21.6104 13.5873 21.7391 13.6456 21.8359 13.7424C21.9327 13.8392 21.991 13.9678 22 14.1044V15.1566C22 15.2256 21.9864 15.2941 21.9599 15.3579C21.9335 15.4217 21.8947 15.4797 21.8459 15.5286C21.797 15.5774 21.739 15.6162 21.6752 15.6426C21.6114 15.669 21.5429 15.6826 21.4738 15.6826H15.1579C15.0214 15.6736 14.8927 15.6153 14.7959 15.5186C14.6991 15.4218 14.6408 15.2931 14.6318 15.1566V14.1044C14.6318 14.0353 14.6454 13.9669 14.6719 13.903C14.6983 13.8392 14.737 13.7812 14.7859 13.7324C14.8348 13.6835 14.8928 13.6448 14.9566 13.6183C15.0204 13.5919 15.0889 13.5783 15.1579 13.5783Z" fill="currentColor"/>
      <path d="M17.7887 6.74334C17.7822 6.60486 17.7289 6.47267 17.6374 6.36848L13.4347 2.15336C13.3307 2.06128 13.1985 2.0072 13.0597 2H2.52615C2.3866 2 2.25278 2.05543 2.15411 2.15409C2.05544 2.25275 2 2.38657 2 2.5261V21.4718C1.99972 21.5409 2.01314 21.6095 2.03948 21.6734C2.06582 21.7374 2.10457 21.7955 2.15349 21.8444C2.2024 21.8933 2.26051 21.9321 2.32447 21.9584C2.38843 21.9847 2.45697 21.9981 2.52615 21.9979H13.0512C13.191 21.9979 13.325 21.9425 13.424 21.8439C13.523 21.7453 13.5789 21.6115 13.5795 21.4718V14.1044C13.5795 13.6858 13.7458 13.2843 14.0418 12.9883C14.3378 12.6924 14.7393 12.5261 15.158 12.5261H17.2689C17.3381 12.5264 17.4066 12.5129 17.4706 12.4866C17.5346 12.4603 17.5927 12.4215 17.6416 12.3726C17.6905 12.3237 17.7293 12.2656 17.7556 12.2017C17.7819 12.1377 17.7954 12.0692 17.7951 12L17.7887 6.74334ZM13.0512 6.74334V3.05858L16.7364 6.74334H13.0512ZM11.4728 11.4803C11.542 11.48 11.6105 11.4934 11.6745 11.5198C11.7384 11.5461 11.7965 11.5848 11.8455 11.6338C11.8944 11.6827 11.9331 11.7408 11.9595 11.8047C11.9858 11.8687 11.9992 11.9372 11.9989 12.0064V14.1108C11.9992 14.1799 11.9858 14.2485 11.9595 14.3124C11.9331 14.3764 11.8944 14.4345 11.8455 14.4834C11.7965 14.5323 11.7384 14.571 11.6745 14.5974C11.6105 14.6237 11.542 14.6371 11.4728 14.6368H10.4205V15.1629C10.4205 15.3025 10.3651 15.4363 10.2664 15.5349C10.1677 15.6336 10.0339 15.689 9.89435 15.689C9.7548 15.689 9.62097 15.6336 9.5223 15.5349C9.42363 15.4363 9.36819 15.3025 9.36819 15.1629V14.6241H8.32229C8.18275 14.6241 8.04892 14.5686 7.95025 14.47C7.85157 14.3713 7.79615 14.2375 7.79615 14.098C7.79615 13.9584 7.85157 13.8246 7.95025 13.726C8.04892 13.6273 8.18275 13.5719 8.32229 13.5719H10.953V12.5197H8.32229C8.18275 12.5197 8.04892 12.4643 7.95025 12.3656C7.85157 12.2669 7.79615 12.1331 7.79615 11.9936V9.88711C7.79615 9.74759 7.85157 9.61377 7.95025 9.5151C8.04892 9.41644 8.18275 9.36102 8.32229 9.36102H9.37459V8.83493C9.37459 8.6954 9.43002 8.56158 9.52869 8.46292C9.62737 8.36426 9.76119 8.30883 9.90073 8.30883C10.0403 8.30883 10.1741 8.36426 10.2728 8.46292C10.3715 8.56158 10.4269 8.6954 10.4269 8.83493V9.36102H11.4792C11.6132 9.36954 11.739 9.42879 11.8309 9.52671C11.9228 9.62464 11.9739 9.75389 11.9739 9.88818C11.9739 10.0225 11.9228 10.1517 11.8309 10.2496C11.739 10.3476 11.6132 10.4068 11.4792 10.4153H8.84205V11.4675L11.4728 11.4803Z" fill="currentColor"/>
    </svg>
  )
}

function IconStake({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M11.8086 3.19182L8.49748 7.18865C8.38969 7.32285 8.33982 7.49419 8.35881 7.665L9.4314 18.4238C9.44606 18.5762 9.51538 18.7183 9.62667 18.824L11.8652 20.8647C11.9568 20.9516 12.0784 21 12.2048 21C12.3313 21 12.4529 20.9516 12.5444 20.8647L14.7802 18.824C14.8936 18.7199 14.9634 18.5769 14.9755 18.4238L16.0509 7.665C16.0599 7.58024 16.052 7.49454 16.0277 7.4128C16.0035 7.33106 15.9632 7.25489 15.9094 7.18865L12.5982 3.19182C12.5514 3.13207 12.4915 3.08375 12.4231 3.05051C12.3547 3.01727 12.2795 3 12.2034 3C12.1273 3 12.0522 3.01727 11.9838 3.05051C11.9154 3.08375 11.8555 3.13207 11.8086 3.19182Z" fill="currentColor"/>
      <path d="M19.4922 7.24503L17.1376 9.23499C17.0105 9.35092 16.9309 9.50952 16.914 9.68034L16.065 16.82C16.0437 16.9718 16.0736 17.1265 16.1499 17.2597L17.098 18.8409C17.1206 18.8865 17.1525 18.9268 17.1918 18.9592C17.2311 18.9916 17.2769 19.0153 17.326 19.0289C17.3752 19.0425 17.4267 19.0455 17.4771 19.0379C17.5275 19.0303 17.5758 19.0122 17.6187 18.9847L19.096 18.0686C19.2175 17.986 19.3058 17.8632 19.345 17.7219L21.4336 10.9177C21.4868 10.7496 21.4799 10.5683 21.4138 10.4047L20.1091 7.41414C20.0917 7.35241 20.0586 7.29621 20.013 7.25099C19.9673 7.20576 19.9107 7.17305 19.8486 7.15604C19.7865 7.13902 19.7211 7.13828 19.6587 7.15387C19.5962 7.16946 19.5389 7.20087 19.4922 7.24503Z" fill="currentColor"/>
      <path d="M4.90331 7.24503L7.25791 9.23499C7.38704 9.34938 7.46708 9.50883 7.48148 9.68034L8.33049 16.82C8.35265 16.9715 8.3238 17.1262 8.24843 17.2597L7.30035 18.8409C7.27747 18.8866 7.24522 18.9269 7.20566 18.9593C7.1661 18.9917 7.12014 19.0155 7.07076 19.029C7.02138 19.0426 6.96969 19.0457 6.91905 19.038C6.8684 19.0304 6.81993 19.0122 6.7768 18.9847L5.30234 18.0686C5.18009 17.9867 5.09167 17.8636 5.05332 17.7219L2.96191 10.9177C2.90956 10.7493 2.91755 10.568 2.98454 10.4047L4.28637 7.41414C4.30378 7.35241 4.33692 7.29621 4.38256 7.25099C4.42821 7.20576 4.48481 7.17305 4.54688 7.15604C4.60896 7.13902 4.67438 7.13828 4.73684 7.15387C4.79929 7.16946 4.85664 7.20087 4.90331 7.24503Z" fill="currentColor"/>
    </svg>
  )
}

function IconBridge({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M8.57 0.509992L13.05 4.98999V2.03999C17.77 2.50999 21.53 6.26999 22 10.99H24C23.34 3.01999 15.49 -1.59001 8.57 0.509992ZM10.95 21.96C6.23 21.49 2.47 17.73 2 13.01H0C0.66 20.98 8.51 25.59 15.43 23.49L10.95 19.01V21.96Z" fill="currentColor"/>
    </svg>
  )
}

function IconLearn({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M20.1944 19.3788L9.70213 19.3929C9.25706 19.3929 8.89658 19.7545 8.89859 20.1984C8.89859 20.6424 9.25908 21 9.70414 21H9.70616L20.1965 20.9859C20.6415 20.9859 21.002 20.6243 21 20.1804C21 19.7384 20.6395 19.3788 20.1944 19.3788ZM19.2056 8.06451C20.3415 6.93147 20.3556 5.09531 19.2399 3.98237L19.0828 3.82567C18.531 3.27321 17.802 3 17.0689 3C16.3197 3 15.5645 3.28728 14.9906 3.85982L5.05208 13.7739C3.91625 14.9069 2.38772 18.9388 3.2557 19.8067C3.39063 19.9413 3.64639 19.9996 3.9807 19.9996C5.42666 19.9996 8.34477 18.8987 9.26713 17.9806L19.2056 8.06451Z" fill="currentColor"/>
    </svg>
  )
}

const LogoVariants = {
  hover: {
    fill: "#000",
    rotate: "-15deg",
  },
  blur: {
    fill: "rgba(205, 250, 80, 1)",
    rotate: "0",
  }
}

function Logo() {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      href="/"
      className={cn(
        "flex gap-2.5 items-center h-[4rem] p-2",
        "col-span-1 col-start-1 xl:col-span-3 row-start-1"
      )}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <svg viewBox="0 0 56 56" className={cn("h-full untanglable bg-black-900 rounded-sm transition-colors", isHover && "bg-phalaGreen-500")}>
        <motion.path
          d="M37.2219 13.7344H20.3467H19.5381H14.7217V24.8781V26.656V27.6629H20.3467V26.656V24.8781V19.3063H37.2219V13.7344ZM37.222 19.3063H42.847V27.6629H37.222V19.3063ZM14.7217 33.2343H20.3468V36.0214V41.591H14.7217V36.0214V34.6279V33.2343ZM20.3468 27.6625H37.2196V33.2343H20.3468V27.6625Z"
          variants={LogoVariants}
          initial="blur"
          animate={isHover ? "hover" : "blur"}
        />
      </svg>
      <svg viewBox="0 0 67 14" className="h-1/3 untanglable">
      <path d="M11.8857 4.96133C11.8857 8.06575 9.9414 9.85565 6.54896 9.85565H3.90017V13.6649H0.888672V0.333374H6.54896C9.9414 0.333374 11.8857 2.00944 11.8857 4.96133ZM9.02687 5.05649C9.02687 3.5712 8.07363 2.82857 6.39677 2.82857H3.90017V7.34223H6.39677C8.07363 7.34223 9.02687 6.58002 9.02687 5.05649Z" fill="#1A1A1A"/>
        <path d="M16.6053 0.333374V6.99937H22.647V0.333374H25.6567V13.6649H22.647V9.66532H16.6053V13.6649H13.5965V0.333374H16.6053Z" fill="#1A1A1A"/>
        <path d="M37.2171 10.9985H31.1033L30.0246 13.6667H26.9179L32.7117 0.335164H35.8184L41.517 13.6667H38.2959L37.2171 10.9985ZM36.1446 8.33036L34.1776 3.47605L32.1941 8.33214L36.1446 8.33036Z" fill="#1A1A1A"/>
        <path d="M62.591 10.9985H56.4773L55.3985 13.6667H52.2918L58.0856 0.335164H61.1923L66.8887 13.6667H63.6676L62.591 10.9985ZM61.519 8.33036L59.5533 3.47428L57.5698 8.33036H61.519Z" fill="#1A1A1A"/>
        <path d="M45.9046 0.333374V11.0368H51.6223V13.6649H42.8931V0.333374H45.9046Z" fill="#1A1A1A"/>
      </svg>
    </Link>
  )
}

//
// Dropdown Menu: for desktop / screen
//

const openedDropdownMenuAtom = atomWithReducer({}, (
  rec: Record<string, { isOpened: boolean, x: number, y: number, trigger?: string }>,
  action: { slug: string, type: 'opened' | 'closed' | 'focus' | 'blur' | 'toggle', x?: number, y?: number }
) => {
  const { slug, type } = action
  const keys = slug === '' ? R.keys(rec) : R.uniq(R.concat(R.keys(rec), [slug]))
  return R.fromPairs(R.map(k => {
    const prev = (rec[k] || { x: 0, y: 0 })
    const x = action.x === undefined ? prev.x : action.x
    const y = action.y === undefined ? prev.y : action.y
    const updated = R.mergeLeft({ x, y }, prev)
    if (type === 'opened' || type === 'focus') {
      updated.isOpened = (k === slug)
      updated.trigger = type
    } else if (type === 'toggle') {
      if (k === slug && updated.isOpened) {
        updated.isOpened = false
      } else {
        updated.isOpened = (k === slug)
      }
      updated.trigger = type
    } else if (type === 'closed' && updated.trigger !== 'focus' && k === slug) {
      updated.isOpened = false
      updated.trigger = type
    } else if (type === 'blur') {
      updated.isOpened = false
      updated.trigger = type
    }
    return [k, updated]
  }, keys))
})

function useDropdownMenuState(slug: string) {
  return useAtomValue(useMemo(() => selectAtom(
    openedDropdownMenuAtom,
    rec => rec[slug] || { isOpened: false, x: 0, y: 0 }
  ), [slug]))
}

const isAllDropdownMenuClosedAtom = atom(get => {
  const curr = R.all(R.equals(false), R.map(([k, v]) => v.isOpened, R.toPairs(get(openedDropdownMenuAtom))))
  return curr
})

function DropdownMenu({
  slug,
  featured,
  children,
}: {
  slug: string
  featured?: ReactNode
  children: ReactNode
}) {
  const setOpenedDropdown = useSetAtom(openedDropdownMenuAtom)
  const state = useDropdownMenuState(slug)
  const minWidth = featured ? 630 : 340
  const { hoverProps } = useHover({
    onHoverStart: () => {
      setOpenedDropdown({ slug, type: 'focus' })
    },
    onHoverEnd: () => {
      setOpenedDropdown({ slug, type: 'blur' })
    }
  })
  return (
    <motion.div
      {...(hoverProps as MotionProps)}
      className={cn(
        "comp-dropdown-menu",
        "fixed left-40 w-[22rem] min-h-[200px] z-40 overflow-hidden shadow-lg",
        !state.isOpened && 'untanglable',
      )}
      style={{ left: state.x || 0, top: state.y + 20, minWidth }}
      initial={{ height: 0, scale: 0, opacity: 0 }}
      animate={{
        height: state.isOpened ? 'auto' : 0,
        scale: state.isOpened ? 1 : 0,
        opacity: state.isOpened ? 1 : 0,
      }}
      transition={{ duration: 0.20 }}
    >
      {featured ? (
        <>
          <div
            className={cn("w-full flex flex-row bg-[#cdfa50] rounded-sm")}
          >
            <div className="w-2/5">
              {featured}
            </div>
            <ul
              className={cn(
                "flex flex-col gap-1.5 p-5 relative bg-white rounded-sm",
                featured ? "w-3/5" : "w-full"
              )}
            >
              {children}
            </ul>
          </div>
        </>
      ) : (
        <ul
          className={cn(
            "flex flex-col gap-1.5 p-5 relative bg-white rounded-sm",
            featured ? "w-3/5" : "w-full"
          )}
        >
          {children}
        </ul>
      )}
    </motion.div>
  )
}

function DropdownOverlay() {
  const setOpenedDropdown = useSetAtom(openedDropdownMenuAtom)
  const isAllDropdownMenuClosed = useAtomValue(isAllDropdownMenuClosedAtom)
  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 z-20",
        isAllDropdownMenuClosed && 'untanglable',
      )}
      onClick={() => {
        if (!isAllDropdownMenuClosed) {
          setOpenedDropdown({ slug: '', type: 'blur' })
        }
      }}
    />
  )
}

//
// Drawer Menu: for Mobile / small screen.
//

const drawerMenuVisibleAtom = atom(false)

const expandedMenuAtom = atom(0)

function Hamburger() {
  const [isExpanded, setIsExpanded] = useAtom(drawerMenuVisibleAtom)
  return (
    <div className={cn("col-span-1 col-start-2 row-start-1 xl:hidden", "flex items-center justify-end", "mr-5")}>
      <button
        className={cn("site-hamburger-menu", isExpanded && "opened")}
        onClick={() => setIsExpanded(i => !i)}
        aria-expanded={isExpanded}
        aria-label="Site Navigation Menu"
      >
        <svg width="44" height="44" viewBox="0 0 100 100">
          <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          <path className="line line2" d="M 20,50 H 80" />
          <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
        </svg>
      </button>
    </div>
  )
}

function DrawerMenu() {
  const isExpanded = useAtomValue(drawerMenuVisibleAtom)
  return (
    <motion.div
      className="site-nav-drawer flex flex-col justify-between"
      initial={{x: '105%'}}
      animate={{x: isExpanded ? '0' : '105%'}}
    >
      <div className="pt-8 px-8">
        <Hamburger />
        <div className={cn("flex flex-col gap-5 text-black-900")}>
          <AnimatedDetails
            summaryClassName={"flex flex-row gap-2 items-center"}
            summary={
              <>
                Developers <FiChevronDown />
              </>
            }
            theIdxAtom={expandedMenuAtom} idx={1}
          >
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="https://docs.phala.network/"
                title="Docs"
                icon={<BiDetail className={cn("h-5 w-5")} />}
              >
                <p>Discover how Phala's AI Agent Contract offers the essential tools to develop and profit from intelligent applications.</p>
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/overview/phala-network?utm_source=phala.network&utm_medium=site-nav"
                title="About Phala Network"
                icon={<img src="/icons/menu-about-phala.png" className={cn("h-3.5 w-3.5")} />}
              >
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/overview/ai-execution-layer?utm_source=phala.network&utm_medium=site-nav"
                title="AI Execution Layer"
                icon={<img src="/icons/menu-ai-execution-layer.png" className={cn("h-5 w-5")} />}
              >
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/ai-agent-contract/getting-started?utm_source=phala.network&utm_medium=site-nav"
                title="Build OpenAI and Langchain Agents"
                icon={<FiBox className={cn("h-5 w-5")} />}
              >
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/developers/phat-contract/builders-program?utm_source=phala.network&utm_medium=site-nav"
                title="Builders Program"
                icon={<IoServer className={cn("h-5 w-5")} />}
              >
                <p>Receive grants and technical guidance to bring your idea to life with Phat Contract</p>
              </MenuItem>
            </ul>
          </AnimatedDetails>
          <AnimatedDetails
            summaryClassName={"flex flex-row gap-2 items-center"}
            summary={
              <>
                Network <FiChevronDown />
              </>
            }
            theIdxAtom={expandedMenuAtom} idx={2}
          >
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="https://docs.phala.network/tech-specs/pha-token?utm_source=phala.network&utm_medium=site-nav"
                title="PHA Token"
                icon={<img src="/icons/menu-pha-token.png" className={cn("h-5 w-5")} />}
              >
                <p>PHA is the native token of the Phala blockchain</p>
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/compute-providers/basic-info?utm_source=phala.network&utm_medium=site-nav"
                title="Compute to Earn"
                icon={<IconCompute className={cn("h-5 w-5")} />}
              >
                <p>Provide hardware to the network and earn rewards!</p>
              </MenuItem>
              <MenuItem
                href="https://app.phala.network/khala?utm_source=phala.network&utm_medium=site-nav"
                title="Stake"
                icon={<IconStake className={cn("h-5 w-5")} />}
              >
                <p>Help secure the network and earn yield by staking your PHA</p>
              </MenuItem>
              <MenuItem
                href="https://khala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav"
                title="Govern"
                icon={<MdAssignment className={cn("h-5 w-5")} />}
              >
                <p>Take an active part in deciding the future direction of off-chain compute</p>
              </MenuItem>
              <MenuItem
                href="https://subbridge.io/?utm_source=phala.network&utm_medium=site-nav"
                title="Bridge"
                icon={<IconBridge className={cn("h-4 w-4")} />}
              >
                <p>Bring tokens to and from the Phala Blockchain with SubBridge</p>
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav"
                title="Learn"
                icon={<IconLearn className={cn("h-5 w-5")} />}
              >
                <p>Explore the architecture and power of Phala Network</p>
              </MenuItem>
            </ul>
          </AnimatedDetails>
          <AnimatedDetails
            summaryClassName={"flex flex-row gap-2 items-center"}
            summary={
              <>
                Discover <FiChevronDown />
              </>
            }
            theIdxAtom={expandedMenuAtom} idx={3}
          >
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="/blog"
                title="Blog"
                icon={<IoNewspaperSharp className={cn("h-5 w-5")} />}
              >
                <p>Stay up-to-date with all things Phala</p>
              </MenuItem>
              <MenuItem
                href="/partnerships"
                title="Phala Ecosystem"
                icon={<img src="/icons/menu-phala-ecosystem.png" className={cn("h-5 w-5")} />}
              >
              </MenuItem>
              <MenuItem
                href="https://github.com/Phala-Network/growth-program"
                title="Ambassador Program"
                icon={<MdAssignmentInd className={cn("h-5 w-5")} />}
              >
                <p>Become a community leader and earn rewards</p>
              </MenuItem>
            </ul>
          </AnimatedDetails>

          <AnimatedDetails
            summaryClassName={"flex flex-row gap-2 items-center"}
            summary={
              <>
                Phala Cloud <FiChevronDown />
              </>
            }
            theIdxAtom={expandedMenuAtom} idx={4}
          >
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="https://cloud.phala.network/?utm_source=phala.network&utm_medium=site-nav"
                title="Phala Cloud"
              >
              </MenuItem>
              <MenuItem
                href="https://www.notion.so/phalanetwork/Phala-Cloud-User-Guide-1700317e04a18018a98ed9ea39b02670?utm_source=phala.network&utm_medium=site-nav"
                title="Docs"
              >
              </MenuItem>
              <MenuItem
                href="https://github.com/Phala-Network/phala-cloud-community/?utm_source=phala.network&utm_medium=site-nav"
                title="Community"
              >
              </MenuItem>
              <MenuItem
                href="https://dune.com/phala_network/phala-analytics?utm_source=phala.network&utm_medium=site-nav"
                title="Dune Statistics"
                icon={<img src="/icons/menu-ai-agent-contract-statstics.png" className={cn("h-5 w-5")} />}
              >
              </MenuItem>
            </ul>
          </AnimatedDetails>
        </div>
      </div>
      <div className="flex flex-row gap-2 px-8 pb-8 mb-20">
        <Link
          href="/blog"
          title="Blog"
          className={cn(
            "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700",
            "transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800",
          )}
        >
          <ImBlog className={cn("w-8 h-6")} />
        </Link>
        <Link
          href="https://twitter.com/PhalaNetwork"
          title="X.com"
          className={cn(
            "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700",
            "transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800",
          )}>
          <RiTwitterXLine className={cn("w-7 h-6")} />
        </Link>
        <Link
          href="https://t.me/phalanetwork"
          title="Telegram"
          className={cn(
            "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700",
            "transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800",
          )}
        >
          <PiTelegramLogoLight className={cn("w-8 h-6")} />
        </Link>
        <Link
          href="https://discord.gg/phala-network"
          title="Discord"
          className={cn(
            "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700",
            "transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800",
          )}
        >
          <BsDiscord className={cn("w-8 h-6")} />
        </Link>
        <Link
          href="https://coinmarketcap.com/community/profile/PhalaNetwork/"
          title="CoinMarketCap"
          target="_blank"
          className={cn(
            "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-750 text-whiteAlpha-700",
            "transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800",
          )}
        >
          <svg className="w-8 h-6" viewBox="0 0 76.52 77.67" xmlns="http://www.w3.org/2000/svg"><path d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z" fill="currentColor"/></svg>
        </Link>
      </div>
    </motion.div>
  )
}

//
// Menu Item
//

function SiteNavItem({
  dropdownTarget,
  children
}: {
  dropdownTarget: string
  children: ReactNode
}) {
  const setOpenedDropdown = useSetAtom(openedDropdownMenuAtom)
  const { hoverProps, isHovered } = useHover({
    onHoverStart: ({ target }) => {
      const rect = target.getBoundingClientRect()
      setOpenedDropdown({
        slug: dropdownTarget,
        type: 'opened',
        x: rect.x,
        y: rect.y + rect.height
      })
    },
    onHoverEnd: () => {
      setTimeout(() => {
        setOpenedDropdown({ slug: dropdownTarget, type: 'closed' })
      }, 250)
    }
  })
  return (
    <li className="relative h-[3rem] flex items-center cursor-pointer rounded-sm">
      <button
        {...hoverProps}
        className={cn("w-full h-full")}
        // cornerRadius={28}
        // fill={isHovered ? "rgba(0, 0, 0, 0.06)" : "rgba(0, 0, 0, 0)"}
        onClick={({ target }) => {
          const rect = (target as HTMLElement).getBoundingClientRect()
          setOpenedDropdown({
            slug: dropdownTarget,
            type: 'toggle',
            x: rect.x,
            y: rect.y + rect.height
          })
        }}
      >
        <span className={cn('px-8 py-4 transition-all text-black-900 font-medium untanglable h-full flex items-center')}>
          {children}
          <motion.span
            className="ml-1.5"
            initial={{ rotate: 0 }}
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="text-black-200" />
          </motion.span>
        </span>
      </button>
    </li>
  )
}

function MenuItem({ href, title, icon, children }: {
  href?: string
  title: string
  icon?: ReactNode
  children?: ReactNode
}) {
  return (
    <li className={cn("py-1.5 px-2.5")}>
      {href ? (
        <Link href={href} className={cn(
          "site-nav-menu-item btn-with-arrow",
          "flex flex-row gap-2.5 w-full items-start",
        )}>
          <span className={cn("h-8 w-8 p-1 flex flex-row justify-center items-center rounded-full bg-black-800")}>
            {icon}
          </span>
          <div className={cn("flex-grow w-full")}>
            <h4 className="heading">
              {title}
              <MdArrowForward className="arrow" />
            </h4>
            <div className="body">
              {children}
            </div>
          </div>
        </Link>
      ) : (
        <div className={cn("flex flex-row gap-2.5 w-full items-start")}>
          <span className={cn("h-8 w-8 p-1 flex flex-row justify-center items-center rounded-full bg-black-800")}>
            {icon}
          </span>
          <div className={cn("flex-grow w-full")}>
            <h4 className="heading">{title}</h4>
            <div className="body">{children}</div>
          </div>
        </div>
      )}
    </li>
  )
}

//
// The SiteNav using absolute positioning to overlap the content. So we need to
// add a padding to the top of the content to make sure it's not overlapped. The
// padding is >= 96px / 6rem.
//

function SiteNav() {
  const { scrollY } = useScroll()
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useMotionValueEvent(scrollY, 'change', (latest: number) => {
    if (latest > 0 && latest > lastScrollY && latest - lastScrollY > 10 && latest > window.screen.height / 2) {
      setNavVisible(false)
    } else if (latest < lastScrollY && lastScrollY - latest > 10) {
      setNavVisible(true)
    }
    setLastScrollY(latest)
  })

  return (
    <>
      <Banner />
      <nav className={cn(
          "site-nav w-screen fixed z-30 top-0 left-0",
          navVisible ? null : 'hide'
        )}
      >
        <div
          className={cn(
            "safe-viewport",
            "py-6",
          )}
        >
          <div
            className={cn(
              "bg-white rounded-sm shadow-lg",
              "grid gap-4 grid-cols-2 xl:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
            )}
          >
            <Logo />

            <Hamburger />

            <ul className="hidden xl:flex xl:items-center xl:gap-4 xl:h-[4rem] xl:col-start-5 xl:col-span-17 3xl:col-start-6 3xl:col-span-19 row-start-1">
              <SiteNavItem dropdownTarget="developers">Developers</SiteNavItem>
              <SiteNavItem dropdownTarget="network">Network</SiteNavItem>
              <SiteNavItem dropdownTarget="discover">Discover</SiteNavItem>
              <SiteNavItem dropdownTarget="ai-agent-contract">Phala Cloud</SiteNavItem>

              <div className="flex flex-row gap-2 grow justify-end pr-3">
                <Link
                  href="/blog"
                  title="Blog"
                  className={cn(
                    "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-50 text-black-900",
                    "transition-all hover:shadow-md hover:bg-black-150 hover:text-black-800",
                  )}
                >
                  <ImBlog className={cn("w-8 h-6")} />
                </Link>
                <Link
                  href="https://twitter.com/PhalaNetwork"
                  title="X.com"
                  className={cn(
                    "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-50 text-black-900",
                    "transition-all hover:shadow-md hover:bg-black-150 hover:text-black-800",
                  )}>
                  <RiTwitterXLine className={cn("w-7 h-6")} />
                </Link>
                <Link
                  href="https://t.me/phalanetwork"
                  title="Telegram"
                  className={cn(
                    "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-50 text-black-900",
                    "transition-all hover:shadow-md hover:bg-black-150 hover:text-black-800",
                  )}
                >
                  <PiTelegramLogoLight className={cn("w-8 h-6")} />
                </Link>
                <Link
                  href="https://discord.gg/phala-network"
                  title="Discord"
                  className={cn(
                    "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-50 text-black-900",
                    "transition-all hover:shadow-md hover:bg-black-150 hover:text-black-800",
                  )}
                >
                  <BsDiscord className={cn("w-8 h-6")} />
                </Link>
                <Link
                  href="https://coinmarketcap.com/community/profile/PhalaNetwork/"
                  title="CoinMarketCap"
                  target="_blank"
                  className={cn(
                    "shadow-lg rounded-2xl w-10 h-10 flex items-center justify-center bg-black-50 text-black-900",
                    "transition-all hover:shadow-md hover:bg-black-50 hover:text-black-800",
                  )}
                >
                  <svg className="w-8 h-6" viewBox="0 0 76.52 77.67" xmlns="http://www.w3.org/2000/svg"><path d="m66.54 46.41a4.09 4.09 0 0 1 -4.17.28c-1.54-.87-2.37-2.91-2.37-5.69v-8.52c0-4.09-1.62-7-4.33-7.79-4.58-1.34-8 4.27-9.32 6.38l-8.1 13.11v-16c-.09-3.69-1.29-5.9-3.56-6.56-1.5-.44-3.75-.26-5.94 3.08l-18.11 29.07a32 32 0 0 1 -3.64-14.94c0-17.52 14-31.77 31.25-31.77s31.3 14.25 31.3 31.77v.09s0 .06 0 .09c.17 3.39-.93 6.09-3 7.4zm10-7.57v-.17c-.14-21.35-17.26-38.67-38.29-38.67s-38.25 17.42-38.25 38.83 17.16 38.84 38.25 38.84a37.81 37.81 0 0 0 26-10.36 3.56 3.56 0 0 0 .18-5 3.43 3.43 0 0 0 -4.86-.23 30.93 30.93 0 0 1 -44.57-2.08l16.3-26.2v12.09c0 5.81 2.25 7.69 4.14 8.24s4.78.17 7.81-4.75l9-14.57c.28-.47.55-.87.79-1.22v7.41c0 5.43 2.18 9.77 6 11.91a11 11 0 0 0 11.21-.45c4.2-2.73 6.49-7.67 6.25-13.62z" fill="currentColor"/></svg>
                </Link>
              </div>

            </ul>
          </div>
        </div>
      </nav>

      <DrawerMenu />
      <DropdownOverlay />

      <DropdownMenu
        slug="developers"
        featured={(
          <div className={cn("flex flex-col justify-between w-full h-full py-7 px-5")}>
            <div className={cn("flex flex-col gap-2.5")}>
              <span className={cn("h-6 w-6 py-1")}>
                <BiDetail className={cn("h-5 w-5 text-black")} />
              </span>
              <h4 className="text-base text-[#323233] font-medium">Docs</h4>
              <div className={cn("text-sm text-[#5A5A5C]")}>
                <p>Discover how Phala's AI Agent Contract offers the essential tools to develop and profit from intelligent applications.</p>
              </div>
            </div>
            <Link
              href="https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav"
              className={cn(
                "btn-with-arrow",
                "text-sm font-semibold text-black",
              )}
            >
              Explore Now
              <MdArrowForward className="arrow" />
            </Link>
          </div>
        )}
      >
        <MenuItem
          href="https://docs.phala.network/overview/phala-network?utm_source=phala.network&utm_medium=site-nav"
          title="About Phala Network"
          icon={<img src="/icons/menu-about-phala.png" className={cn("h-3.5 w-3.5")} />}
        >
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/overview/ai-execution-layer?utm_source=phala.network&utm_medium=site-nav"
          title="AI Execution Layer"
          icon={<img src="/icons/menu-ai-execution-layer.png" className={cn("h-5 w-5")} />}
        >
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/ai-agent-contract/getting-started?utm_source=phala.network&utm_medium=site-nav"
          title="Build OpenAI and Langchain Agents"
          icon={<FiBox className={cn("h-5 w-5")} />}
        >
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/legacy/builders-program?utm_source=phala.network&utm_medium=site-nav"
          title="Builders Program"
          icon={<IoServer className={cn("h-5 w-5")} />}
        >
          <p>Receive grants and technical guidance to bring your idea to life with Phat Contract</p>
        </MenuItem>
      </DropdownMenu>

      <DropdownMenu slug="network">
        <MenuItem
          href="https://docs.phala.network/tech-specs/pha-token?utm_source=phala.network&utm_medium=site-nav"
          title="PHA Token"
          icon={<img src="/icons/menu-pha-token.png" className={cn("h-5 w-5")} />}
        >
          <p>PHA is the native token of the Phala blockchain</p>
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/compute-providers/basic-info?utm_source=phala.network&utm_medium=site-nav"
          title="Compute to Earn"
          icon={<IconCompute className={cn("h-5 w-5")} />}
        >
          <p>Provide hardware to the network and earn rewards!</p>
        </MenuItem>
        <MenuItem
          href="https://app.phala.network/khala?utm_source=phala.network&utm_medium=site-nav"
          title="Stake"
          icon={<IconStake className={cn("h-5 w-5")} />}
        >
          <p>Help secure the network and earn yield by staking your PHA</p>
        </MenuItem>
        <MenuItem
          href="https://khala.subsquare.io/?utm_source=phala.network&utm_medium=site-nav"
          title="Govern"
          icon={<MdAssignment className={cn("h-5 w-5")} />}
        >
          <p>Take an active part in deciding the future direction of off-chain compute</p>
        </MenuItem>
        <MenuItem
          href="https://subbridge.io/?utm_source=phala.network&utm_medium=site-nav"
          title="Bridge"
          icon={<IconBridge className={cn("h-4 w-4")} />}
        >
          <p>Bring tokens to and from the Phala Blockchain with SubBridge</p>
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/?utm_source=phala.network&utm_medium=site-nav"
          title="Learn"
          icon={<IconLearn className={cn("h-5 w-5")} />}
        >
          <p>Explore the architecture and power of Phala Network</p>
        </MenuItem>
      </DropdownMenu>

      <DropdownMenu slug="discover">
        <MenuItem
          href="/blog"
          title="Blog"
          icon={<IoNewspaperSharp className={cn("h-5 w-5")} />}
        >
          <p>Stay up-to-date with all things Phala</p>
        </MenuItem>
        <MenuItem
          href="/partnerships"
          title="Phala Ecosystem"
          icon={<img src="/icons/menu-phala-ecosystem.png" className={cn("h-5 w-5")} />}
        >
        </MenuItem>
        <MenuItem
          href="https://github.com/Phala-Network/growth-program"
          title="Ambassador Program"
          icon={<MdAssignmentInd className={cn("h-5 w-5")} />}
        >
          <p>Become a community leader and earn rewards</p>
        </MenuItem>
      </DropdownMenu>

      <DropdownMenu slug="ai-agent-contract">
        <MenuItem
          href="https://cloud.phala.network/?utm_source=phala.network&utm_medium=site-nav"
          title="Phala Cloud"
        >
        </MenuItem>
        <MenuItem
          href="https://www.notion.so/phalanetwork/Phala-Cloud-User-Guide-1700317e04a18018a98ed9ea39b02670?utm_source=phala.network&utm_medium=site-nav"
          title="Docs"
        >
        </MenuItem>
        <MenuItem
          href="https://github.com/Phala-Network/phala-cloud-community/?utm_source=phala.network&utm_medium=site-nav"
          title="Community"
        >
        </MenuItem>
        <MenuItem
          href="https://dune.com/phala_network/phala-analytics?utm_source=phala.network&utm_medium=site-nav"
          title="Dune Statistics"
          icon={<img src="/icons/menu-ai-agent-contract-statstics.png" className={cn("h-5 w-5")} />}
        >
        </MenuItem>
      </DropdownMenu>
    </>
  )
}

export default SiteNav
