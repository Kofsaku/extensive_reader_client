import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request) {
  try {
    console.log("daksdjfkasdjhfkasjdhfkasjdfhkasjdhfkasjdfh")
    const { prompt } = await request.json();
    console.log("promptpromptpromptpromptpromptprompt", prompt)
    const promptInput = `The passage should be around ${prompt.words} words long. Create an English learning passage for learners on the topic of ${prompt.genre} suitable for the age ${prompt.readerAge} person, written as a single coherent ${prompt.genre} text. The passage must have an intriguing and fascinating title that makes readers want to start reading immediately. The body of the passage should be a continuous flow of text using simple vocabulary understandable by ${prompt.difficulty} person, with no subheadings, bullet points, or standalone lines. The writing should be engaging and captivating, so ${prompt.difficulty} student readers can't wait to read the entire passage from start to finish. Also here is the brief idea for the story: ${prompt.storyIdeas}`
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: promptInput }],
        // max_tokens: 700,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    // console.log("response.prompt", response.data.choices[0].message.content)
    return NextResponse.json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error in API Route:', error.response);
    console.error('Error in API Route:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
