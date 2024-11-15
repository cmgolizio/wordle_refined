const API_BASE_URL = "https://random-word-api.herokuapp.com";

export async function fetchRandomWord() {
  try {
    const response = await fetch(`${API_BASE_URL}/word?length=5`);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Failed to fetch random word: ", error);
    return null;
  }
}

export async function validateWord(word) {
  const DICTIONARY_API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  try {
    const response = await fetch(DICTIONARY_API_URL);
    if (response.ok) {
      return true; // Word is valid
    }
    return false; // Word is not valid
  } catch (error) {
    console.error("Failed to validate word:", error);
    return false;
  }
}
