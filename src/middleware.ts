
import { NextRequest, NextResponse } from 'next/server'

//https://stackoverflow.com/questions/74584091/how-to-get-the-current-pathname-in-the-app-directory-of-next-js

const middleware = async (request: NextRequest) => {

  const { nextUrl } = request
  nextUrl.searchParams.set('lxpath', nextUrl.pathname)
  return NextResponse.rewrite(nextUrl)
}

export default middleware
