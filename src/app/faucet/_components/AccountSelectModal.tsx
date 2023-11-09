'use client'
import React, { type PropsWithChildren } from 'react'
import {
  atom,
  useAtom,
  useAtomValue,
  useSetAtom,
  type WritableAtom,
} from 'jotai'
import { atomWithReset } from 'jotai/utils'
import {
  Button,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  Stack,
} from '@chakra-ui/react'
import { BsArrowRight, BsDownload } from 'react-icons/bs'

import {
  currentAccountAtom,
  availableAccountsAtom,
  useWeb3AccountsAccessGrant,
  walletListAtom,
} from './atoms'
import { cn } from '@/lib/utils'

interface SelectModalProps {
  visibleAtom: WritableAtom<boolean, [boolean], boolean>
}

interface WalletSelectModalProps extends SelectModalProps {
  accountSelectModalVisibleAtom: WritableAtom<boolean, [boolean], boolean>
}

interface AccountSelectModalProps extends SelectModalProps {
  walletSelectModalVisibleAtom: WritableAtom<boolean, [boolean], boolean>
}

interface WalletProviderCellProps {
  src: string
  name: string
  version?: string
  onClick?: () => void
  installed?: boolean
  downloadUrl: string
}

const ActionButton = ({
  onClick,
  href,
  children,
}: PropsWithChildren<{
  onClick?: () => void
  href?: string
}>) => {
  const preset = !href
    ? { onClick }
    : {
        href,
        target: '_blank',
        rel: 'noopener noreferer',
      }
  return (
    <Button
      {...preset}
      as={href ? 'a' : 'button'}
      display="flex"
      flex="row"
      justifyContent="space-between"
      p="4"
      h="auto"
      variant={'secondary'}
      borderColor=""
    >
      {children}
    </Button>
  )
}

const WalletProviderCell = ({
  src,
  name,
  version,
  onClick,
  installed,
  downloadUrl,
}: WalletProviderCellProps) => {
  return (
    <ActionButton href={installed ? undefined : downloadUrl} onClick={onClick}>
      <div className={cn('flex flex-row items-center gap-2')}>
        <Avatar src={src} size="sm" />
        {name}
        {!!version && (
          <sub className={cn('text-gray-300 font-extralight ml-0.5')}>
            {version}
          </sub>
        )}
      </div>
      {installed ? <BsArrowRight /> : <BsDownload />}
    </ActionButton>
  )
}

export const WalletSelectModal = ({
  visibleAtom,
  accountSelectModalVisibleAtom,
}: WalletSelectModalProps) => {
  const [visible, setVisible] = useAtom(visibleAtom)
  const setAccountSelectModalVisible = useSetAtom(accountSelectModalVisibleAtom)
  const wallets = useAtomValue(walletListAtom)
  const grant = useWeb3AccountsAccessGrant()
  return (
    <Modal isOpen={visible} onClose={() => setVisible(false)}>
      <ModalOverlay />
      <ModalContent className={cn('xl:min-w-[540px]')}>
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap="0" my="2">
            {wallets.map((wallet) => (
              <WalletProviderCell
                key={wallet.key}
                src={wallet.icon}
                name={wallet.name}
                version={wallet.version}
                downloadUrl={wallet.downloadUrl}
                installed={wallet.installed}
                onClick={() => {
                  grant(wallet.key)
                  setVisible(false)
                  setAccountSelectModalVisible(true)
                }}
              />
            ))}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const searchTermAtom = atomWithReset('')

const filteredAccountsAtom = atom((get) => {
  const accounts = get(availableAccountsAtom)
  const searchTerm = get(searchTermAtom).toLowerCase()
  if (searchTerm) {
    return accounts.filter((account) => {
      const name = account.name ? account.name.toLowerCase() : ''
      if (name.indexOf(searchTerm) !== -1) {
        return true
      }
      return account.address.toLowerCase().indexOf(searchTerm) !== -1
    })
  }
  return accounts
})

const AccountSearch = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermAtom)
  return (
    <InputGroup>
      <Input
        placeholder="Search account"
        value={searchTerm}
        onChange={(ev) => setSearchTerm(ev.target.value)}
        type="search"
      />
    </InputGroup>
  )
}

export const AccountSelectModal = ({
  visibleAtom,
  walletSelectModalVisibleAtom,
}: AccountSelectModalProps) => {
  const [visible, setVisible] = useAtom(visibleAtom)
  const setWalletSelectModalVisible = useSetAtom(walletSelectModalVisibleAtom)
  const accounts = useAtomValue(filteredAccountsAtom)
  const [selected, setSelected] = useAtom(currentAccountAtom)
  return (
    <Modal isOpen={visible} onClose={() => setVisible(false)}>
      <ModalOverlay />
      <ModalContent className={cn('xl:min-w-[540px]')}>
        <ModalHeader>Select Account</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className={cn('flex flex-col gap-4 my-2')}>
            <div>
              <Button
                size="xs"
                onClick={() => {
                  setVisible(false)
                  setWalletSelectModalVisible(true)
                }}
              >
                Switch Wallet
              </Button>
            </div>
            <AccountSearch />
            {accounts.length === 0 ? (
              <p className={cn('mb-2 text-sm text-gray-300')}>
                No Account Available.
              </p>
            ) : (
              <div
                className={cn(
                  'flex flex-col gap-4 pl-1 max-h-80 overflow-y-scroll'
                )}
              >
                {accounts.map((account) => (
                  <div
                    className={cn(
                      'flex flex-row justify-between items-center p-2 border border-solid border-gray-800 rounded-sm hover:border-phala'
                    )}
                    key={account.address}
                  >
                    <div>
                      <strong>{account.name}</strong>
                      <small className={cn('ml-1 text-gray-400 font-mono')}>
                        {account.address.substring(0, 6)}...
                        {account.address.substring(account.address.length - 6)}
                      </small>
                    </div>
                    {selected && selected.address === account.address ? (
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelected(null)
                          setVisible(false)
                        }}
                      >
                        Unselect
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelected(account)
                          setVisible(false)
                        }}
                      >
                        Select
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
