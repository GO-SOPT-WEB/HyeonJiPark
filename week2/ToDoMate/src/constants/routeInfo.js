import Main from '../pages/main';
import My from '../pages/my';

export const BASE_URL = 'http://localhost:5173';

export const routes = [
  { path: /^\/$/, element: Main },
  { path: /^\/my$/, element: My },
];
