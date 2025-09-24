const IS_PROD = process.env.NODE_ENV === 'production';

// Path for react-router basename ("/portfolio")
export const BASE_PATH = IS_PROD ? '/portfolio' : '';

// Full base for files in /public (full URL in prod, '' in dev)
export const PUBLIC_BASE = process.env.PUBLIC_UR || '';