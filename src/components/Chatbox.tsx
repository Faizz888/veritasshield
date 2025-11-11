import React, { useState, useCallback, useMemo } from "react";
import { sendChatMessage, ChatMessage } from "../api/chat";

const formatAIResponse = (text: string) => {
  const lines = text.split('\n').filter(line => line.trim());
  let assessment = '';
  let explanation = '';
  let verification = '';
  
  let currentSection = '';
  
  for (const line of lines) {
    if (line.includes('Assessment:') || line.includes('**Assessment:**')) {
      currentSection = 'assessment';
      assessment = line.replace(/\*\*(Assessment:?)\*\*?/g, '').trim();
    } else if (line.includes('Explanation:') || line.includes('**Explanation:**')) {
      currentSection = 'explanation';
      explanation = line.replace(/\*\*(Explanation:?)\*\*?/g, '').trim();
    } else if (line.includes('Verification') || line.includes('**Verification')) {
      currentSection = 'verification';
      verification = line.replace(/\*\*(Verification[^:]*:?)\*\*?/g, '').trim();
    } else if (currentSection === 'assessment' && line.trim()) {
      assessment += ' ' + line.trim();
    } else if (currentSection === 'explanation' && line.trim()) {
      explanation += ' ' + line.trim();
    } else if (currentSection === 'verification' && line.trim()) {
      verification += ' ' + line.trim();
    }
  }
  
  return { assessment, explanation, verification };
};

const ChatBox: React.FC = () => {
  const [userText, setUserText] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<ChatMessage[]>([]);

  const handleAnalyze = useCallback(async () => {
    if (!userText.trim()) return;
    setLoading(true);
  
    try {
      const aiResponse = await sendChatMessage(
        userText,
        history,
        "en"
      );
  
      setResponse(aiResponse);
      setHistory((prev) => [
        ...prev,
        { role: "user", content: userText },
        { role: "assistant", content: aiResponse },
      ]);
      setUserText("");
    } catch (error) {
      console.error("Detailed error:", error);
      if (error instanceof Error) {
        setResponse(`Error: ${error.message}`);
      } else {
        setResponse("Error analyzing text. Check console for details.");
      }
    } finally {
      setLoading(false);
    }
  }, [userText, history]);

  const formattedResponse = useMemo(() => {
    if (!response) return null;
    return formatAIResponse(response);
  }, [response]);

  const characterCount = useMemo(() => userText.length, [userText]);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Main Card */}
        <div className="glass rounded-3xl shadow-2xl p-8 mb-8 animate-fade-in-up">
          <div className="text-center mb-10">
            <h1 className="font-display text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent text-shadow">
              🛡️ Veritas Shield
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              AI-powered tool to detect disinformation in text or news articles
            </p>
            <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-slow"></span>
                AI Analysis Ready
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Secure & Private
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Real-time Processing
              </span>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-4 font-display">
              📝 Enter text to analyze for disinformation:
            </label>
            <div className="relative">
              <textarea
                className="w-full h-48 p-6 border-2 border-gray-200 rounded-2xl mb-6 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 resize-none text-gray-800 leading-relaxed shadow-inner"
                placeholder="Paste news article, social media post, or any text you want to verify for accuracy... 

Example: 'Breaking: Scientists discover cure for all diseases' or 'The president announced new policies today'"
                value={userText}
                onChange={(e) => setUserText(e.target.value)}
              />
              <div className="absolute bottom-8 right-6 text-sm text-gray-400">
                {characterCount} characters
              </div>
            </div>
          </div>

          <button
            className={`w-full py-4 mb-8 text-white font-bold rounded-2xl text-lg transition-all duration-300 font-display ${
              loading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "btn-primary"
            }`}
            onClick={handleAnalyze}
            disabled={loading || !userText.trim()}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing with AI...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                🔍 Analyze Text with AI
                <span className="ml-2 text-base">→</span>
              </span>
            )}
          </button>

          {response && (
            <div className="glass rounded-2xl shadow-xl p-8 mb-8 border-l-4 border-blue-500 animate-fade-in-up">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center font-display">
                <span className="mr-3 text-3xl">🛡️</span>
                AI Analysis Results
              </h2>
              
              {(() => {
                if (!formattedResponse) return null;
                
                return (
                  <div className="space-y-6">
                    {formattedResponse.assessment && (
                      <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="font-bold text-blue-700 mb-3 text-lg flex items-center font-display">
                          <span className="mr-2">📊</span>
                          Assessment
                        </h3>
                        <p className="text-gray-800 leading-relaxed text-lg">{formattedResponse.assessment}</p>
                      </div>
                    )}
                    
                    {formattedResponse.explanation && (
                      <div className="bg-white rounded-xl p-6 border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="font-bold text-green-700 mb-3 text-lg flex items-center font-display">
                          <span className="mr-2">💡</span>
                          Explanation
                        </h3>
                        <p className="text-gray-800 leading-relaxed text-lg">{formattedResponse.explanation}</p>
                      </div>
                    )}
                    
                    {formattedResponse.verification && (
                      <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="font-bold text-purple-700 mb-3 text-lg flex items-center font-display">
                          <span className="mr-2">🔍</span>
                          Verification Tips
                        </h3>
                        <p className="text-gray-800 leading-relaxed text-lg">{formattedResponse.verification}</p>
                      </div>
                    )}
                    
                    {!formattedResponse.assessment && !formattedResponse.explanation && !formattedResponse.verification && (
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <p className="text-gray-800 whitespace-pre-wrap text-lg leading-relaxed">{response}</p>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        {history.length > 0 && (
          <div className="glass rounded-2xl shadow-xl p-8 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center font-display">
              <span className="mr-3">📚</span>
              Previous Analyses
            </h3>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {history.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg ${
                    msg.role === "user" 
                      ? "bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-400" 
                      : "bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-gray-400"
                  }`}
                >
                  <div className="font-bold text-sm mb-3 text-gray-600 font-display">
                    {msg.role === "user" ? "📝 Your Input:" : "🤖 AI Analysis:"}
                  </div>
                  <div className="text-gray-800 text-base leading-relaxed">
                    {msg.role === "assistant" ? (
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    ) : (
                      <div className="italic">{msg.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};export default ChatBox;
