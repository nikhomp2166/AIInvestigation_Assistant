export async function formatTranscript(transcript: string): Promise<string> {
  // TODO: Call backend /api/v1/interrogation/format
  return transcript + " (formatted)";
}

export async function uploadToGoogleSheet(sheetId: string, text: string): Promise<void> {
  // TODO: Call backend /api/v1/interrogation/sheet
}