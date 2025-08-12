'use client'

import Cal from '@calcom/embed-react'
import { atom, useAtom, useSetAtom } from 'jotai'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const dialogVisibleAtom = atom(false)

export function OpenStartupProgramDialogButton({
  children,
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'onClick'>) {
  const setDialogVisible = useSetAtom(dialogVisibleAtom)
  return (
    <Button {...props} onClick={() => setDialogVisible(true)}>
      {children}
    </Button>
  )
}

export function StartupProgramDialog() {
  const [dialogVisible, setDialogVisible] = useAtom(dialogVisibleAtom)
  return (
    <Dialog open={dialogVisible} onOpenChange={setDialogVisible}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Startup Program</DialogTitle>
        </DialogHeader>
        <Cal
          namespace="startup-program-dialog"
          calLink="forms/dc97b836-34d1-41e2-8ea0-457722092796"
          config={{ theme: 'light', layout: 'month_view' }}
          className="w-full"
        />
      </DialogContent>
    </Dialog>
  )
}
