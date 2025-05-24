import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { prisma } from '../lib/prisma'

export default async function Home() {
  const snippets = await prisma.snippets.findMany()

  return (
    <div>
      <h1 className="font-bold text-4xl">Home</h1>
      <div className="flex items-center justify-between  ">
        <h1>Snippets</h1>
        <Link href={'/snippet/new'}>
          <Button variant={'secondary'}> New </Button>
        </Link>
      </div>
      <div className=" my-10">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="flex items-center justify-between bg-gray-100 "
          >
            <h1>{snippet.title}</h1>
            <Link href={`/snippet/${snippet.id}`}>
              <Button variant={'ghost'}>View</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
