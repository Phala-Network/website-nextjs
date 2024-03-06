'use client'

import { type ReactNode, useEffect, useRef } from 'react'
import { PrimitiveAtom, useAtom } from 'jotai'

export function Modal({
  visiableAtom,
  title,
  children,
}: {
  visiableAtom: PrimitiveAtom<boolean>
  title?: string
  children?: ReactNode
}) {
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
    <dialog className="d-modal d-modal-bottom sm:d-modal-middle" ref={ref} onClose={() => setVisible(false)}>
      <div className="d-modal-box bg-white">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {title ? <h3 className="font-bold text-lg -mt-2.5">{title}</h3> : null}
        <div className="pt-4">{children}</div>
      </div>
    </dialog>
  )
}
