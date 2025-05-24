import EditSnippet from '@/components/EditSnippet'
import { prisma } from '@/lib/prisma'
import React from 'react'

const EditePageSnippet = async ({
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
  return (
    <div>
      <EditSnippet snippet={snippet} />
    </div>
  )
}

export default EditePageSnippet
