import { atom, type WritableAtom } from 'jotai'

export const loginModalVisibleAtom = atom(
  false
) as unknown as WritableAtom<boolean, [boolean], boolean>
