import { deleteSnippet } from '@/actions'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const SnippetDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const id = parseInt((await params).id)
  const snippet = await prisma.snippets.findUnique({
    where: {
      id,
    },
  })
  const deleteSnippetAction = deleteSnippet.bind(null, snippet.id)
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">{snippet?.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippet/${snippet?.id}/edit`}>
            <Button>Edit</Button>
          </Link>
          <form action={deleteSnippetAction}>
            <Button variant={'destructive'}>Delete</Button>
          </form>
        </div>
      </div>
      <pre className=" rounded-xl p-6 mt-6 bg-black text-white">
        <code>{snippet?.code}</code>
      </pre>
    </div>
  )
}

export default SnippetDetailPage
