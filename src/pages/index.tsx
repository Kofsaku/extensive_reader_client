import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [difficulty, setDifficulty] = useState<string>("")
  const [format, setFormat] = useState<string>("")
  const [words, setWords] = useState<number | string>("")
  const [genre, setGenre] = useState<string>("")
  const [generatedTitle, setGeneratedTitle] = useState<string>("")
  const [generatedContent, setGeneratedContent] = useState<string>("")

  const handleSubmit = async(e: FormEvent) => {
    e.preventDefault()
    const data = { difficulty, format, words, genre }
    console.log(data)

    // ここでバックエンドへリクエストを送る
    try {
      const response = await axios.post('http://localhost:3001/api/v1/passages', data)
      console.log(response.data)
      setGeneratedTitle(response.data.passage_details.title)
      setGeneratedContent(response.data.passage_details.content)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    switch (e.target.name) {
      case 'difficulty':
        setDifficulty(e.target.value)
        break
      case 'format':
        setFormat(e.target.value)
        break
      case 'words':
        setWords(e.target.value)
        break
      case 'genre':
        setGenre(e.target.value)
        break
      default:
        break
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select name="difficulty" onChange={handleChange}>
          <option value="">難易度を選択</option>
          <option value="kindergarten">簡単</option>
          <option value="junior_high_school">普通</option>
          <option value="high_school">難しい</option>
        </select>
        <select name="format" onChange={handleChange}>
          <option value="">形式を選択</option>
          <option value="narrative">物語</option>
          <option value="expository">解説</option>
          <option value="conversational">会話</option>
        </select>
        <select name="words" onChange={handleChange}>
          <option value="">文字数を選択</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
        </select>
        <input type="text" name="genre" placeholder="ジャンル（英語）" onChange={handleChange} />
        <button type="submit">生成</button>
      </form>

      {generatedTitle && (
        <div>
          <h2>{generatedTitle}</h2>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  )
}
export default Home
