import { CHATBOT_RESPONSES, FALLBACK_RESPONSE, ChatbotResponse, ChatbotCTA } from "./chatbotData";

export interface BotMatchResult {
  text: string;
  actions?: ChatbotCTA[];
}

/**
 * Clean and normalize query text for keyword searching
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"“”]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Finds the best matching scripted response using local keyword evaluation.
 */
export function getBotResponse(userMessage: string): BotMatchResult {
  const normalized = normalizeText(userMessage);

  if (!normalized) {
    return {
      text: FALLBACK_RESPONSE.text,
      actions: FALLBACK_RESPONSE.actions
    };
  }

  // Check exact full-question matches first
  const exactMatch = CHATBOT_RESPONSES.find(
    (item) => normalizeText(item.question) === normalized
  );
  if (exactMatch) {
    return {
      text: exactMatch.answer,
      actions: exactMatch.actions
    };
  }

  // Score candidate responses based on keyword matches
  let bestMatch: ChatbotResponse | null = null;
  let highestScore = 0;

  for (const item of CHATBOT_RESPONSES) {
    let score = 0;
    for (const keyword of item.keywords) {
      const cleanKeyword = normalizeText(keyword);
      if (normalized.includes(cleanKeyword)) {
        // Longer keyword matches earn higher weight
        score += cleanKeyword.split(" ").length * 2 + 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return {
      text: bestMatch.answer,
      actions: bestMatch.actions
    };
  }

  // Fallback if no matching keywords found
  return {
    text: FALLBACK_RESPONSE.text,
    actions: FALLBACK_RESPONSE.actions
  };
}
