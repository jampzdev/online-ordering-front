//Base Component used for global variables. don't forget to import this file.

// @TODO might delete this later this is unused
export class BaseComponent {
  constructor() {}

  public static baseUrl: string = window.location.origin;
  public static siteTitle: string = 'Blank';
  public static API_URL: string = 'http://localhost:3000';

  public static color_theme: string = 'blueviolet';
  public static color_font_theme: string = 'white';
}
