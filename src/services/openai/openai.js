import OpenAI from 'openai';

export const createPrompt = async ({ prompt, chats }) => {
  const client = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const history = []

  for await (const chat of chats) {
    history.push({
      role: chat.from,
      content: chat.message
    })
  }

  const completion = await client.chat.completions.create({
    messages:[
      ...history,
      { role: 'user', content: prompt }
    ],
    model: "gpt-3.5-turbo"
  })
}