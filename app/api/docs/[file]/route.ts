import { NextRequest, NextResponse } from 'next/server'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'
import mime from 'mime'

/**
 * Nota: extraemos el `file` desde request.nextUrl.pathname para evitar problemas
 * de tipos con `context.params` (string | string[]).
 */
export async function GET(req: NextRequest) {
  // pathname: "/api/docs/<file>"
  const parts = req.nextUrl.pathname.split('/').filter(Boolean)
  const file = decodeURIComponent(parts[parts.length - 1] || '')

  if (!file) {
    return NextResponse.json({ error: 'Invalid file request' }, { status: 400 })
  }

  // bloqueo simple de directory traversal
  if (file.includes('..')) {
    return NextResponse.json({ error: 'Invalid path' }, { status: 400 })
  }

  const filePath = join(process.cwd(), 'public', 'docs', file)

  if (!existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  const stream = createReadStream(filePath)

  const readable = new ReadableStream({
    start(controller) {
      stream.on('data', (chunk) => controller.enqueue(chunk))
      stream.on('end', () => controller.close())
      stream.on('error', (err) => controller.error(err))
    },
    cancel() {
      stream.destroy()
    }
  })

  const contentType = mime.getType(file) || 'application/octet-stream'

  return new NextResponse(readable, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `inline; filename="${file}"`
    }
  })
}
