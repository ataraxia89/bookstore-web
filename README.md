# BookStore.Web
*An Angular-based reproduction of the ASP.Net [BookStore.Web](https://github.com/ataraxia89/BookStore.Web) application*
## Notes
- The API URL is stored in `src/proxy.conf.json` (currently runs via http only, not https)
- The BookStore API will need to be running first before launching the web application
- Please see notes on [BookStore.API](https://github.com/ataraxia89/BookStore.API?tab=readme-ov-file#notes) on initial data, on first run there will be no books in the database unless the seed data endpoint is called on the API
- The `BookStore.Models` project cannot be installed as a packge, so relevant models have been recreated in the `src/app/models` folder
