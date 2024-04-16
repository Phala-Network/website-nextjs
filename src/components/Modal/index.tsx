'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import { type PrimitiveAtom, useAtom, useSetAtom } from 'jotai'
import { Button, type ButtonProps } from 'react-aria-components'
import { FiX } from 'react-icons/fi'

import { cn } from '@/lib/utils'
import './styled.css'

export type OpenModalButtonProps = Omit<ButtonProps, 'onPress'> & {
  visiableAtom: PrimitiveAtom<boolean>
  children: ReactNode
}

export interface ModalProps {
  visiableAtom: PrimitiveAtom<boolean>
  theme?: "light" | "dark"
  modalClassName?: string
  headingClassName?: string
  title?: string
  children?: ReactNode
}

export function OpenModalButton({
  visiableAtom,
  children,
  ...props
}: OpenModalButtonProps) {
  const setVisible = useSetAtom(visiableAtom)
  return (
    <Button
      {...props}
      onPress={() => setVisible(true)}
    >
      {children}
    </Button>
  )
}

export function Modal({
  visiableAtom,
  theme = 'light',
  modalClassName,
  headingClassName,
  title,
  children,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const [visible, setVisible] = useAtom(visiableAtom)
  useEffect(() => {
    if (!ref.current) {
      return
    }
    if (visible) {
      ref.current.showModal()
    } else {
      ref.current.close()
    }
  }, [visible, ref])
  return (
    <dialog
      className="d-modal d-modal-bottom sm:d-modal-middle"
      ref={ref}
      onClose={() => setVisible(false)}
    >
      <div
        className={cn(
          "d-modal-box py-14",
          theme === 'light'
          ? "bg-white shadow-lg border border-black-200 text-black"
          : "bg-black-850/90 border border-whiteAlpha-200 text-white",
          modalClassName,
        )}
      >
        <form method="dialog" className="flex flex-row justify-end absolute top-0 left-0 right-0 pt-2 pr-0">
          <button className="btn btn-sm btn-circle btn-ghost">
            <FiX className={cn("w-6 h-6", theme === 'light' ? 'text-black' : 'text-white')} />
          </button>
        </form>
        {title ? <h3 className={cn("font-bold text-2xl text-center", headingClassName)}>{title}</h3> : null}
        <div className="pt-4">{children}</div>
      </div>
      <form method="dialog" className="d-modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}
