import { useCallback } from 'react';
import { atom, useAtom, useSetAtom, useAtomValue } from 'jotai';

// Poorman's Either
export type SendPostFormResult = { succeed: true; message: string } | { succeed: false; error: string };

// @see https://emailregex.com/
const regexEmail =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

async function submit(email: string): Promise<SendPostFormResult> {
  try {
    const resp = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    if (resp.status >= 200 && resp.status < 300) {
      return { succeed: true, message: 'Subscribed.' };
    }
    if (resp.status === 400) {
      const body = await resp.json();
      return { succeed: false, error: body.message };
    }
    return { succeed: false, error: 'Unknown Error, please try again later.' };
  } catch (err) {
    console.error('Unexpected exception:', err);
    return { succeed: false, error: 'Unknown Error, please try again later.' };
  }
}

const fieldEmailValueAtom = atom('');
const loadingAtom = atom(false);
const messageAtom = atom('');
const errorAtom = atom('');
const isSucceedAtom = atom(false);
const isErrorAtom = atom(false);

export const subscribeDerivedAtom = atom(null, async (get, set) => {
  const email = get(fieldEmailValueAtom);
  if (!regexEmail.test(email)) {
    set(isErrorAtom, true);
    set(errorAtom, 'Please enter a valid email address.');
    setTimeout(() => {
      set(isErrorAtom, false);
    }, 5000);
    return;
  }
  set(loadingAtom, true);
  // const result = await sendPostFormRequest(portalId, formId, email);
  const result = await submit(email)
  set(loadingAtom, false);
  if (result.succeed) {
    set(isSucceedAtom, true);
    set(messageAtom, result.message);
    setTimeout(() => {
      set(isSucceedAtom, false);
    }, 3000);
  } else {
    set(isErrorAtom, true);
    set(errorAtom, result.error!);
    setTimeout(() => {
      set(isErrorAtom, false);
    }, 5000);
  }
});

export const useSubscribe = function () {
  const setEmail = useSetAtom(fieldEmailValueAtom);
  const onSubmit = useSetAtom(subscribeDerivedAtom);
  const isLoading = useAtomValue(loadingAtom);
  const message = useAtomValue(messageAtom);
  const error = useAtomValue(errorAtom);
  const [isSucceed, setIsSucceed] = useAtom(isSucceedAtom);
  const [isError, setIsError] = useAtom(isErrorAtom);

  const dismiss = useCallback(() => {
    setIsError(false)
    setIsSucceed(false)
  }, [setIsError, setIsSucceed])

  return { setEmail, onSubmit, isLoading, message, error, isSucceed, isError, dismiss };
};
