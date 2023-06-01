'use client';

import { atom, type PrimitiveAtom } from 'jotai'

export const currentFeatureHighlightAtom: PrimitiveAtom<number> = atom(0)
