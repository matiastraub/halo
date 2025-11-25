import type { NextApiRequest, NextApiResponse } from 'next'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query

  if (!file || typeof file !== 'string') {
    return res.status(400).json({ error: 'Invalid file request' })
  }

  const rootPath = process.cwd()

  // Build path to `/public/docs/<file>`
  const filePath = join(rootPath, 'public', 'docs', file)

  if (!existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' })
  }

  res.setHeader('Content-Type', 'application/pdf')
  const stream = createReadStream(filePath)

  stream.on('error', () => res.status(500).json({ error: 'Error reading file' }))
  stream.pipe(res)
}
