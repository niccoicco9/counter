import type { ChuckNorrisJoke } from '../types';
import { API_ENDPOINTS } from './constants';

export const fetchChuckNorrisJoke = async (): Promise<string> => {
  try {
    const response = await fetch(API_ENDPOINTS.CHUCK_NORRIS);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ChuckNorrisJoke = await response.json();
    return data.value;
  } catch (error) {
    console.error('Error fetching Chuck Norris joke:', error);
    throw new Error('Failed to fetch joke. Please try again.');
  }
};
