# 🔼 Repl Talk Badge

Create embeddable badges for your Repl Talk posts to display upvotes on websites and markdown files.

## Tech Stack
**API:** Serverless functions deployed on Vercel, cheerio and axios for web scraping

**Badge generator:** Next.js site with Geist UI for styling

## Usage
Use the [badge generator](https://create-replit-badge.now.sh/) to create your own custom badge in HTML and Markdown.

## Examples
### Badge Styles
[![Repl Talk Badge](https://replit-badge.vercel.app/api?id=143059)](https://replit.com/talk/share/post/143059) [![Repl Talk Badge](https://replit-badge.vercel.app/api?id=143059&theme=dark)](https://replit.com/talk/share/post/143059)

[![Repl Talk Badge](https://replit-badge.vercel.app/api?id=143059&style=gradient&theme=light)](https://replit.com/talk/share/post/143059) [![Repl Talk Badge](https://replit-badge.vercel.app/api?id=143059&style=gradient&theme=dark)](https://replit.com/talk/share/post/143059)

### Custom Font and Labels
[![Repl Talk Badge](https://replit-badge.vercel.app/api?id=143059&featuredOn=upvoted%20on&replTalk=Replit&font=Helvetica)](https://replit.com/talk/share/post/143059)

## API
| Option     | Type    | Required | Default         | Description                            |
|------------|---------|----------|-----------------|----------------------------------------|
| id         | Integer | Yes      | -               | Repl Talk post ID, located in post URL |
| style      | String  | No       | `"flat"`        | `"flat"` \| `"gradient"`               |
| theme      | String  | No       | `"light"`       | `"light"` \| `"dark"`                  |
| featuredOn | String  | No       | `"FEATURED ON"` | Alternate text for upper label         |
| replTalk   | String  | No       | `"Repl Talk"`   | Alternate text for lower label         |

## Acknowledgements
[AnandChowdhary/hackerbadge](https://github.com/AnandChowdhary/hackerbadge)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)