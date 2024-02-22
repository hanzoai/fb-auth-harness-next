import React, { type PropsWithChildren } from 'react'

const Main: React.FC<PropsWithChildren & {className?: string}> = async ({
  children,
  className=''
}) => {

  return (
    <main className={'container max-w-lg lg:mx-auto h-full bg-[#aaaaaa]' + className}>
      {children}
    </main>
  )
}

export default Main