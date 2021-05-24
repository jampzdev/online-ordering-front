//Base Component used for global variables. don't forget to import this file.

// @TODO might delete this later this is unused
export class BaseComponent {
  constructor() {}

  public static baseUrl: string = window.location.origin;
  public static siteTitle: string = 'Blank';
  public static API_URL: string = 'http://localhost:3000';

  public static color_theme: string = 'blueviolet';
  public static color_font_theme: string = 'white';
  public static cart_data: any = [];

  public static getLoggedUser() {
    let user_logged_in: any;
    if (localStorage.getItem('user_info') !== null) {
      user_logged_in = localStorage.getItem('user_info');
    } else {
      user_logged_in = '';
    }
    return user_logged_in;
  }
}
