# Repl Talk Badge

Create dynamic and embeddable badges for your Repl Talk posts to display upvotes on websites and markdown files.

## Usage
Use the [badge generator](https://create-replit-badge.now.sh/) to create your own custom badge in HTML and Markdown.

## API
| Option     | Type    | Required | Default         | Description                            |
|------------|---------|----------|-----------------|----------------------------------------|
| id         | Integer | Yes      | -               | Repl Talk post ID, located in post URL |
| style      | String  | No       | `"flat"`        | `"flat"` \| `"gradient"`               |
| theme      | String  | No       | `"light"`       | `"light"` \| `"dark"`                  |
| featuredOn | String  | No       | `"FEATURED ON"` | Alternate text for upper label         |
| replTalk   | String  | No       | `"Repl Talk"`   | Alternate text for lower label         |

## Examples

### Badge Styles

[![Repl Talk Badge](https://replit-badge.vercel.app/api?id=123456)](#) [![Repl Talk Badge](https://replit-badge.vercel.app/api?id=123456&theme=dark)](#)

[![Repl Talk Badge](https://replit-badge.vercel.app/api?id=123456&style=gradient&theme=light)](#) [![Repl Talk Badge](https://replit-badge.vercel.app/api?id=123456&style=gradient&theme=dark)](#)

### Custom Font and Labels

[![Repl Talk Badge](https://replit-badge.vercel.app/api?id=123456&featuredOn=UPVOTED%20ON&replTalk=Replit%20&font=Helvetica)](https://replit.com/talk/share/HelloWorld/123456)