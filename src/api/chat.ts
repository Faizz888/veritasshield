export interface ChatMessage {
    role: "user" | "assistant" | "system";
    content: string;
  }

export async function sendChatMessage(
    userMessage: string,
    conversationHistory: ChatMessage[] = [],
    language: string = "en"
  ): Promise<string> {
    const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
    console.log("API Key exists:", !!apiKey);
    console.log("API Key prefix:", apiKey?.substring(0, 10) + "...");
    
    if (!apiKey) throw new Error("API key not configured - check your .env file");
  
    const languageInstruction =
      language === "ru"
        ? "Отвечай на русском языке."
        : language === "kz"
        ? "Қазақ тілінде жауап беріңіз."
        : "Respond in English.";
  
    const systemPrompt = `You are an AI specialized in detecting disinformation and fake news. 
  ${languageInstruction}
  Analyze the user's input text and provide a concise assessment using this exact format:

  Assessment: [State if it's likely true, false, misleading, or unverified]
  
  Explanation: [Explain why you made this assessment]
  
  Verification Suggestions: [Give specific suggestions on how to verify this information]
  
  IMPORTANT: Do NOT use markdown formatting (no ** or * symbols). Use plain text only. Keep responses under 200 words.`;
  
    const messages: ChatMessage[] = [
      { role: "system", content: systemPrompt },
      ...conversationHistory,
      { role: "user", content: userMessage },
    ];
  
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-small-3.1-24b-instruct:free",
          messages: messages,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
  
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("AI Chat Error:", error);
      throw error;
    }
  }
  