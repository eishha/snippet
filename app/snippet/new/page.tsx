import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { prisma } from '@/lib/prisma'
import { Label } from '@radix-ui/react-label'
import { redirect } from 'next/navigation'

import React from 'react'

const CreateSnippetPage = () => {
  async function createSnippet(formData: FormData) {
    'use server'
    const title = formData.get('title') as string
    const code = formData.get('code') as string

    const snippet = await prisma.snippets.create({
      data: {
        title,
        code,
      },
    })
    console.log('created snippet', snippet)

    redirect('/')
  }
  return (
    <form action={createSnippet}>
      <div>
        <Label>Title</Label>
        <Input type="text" name="title" id="title" />
      </div>
      <div>
        <Label>Code</Label>
        <Textarea name="code" id="code" />
      </div>
      <Button variant={'secondary'} type="submit" className="my-12">
        Add
      </Button>
    </form>
  )
}

export default CreateSnippetPage
