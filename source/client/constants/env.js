/** Build environment */
export const BUILD_ENV = process.env.NODE_ENV;
export const IS_DEVELOPMENT = BUILD_ENV === 'development';
export const IS_PRODUCTION = BUILD_ENV === 'production';

/** App */
export const PORT = process.env.PORT;
export const API_PATH = process.env.REACT_APP_PATH;
export const API_URL = process.env.REACT_APP_API_URL || undefined;
