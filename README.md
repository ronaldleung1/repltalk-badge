# Repl Talk Badge

Create embeddable badges for your Repl Talk posts to display upvotes on websites and markdown files.

<img src="https://replit-badge.vercel.app/api?id=123456" alt="Repl Talk Badge">

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