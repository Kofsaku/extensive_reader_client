// import { NextResponse } from 'next/server';
// import axios from 'axios';

// export async function POST(request) {
//   try {
//     console.log("daksdjfkasdjhfkasjdhfkasjdfhkasjdhfkasjdfh")
//     const { prompt } = await request.json();
//     console.log("promptpromptpromptpromptpromptprompt", prompt)
//     const promptInput = `The passage should be around ${prompt.words} words long. Create an English learning passage for learners on the topic of ${prompt.genre} suitable for the age ${prompt.readerAge} person, written as a single coherent ${prompt.genre} text. The passage must have an intriguing and fascinating title that makes readers want to start reading immediately. The body of the passage should be a continuous flow of text using simple vocabulary understandable by ${prompt.difficulty} person, with no subheadings, bullet points, or standalone lines. The writing should be engaging and captivating, so ${prompt.difficulty} student readers can't wait to read the entire passage from start to finish. Also here is the brief idea for the story: ${prompt.storyIdeas}`
//     const response = await axios.post(
//       'https://api.openai.com/v1/chat/completions',
//       {
//         model: 'gpt-4',
//         messages: [{ role: 'user', content: promptInput }],
//         // max_tokens: 700,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//       }
//     );
//     // console.log("response.prompt", response.data.choices[0].message.content)
//     return NextResponse.json({ result: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error('Error in API Route:', error.response);
//     console.error('Error in API Route:', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import axios from "axios";
import cookie from "cookie";

export async function POST(request) {
  try {
    const { prompt } = await request.json();
    const cookies = cookie.parse(request.headers.get("cookie") || "");
    const authToken = cookies.authToken;

    // const promptInput = `The passage should be around ${prompt.words} words long. Create an English learning passage for learners on the topic of ${prompt.genre} suitable for the age ${prompt.readerAge} person, written as a single coherent ${prompt.genre} text. The passage must have an intriguing and fascinating title that makes readers want to start reading immediately. The body of the passage should be a continuous flow of text using simple vocabulary understandable by ${prompt.difficulty} person, with no subheadings, bullet points, or standalone lines. The writing should be engaging and captivating, so ${prompt.difficulty} student readers can't wait to read the entire passage from start to finish. Also here is the brief idea for the story: ${prompt.storyIdeas}`;
    const promptInput = `The passage should be around ${prompt.words} words long. Create an English learning passage for learners on the topic of ${prompt.genre} suitable for the age ${prompt.readerAge} person, written as a single coherent ${prompt.genre} text. The passage must have an intriguing and fascinating title that makes readers want to start reading immediately. The body of the passage should be a continuous flow of text using simple vocabulary understandable by ${prompt.difficulty} person, with no subheadings, bullet points, or standalone lines. The writing should be engaging and captivating, so ${prompt.difficulty} student readers can't wait to read the entire passage from start to finish. Also here is the brief idea for the story: ${prompt.storyIdeas}. Please provide the title and the body of the passage separately. Format the response as 'Title: <title here>\n\nBody: <body here>'`;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: promptInput }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const completion = response.data.choices[0].message.content;
    const [titlePart, bodyPart] = completion.split("\n\nBody: ");

    const title = titlePart.replace("Title: ", "").trim();
    const desc = bodyPart.trim();

    const result = {
      title,
      desc,
    };
    const data = {
      result,
      prompt,
    };
    const backendResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/story`,
      {
        data,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log("backendResponsebackendResponse", backendResponse);
    if (backendResponse.status === 201) {
      // Redirect or handle successful posting to the backend
      return NextResponse.json({ id: backendResponse.data._id });
    } else {
      return NextResponse.json(
        { error: "Failed to save prompt on backend" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in API Route:", error.response);
    console.error("Error in API Route:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
