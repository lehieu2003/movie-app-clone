/**
 * Represents a theme with a title and an icon.
 */
export interface ITheme {
  title: string;
  icon: IconType;
}

/**
 * Represents a navigation link that extends the theme interface.
 */
export interface INavLink extends ITheme {
  path: string;
}

/**
 * Represents a movie with various properties.
 */
export interface IMovie {
  id: string;
  poster_path: string;
  original_title: string;
  name: string;
  overview: string;
  backdrop_path: string;
}
