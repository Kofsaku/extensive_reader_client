// src/pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apiResponse = await fetch('http://localhost:3001/api/v1/hello') // Railsのポートを指定
  const data = await apiResponse.json()
  res.status(200).json(data)
}
