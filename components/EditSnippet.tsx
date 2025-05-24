'use client'

import { Editor } from '@monaco-editor/react'
import React, { useState } from 'react'
import type { Snippets } from '@prisma/client'
import { saveSnippet } from '@/actions'
import { Button } from './ui/button'

const EditSnippet = ({ snippet }: { snippet: Snippets }) => {
  const [code, setCode] = useState(snippet.code)
  const changedCodeHandler = (value: string = '') => {
    setCode(value)
  }

  const saveSnippetAction = saveSnippet.bind(null, snippet.id, code)

  return (
    <div className="flex flex-col gap-4">
      <form
        action={saveSnippetAction}
        className="flex items-center justify-between"
      >
        <h1 className="font-bold">Your Code</h1>
        <Button type="submit" variant={'secondary'}>
          Save
        </Button>
      </form>

      <Editor
        height={'80vh'}
        defaultValue={code}
        onChange={changedCodeHandler}
      />
    </div>
  )
}

export default EditSnippet
