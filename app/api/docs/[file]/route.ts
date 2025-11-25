import type { NextApiRequest, NextApiResponse } from 'next'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { file } = req.query

  if (!file || typeof file !== 'string') {
    return res.status(400).json({ error: 'Invalid file request' })
  }

  const filePath = join(process.cwd(), 'public', 'docs', file)

  if (!existsSync(filePath)) {
    return res.status(404).json({ error: 'File not found' })
  }

  // Headers before streaming
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', `inline; filename="${file}"`)

  const stream = createReadStream(filePath)

  // Handle unexpected stream errors
  stream.on('error', (err) => {
    console.error('Stream error:', err)
    res.destroy(err)
  })

  stream.pipe(res)
}
