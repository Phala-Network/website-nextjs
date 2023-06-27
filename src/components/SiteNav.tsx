'use client';

import { type ReactNode, useState, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { type MotionProps, motion } from 'framer-motion'
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { atomWithReducer, selectAtom } from 'jotai/utils'
import { useHover } from 'react-aria'
import * as R from 'ramda'
import { BsDiscord, BsTwitter } from 'react-icons/bs'
import { BiDetail } from 'react-icons/bi'
import { MdCodeOff, MdCode, MdAssignment, MdAssignmentInd } from 'react-icons/md'
import { IoServer, IoNewspaperSharp, IoChatbubbleEllipses } from 'react-icons/io5'

import './SiteNav.css'

import Squircle from './Squircle'
import { AnimatedDetails } from './Details'


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

function IconPhalaWorld({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M13.1385 3.63233L9.42832 16.6374C9.41553 16.6821 9.38855 16.7214 9.35145 16.7493C9.31435 16.7773 9.26916 16.7924 9.2227 16.7924H6.49353L10.2798 3.51519C10.2925 3.47044 10.3194 3.43106 10.3565 3.40302C10.3937 3.37499 10.4389 3.35983 10.4854 3.35986H12.9332C12.9663 3.35993 12.9989 3.36765 13.0284 3.38243C13.058 3.39721 13.0837 3.41864 13.1036 3.44504C13.1235 3.47144 13.137 3.50209 13.1431 3.53459C13.1491 3.56708 13.1476 3.60054 13.1385 3.63233Z" fill="currentColor"/>
      <path d="M18.1458 20.6397H15.4144C15.3679 20.6397 15.3226 20.6246 15.2854 20.5965C15.2483 20.5685 15.2213 20.5291 15.2085 20.4844L11.8487 8.70316C11.8397 8.67134 11.8381 8.63786 11.8442 8.60534C11.8503 8.57282 11.8638 8.54215 11.8837 8.51575C11.9036 8.48934 11.9294 8.46792 11.959 8.45316C11.9886 8.4384 12.0213 8.43072 12.0544 8.4307H14.5018C14.5483 8.43067 14.5936 8.44582 14.6307 8.47386C14.6678 8.5019 14.6948 8.54128 14.7074 8.58603L17.2981 17.67L17.3001 17.676L18.1458 20.6397Z" fill="currentColor"/>
      <path d="M13.3616 17.9787C13.3487 17.9344 13.3217 17.8954 13.2848 17.8677C13.2478 17.84 13.2029 17.825 13.1567 17.825H6.36048C6.31397 17.825 6.26871 17.8401 6.2316 17.8682C6.19449 17.8962 6.16754 17.9356 6.15485 17.9803L5.474 20.3676C5.46494 20.3994 5.46338 20.4329 5.46945 20.4654C5.47552 20.4979 5.48906 20.5286 5.50898 20.555C5.52891 20.5814 5.55469 20.6028 5.5843 20.6176C5.61391 20.6323 5.64654 20.64 5.67962 20.64H13.8547C13.8879 20.64 13.9207 20.6323 13.9504 20.6174C13.9802 20.6026 14.006 20.581 14.0259 20.5544C14.0459 20.5278 14.0593 20.4969 14.0652 20.4642C14.0711 20.4315 14.0694 20.3979 14.06 20.366L13.3616 17.9787Z" fill="currentColor"/>
    </svg>
  )
}

function IconJobs({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M14.9072 14.9072L12.2 20.8399L9.49282 14.9072L3.56006 12.2L9.49282 9.49282L12.2 3.56006L14.9072 9.49282L20.8399 12.2L14.9072 14.9072Z" fill="currentColor"/>
    </svg>
  )
}

const LogoVariants = {
  hover: {
    fill: "#CDFA50",
    rotate: "-15deg",
  },
  blur: {
    fill: "#fff",
    rotate: "0",
  }
}

function Logo() {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link
      href="/"
      className={cn("flex gap-5 items-center h-[4rem] p-1",  "col-span-1 col-start-1 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 3xl:col-start-3 row-start-1")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <svg viewBox="0 0 56 56" className="h-full untanglable">
        <circle cx="28" cy="28" r="28" fill="black" fillOpacity="0.8" />
        <motion.path
          d="M37.2219 13.7344H20.3467H19.5381H14.7217V24.8781V26.656V27.6629H20.3467V26.656V24.8781V19.3063H37.2219V13.7344ZM37.222 19.3063H42.847V27.6629H37.222V19.3063ZM14.7217 33.2343H20.3468V36.0214V41.591H14.7217V36.0214V34.6279V33.2343ZM20.3468 27.6625H37.2196V33.2343H20.3468V27.6625Z"
          variants={LogoVariants}
          initial="blur"
          animate={isHover ? "hover" : "blur"}
        />
      </svg>
      <svg viewBox="0 0 67 24" className="h-1/2 untanglable">
        <path
          d="M10.6889 4.48711V0.0100732L8.64247 0.00012207V8.97906H10.6889V6.28538H14.7943V8.98901H16.8407V0.0100732H14.7943V4.48711H10.6889ZM3.83922 6.42227C6.14425 6.42227 7.46752 5.21845 7.46752 3.12668C7.46752 1.13937 6.14425 0.0101667 3.84424 0.0101667H0V8.9891H2.03888V6.42227H3.83922ZM3.73627 1.699C4.87623 1.699 5.52405 2.19645 5.52405 3.19135C5.52405 4.21609 4.87623 4.73095 3.73627 4.74089H2.03888V1.699H3.73627ZM24.7099 7.19331H20.5568L19.8362 8.9891H17.7245L21.6616 0.0101667H23.7733L27.6452 8.9891H25.4557L24.7099 7.19331ZM23.9818 5.39753L22.6459 2.12681L21.2976 5.39753H23.9818ZM37.8299 7.19331H41.9829L42.7136 8.9891H44.9032L41.0288 0.0101667H38.9196L34.985 8.9891H37.0967L37.8299 7.19331ZM39.924 2.12681L41.2548 5.39753H38.5756L39.924 2.12681ZM30.6334 0.0101667V7.22316H34.5178V8.99408H28.587V0.0151385L30.6334 0.0101667ZM6.25975 20.7462L1.85809 14.9758H0V23.9448H1.94848V18.1869L6.3376 23.9448H8.20071V14.9758H6.25975V20.7462ZM16.4167 14.9758V16.6572H11.5505V18.6047H15.9145V20.2861H11.5505V22.2759H16.5473V23.9448H9.51667V14.9758H16.4167ZM24.7904 16.6945V14.9758H17.2199V16.6945H19.9819V23.9448H22.0284V16.6945H24.7904ZM27.5775 14.9758L29.4808 21.746L31.3715 14.9758H33.3803L35.2961 21.746L37.1869 14.9758H39.2835L36.2704 23.9522H34.1587L32.3408 17.5526L30.4777 23.9448H28.3735L25.383 14.9683L27.5775 14.9758ZM44.2774 24C47.0294 24 49.1135 22.0251 49.1135 19.4508C49.1135 16.8666 47.0269 14.9315 44.2774 14.9315C41.528 14.9315 39.4439 16.8641 39.4439 19.4508C39.4439 22.0375 41.5255 24 44.2774 24ZM42.3338 21.4152C41.8131 20.892 41.5233 20.1855 41.528 19.4508C41.5305 18.9007 41.6978 18.3637 42.0087 17.9079C42.3197 17.4521 42.7602 17.098 43.2745 16.8904C43.7888 16.6829 44.3538 16.6313 44.8977 16.7421C45.4417 16.8529 45.9402 17.1212 46.3301 17.513C46.7199 17.9048 46.9836 18.4024 47.0877 18.9428C47.1918 19.4831 47.1315 20.0419 46.9146 20.5484C46.6978 21.0548 46.334 21.486 45.8694 21.7875C45.4048 22.0889 44.8604 22.2469 44.3051 22.2415C43.5634 22.2356 42.8544 21.9384 42.3338 21.4152ZM55.4211 23.9448L53.9849 21.388H51.9008V23.9448H49.8569V14.9758H53.7915C56.1619 14.9758 57.5077 16.1051 57.5077 18.0924C57.5077 19.4778 56.9126 20.4776 55.8103 20.99L57.7513 23.9448H55.4211ZM51.9058 19.6867H53.7966C54.924 19.6867 55.5693 19.1743 55.5693 18.1496C55.5693 17.1248 54.924 16.6572 53.7966 16.6572H51.9058V19.6867ZM61.8468 20.2911L64.4506 23.9448H66.9113L63.2755 18.7216L66.6853 14.9758H64.3175L60.5511 19.0549V14.9758H58.5047V23.9448H60.5411V21.7262L61.8468 20.2911Z"
          fill="#262626"
        />
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
        "fixed left-40 w-[22rem] min-h-[200px] z-40 overflow-hidden",
        "flex flex-row",
        !state.isOpened && 'untanglable',
      )}
      style={{ left: state.x || 0, top: state.y + 38, minWidth }}
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
          <Squircle
            className={cn("w-2/5")}
            fill="#CDFA50"
            updateDelay={210}
          >
            {featured}
          </Squircle>
        </>
      ) : null}
      <Squircle
        as="ul"
        className={cn(
          "flex flex-col gap-1.5 p-5 relative",
          featured ? "w-3/5" : "w-full"
        )}
        fill="#fff"
        updateDelay={210}
      >
        {children}
      </Squircle>
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
    <div className={cn("col-span-1 col-start-2 row-start-1 lg:hidden", "flex items-center justify-end", "mr-5")}>
      <button
        className={cn("site-hamjurger-menu", isExpanded && "opened")}
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
      className="site-nav-drawer"
      initial={{x: '105%'}}
      animate={{x: isExpanded ? '0' : '105%'}}
    >
      <div className="pt-8 px-8">
        <Hamburger />
        <div className={cn("flex flex-col gap-5")}>
          <AnimatedDetails summary="Developers" theIdxAtom={expandedMenuAtom} idx={1}>
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="https://docs.phala.network/developers/phat-contract"
                title="Docs"
                icon={<BiDetail className={cn("h-5 w-5 text-black")} />}
              >
                <p>Create powerful decentralized applications with Phat Contracts</p>
              </MenuItem>
              <MenuItem
                href="https://bricks.phala.network"
                title="No-Code"
                icon={<MdCodeOff className={cn("h-5 w-5 text-black")} />}
              >
                <p>A no code toolkit to plug together Phat Contracts</p>
              </MenuItem>
              <MenuItem
                href="https://phat.phala.network/"
                title="Native Code"
                icon={<MdCode className={cn("h-5 w-5 text-black")} />}
              >
                <p>Create your own Phat Brick and earn!</p>
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/developers/phat-contract/builders-program"
                title="Builders Program"
                icon={<IoServer className={cn("h-5 w-5 text-black")} />}
              >
                <p>Receive grants and technical guidance to bring your idea to life with Phat Contract</p>
              </MenuItem>
            </ul>
          </AnimatedDetails>
          <AnimatedDetails summary="Network" theIdxAtom={expandedMenuAtom} idx={2}>
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="https://docs.phala.network/compute-providers/basic-info"
                title="Compute to Earn"
                icon={<IconCompute className={cn("h-5 w-5 text-black")} />}
              >
                <p>Provide hardware to the network and earn rewards!</p>
              </MenuItem>
              <MenuItem
                href="https://app.phala.network/khala"
                title="Stake"
                icon={<IconStake className={cn("h-5 w-5 text-black")} />}
              >
                <p>Help secure the network and earn yield by staking your PHA</p>
              </MenuItem>
              <MenuItem
                href="#"
                title="Govern"
                icon={<MdAssignment className={cn("h-5 w-5 text-black")} />}
              >
                <p>Take an active part in deciding the future direction of off-chain compute</p>
              </MenuItem>
              <MenuItem
                href="https://subbridge.io/"
                title="Bridge"
                icon={<IconBridge className={cn("h-4 w-4 ml-0.5 text-black")} />}
              >
                <p>Bring tokens to and from the Phala Blockchain with SubBridge</p>
              </MenuItem>
              <MenuItem
                href="https://docs.phala.network/introduction/readme"
                title="Learn"
                icon={<IconLearn className={cn("h-5 w-5 text-black")} />}
              >
                <p>Explore the architecture and power of Phala Network</p>
              </MenuItem>
            </ul>
          </AnimatedDetails>
          <AnimatedDetails summary="Discover" theIdxAtom={expandedMenuAtom} idx={3}>
            <ul className={cn("flex flex-col gap-1.5 mt-2.5")}>
              <MenuItem
                href="https://medium.com/phala-network"
                title="News"
                icon={<IoNewspaperSharp className={cn("h-5 w-5 text-black")} />}
              >
                <p>Stay up-to-date with all things Phala</p>
              </MenuItem>
              <MenuItem
                title="Connect"
                icon={<IoChatbubbleEllipses className={cn("h-5 w-5 text-black")} />}
              >
                <p>Follow and dive into the Phala Community</p>
                <div className="flex flex-row gap-2">
                  <Link
                    href="https://discord.com/invite/phala"
                    className={cn(
                      "shadow-lg rounded-2xl bg-white w-12 h-12 flex items-center justify-center",
                    )}
                  >
                    <BsDiscord className={cn("w-8 h-6 text-[#5562EA]")} />
                  </Link>
                  <Link
                    href="https://twitter.com/PhalaNetwork"
                    className={cn(
                      "shadow-lg rounded-2xl bg-white w-12 h-12 flex items-center justify-center",
                    )}>
                    <BsTwitter className={cn("w-7 h-6 text-[#3397DB]")} />
                  </Link>
                </div>
              </MenuItem>
              <MenuItem
                href="https://github.com/Phala-Network/growth-program"
                title="Ambassador Program"
                icon={<MdAssignmentInd className={cn("h-5 w-5 text-black")} />}
              >
                <p>Become a community leader and earn rewards</p>
              </MenuItem>
              <MenuItem
                href="https://phala.world"
                title="PhalaWorld"
                icon={<IconPhalaWorld className={cn("h-5 w-5 text-black")} />}
              >
                <p>Gamified, on-chain representation of your contributions to Phala</p>
              </MenuItem>
              <MenuItem
                href="https://wellfound.com/company/phala-network"
                title="Jobs"
                icon={<IconJobs className={cn("h-5 w-5 text-black")} />}
              >
                <p>Help build the decentralized web</p>
              </MenuItem>
            </ul>
          </AnimatedDetails>
        </div>
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
    <li className="relative h-[3rem] flex items-center cursor-pointer">
      <button
        {...hoverProps}
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
        <span className={cn('px-8 py-4 transition-all text-blackAlpha-700 untanglable')}>
          {children}
        </span>
        <motion.div
          className="untanglable"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
        <Squircle cornerRadius={28} fill="rgba(0, 0, 0, 0.06)" />
        </motion.div>
      </button>
    </li>
  )
}

function MenuItem({ href, title, icon, children }: {
  href?: string
  title: string
  icon?: ReactNode
  children: ReactNode
}) {
  return (
    <li className={cn("py-1.5 px-2.5")}>
      {href ? (
        <Link href={href} className={cn("flex flex-row gap-2.5 w-full")}>
          <span className={cn("h-6 w-6 py-1")}>
            {icon}
          </span>
          <div className={cn("flex-grow w-full")}>
            <h4 className="text-sm text-[#323233] font-medium">{title}</h4>
            <div className={cn("text-xs text-[#5A5A5C]")}>
              {children}
            </div>
          </div>
        </Link>
      ) : (
        <div className={cn("flex flex-row gap-2.5 w-full")}>
          <span className={cn("h-6 w-6 py-1")}>
            {icon}
          </span>
          <div className={cn("flex-grow w-full")}>
            <h4 className="text-sm text-[#323233] font-medium">{title}</h4>
            <div className={cn("text-xs text-[#5A5A5C]")}>
              {children}
            </div>
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
  return (
    <>
      <nav className="site-nav w-full absolute z-30">
        <div
          className={cn(
            "safe-viewport",
            "grid gap-4 grid-cols-2 lg:grid-cols-20 3xl:grid-cols-24 grid-rows-1",
            "py-6",
          )}
        >
          <Squircle
            className={cn("w-full relative h-[4rem] untanglable", "col-start-1 col-span-full lg:col-span-18 lg:col-start-2 3xl:col-start-3 3xl:col-span-20 row-start-1")}
            shadow={[
              '0px 10px 15px rgba(0, 0, 0, 0.1)',
              '0px 4px 6px rgba(0, 0, 0, 0.05)'
            ]}
          />

          <Logo />

          <Hamburger />

          <ul className="hidden lg:flex lg:items-center lg:gap-4 lg:h-[4rem] lg:col-start-6 lg:col-span-14 3xl:col-start-7 row-start-1">
            <SiteNavItem dropdownTarget="developers">Developers</SiteNavItem>
            <SiteNavItem dropdownTarget="compute-providers">Compute Providers</SiteNavItem>
            <SiteNavItem dropdownTarget="pha-token">PHA Token</SiteNavItem>
          </ul>
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
              <h4 className="text-sm text-[#323233] font-medium">Docs</h4>
              <div className={cn("text-xs text-[#5A5A5C]")}>
                <p>Create powerful decentralized applications with Phat Contracts</p>
              </div>
            </div>
            <Link href="#">Try Now!</Link>
          </div>
        )}
      >
        <MenuItem
          href="https://bricks.phala.network"
          title="No-Code"
          icon={<MdCodeOff className={cn("h-5 w-5 text-black")} />}
        >
          <p>A no code toolkit to plug together Phat Contracts</p>
        </MenuItem>
        <MenuItem
          href="https://phat.phala.network/"
          title="Native Code"
          icon={<MdCode className={cn("h-5 w-5 text-black")} />}
        >
          <p>Create your own Phat Brick and earn!</p>
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/developers/phat-contract/builders-program"
          title="Builders Program"
          icon={<IoServer className={cn("h-5 w-5 text-black")} />}
        >
          <p>Receive grants and technical guidance to bring your idea to life with Phat Contract</p>
        </MenuItem>
      </DropdownMenu>

      <DropdownMenu slug="compute-providers">
        <MenuItem
          href="https://docs.phala.network/compute-providers/basic-info"
          title="Compute to Earn"
          icon={<IconCompute className={cn("h-5 w-5 text-black")} />}
        >
          <p>Provide hardware to the network and earn rewards!</p>
        </MenuItem>
        <MenuItem
          href="https://app.phala.network/khala"
          title="Stake"
          icon={<IconStake className={cn("h-5 w-5 text-black")} />}
        >
          <p>Help secure the network and earn yield by staking your PHA</p>
        </MenuItem>
        <MenuItem
          href="#"
          title="Govern"
          icon={<MdAssignment className={cn("h-5 w-5 text-black")} />}
        >
          <p>Take an active part in deciding the future direction of off-chain compute</p>
        </MenuItem>
        <MenuItem
          href="https://subbridge.io/"
          title="Bridge"
          icon={<IconBridge className={cn("h-4 w-4 ml-0.5 text-black")} />}
        >
          <p>Bring tokens to and from the Phala Blockchain with SubBridge</p>
        </MenuItem>
        <MenuItem
          href="https://docs.phala.network/introduction/readme"
          title="Learn"
          icon={<IconLearn className={cn("h-5 w-5 text-black")} />}
        >
          <p>Explore the architecture and power of Phala Network</p>
        </MenuItem>
      </DropdownMenu>

      <DropdownMenu slug="pha-token">
        <MenuItem
          href="https://medium.com/phala-network"
          title="News"
          icon={<IoNewspaperSharp className={cn("h-5 w-5 text-black")} />}
        >
          <p>Stay up-to-date with all things Phala</p>
        </MenuItem>
        <MenuItem
          title="Connect"
          icon={<IoChatbubbleEllipses className={cn("h-5 w-5 text-black")} />}
        >
          <p>Follow and dive into the Phala Community</p>
          <div className="flex flex-row gap-2">
            <Link
              href="https://discord.com/invite/phala"
              className={cn(
                "shadow-lg rounded-2xl bg-white w-12 h-12 flex items-center justify-center",
              )}
            >
              <BsDiscord className={cn("w-8 h-6 text-[#5562EA]")} />
            </Link>
            <Link
              href="https://twitter.com/PhalaNetwork"
              className={cn(
                "shadow-lg rounded-2xl bg-white w-12 h-12 flex items-center justify-center",
              )}>
              <BsTwitter className={cn("w-7 h-6 text-[#3397DB]")} />
            </Link>
          </div>
        </MenuItem>
        <MenuItem
          href="https://github.com/Phala-Network/growth-program"
          title="Ambassador Program"
          icon={<MdAssignmentInd className={cn("h-5 w-5 text-black")} />}
        >
          <p>Become a community leader and earn rewards</p>
        </MenuItem>
        <MenuItem
          href="https://phala.world"
          title="PhalaWorld"
          icon={<IconPhalaWorld className={cn("h-5 w-5 text-black")} />}
        >
          <p>Gamified, on-chain representation of your contributions to Phala</p>
        </MenuItem>
        <MenuItem
          href="https://wellfound.com/company/phala-network"
          title="Jobs"
          icon={<IconJobs className={cn("h-5 w-5 text-black")} />}
        >
          <p>Help build the decentralized web</p>
        </MenuItem>
      </DropdownMenu>
    </>
  )
}

export default SiteNav
