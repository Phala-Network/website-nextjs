'use client';

import { atom, useSetAtom } from 'jotai';
import { Button } from 'react-aria-components'
import { ContactUsForm } from '@/components/ContactUsForm';
import { Modal } from '@/components/Modal'

const ContactUsModalVisibleAtom = atom(false)

export function ContactUsButton({ className, children = 'Contact Us', formId }: { className?: string, children?: React.ReactNode, formId?: string }) {
  const setVisible = useSetAtom(ContactUsModalVisibleAtom)
  return (
    <>
      <Button
        className={className}
        onPress={() => setVisible(true)}
      >
        {children}
      </Button>
      <Modal
        visiableAtom={ContactUsModalVisibleAtom}
        title="Contact Us"
      >
        <ContactUsForm className="flex flex-col gap-4 items-end" formId={formId} />
      </Modal>
    </>
  )
}
