import axios from "axios";

export type TranscriptionResult = {
  output: string;
  content: string;
};

export const transcribe = async (content: string): Promise<string> => {
  const response = await axios.get<TranscriptionResult>(
    `${process.env.REACT_APP_API_URL_BASE}/api/transcription/transcribe`,
    {
      params: { content },
    }
  );

  return response.data.output;
};

export const random = async (): Promise<TranscriptionResult> => {
  const response = await axios.get<TranscriptionResult>(
    `${process.env.REACT_APP_API_URL_BASE}/api/transcription/random`
  );

  return response.data;
};

export type QueryResult = {
  id: number;
  content: string;
  ipa_transcription: string;
  cz_transcription: string;
  definition?: string;
};

export const query = async (q: string): Promise<QueryResult[]> => {
  const response = await axios.get<QueryResult[]>(
    `${process.env.REACT_APP_API_URL_BASE}/api/transcription/query`,
    { params: { q } }
  );

  return response.data;
};
