import { constants } from './constants';

export const COMPANIES_LIST: CompanyCustom[] = [
  {
    name: 'Spotify',
    color: '#1DB954',
    message:
      "It would be a dream come true to join a company like Spotify, let's start the conversation!",
  },
  {
    name: 'Airbnb',
    color: '#FF5A5F',
    resume: `${constants.CLOUDFRONT_LINK}/resumes/JustinZhangAirbnb.pdf`,
    message:
      "It would be a dream come true to join a company like Airbnb, let's start the conversation!",
  },
  {
    name: 'Notion',
    color: 'black',
    resume: `${constants.CLOUDFRONT_LINK}/resumes/JustinZhangNotionPublic.pdf`,
    message:
      "Notion is a company that I've admired for many years now, from the mission and values, to the incredible product that organizes my life - I'd love to start the conversation!",
  },
];
