import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
  activeClassname: string
}

export function ActiveLink({
  children,
  activeClassname,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href ? activeClassname : ''

  return (
    <Link className={className} {...rest}>
      {children}
    </Link>
  )
}
