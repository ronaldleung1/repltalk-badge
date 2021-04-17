import Head from 'next/head'
import { 
  Page,
  Text,
  Image,
  Spacer,
  Input,
  Select,
  Grid,
  Button,
  Display,
  Description,
  Code
} from '@geist-ui/react'
import { useEffect, useState } from 'react';

export default function Home() {
  const [id, setId] = useState(null);
  const [style, setStyle] = useState("flat");
  const [url, setUrl] = useState("https://replit-badge.vercel.app/api?id=123456");
  const [post, setPost] = useState("https://replit.com/talk/share/HelloWorld/123456");
  
  const onChangeUrl = (event) => {
    let url;
    try {
      url = new URL(event.target.value);
    } catch (_) {
      return;  
    }
    setPost(url);
    const parts = new URL(url).pathname.split('/'); // handle potential trailing slash
    setId(+(parts.pop() || parts.pop())); // casts to number before setting state
  }
  const onChangeStyle = (value) => {
    console.log(value);
    if(value === "1")
      setStyle("flat");
    else
      setStyle("gradient");
  }

  useEffect(() => {
    setUrl("https://replit-badge.vercel.app/api?id="+(id ? id : 123456)+(style === "flat" ? "" : "&style=gradient"));
  });

  return (
    <Page>
      <Head>
        <title>Repl Talk Badge Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Text h1 size="2em" style={{textAlign:"center"}}>Repl Talk Badge Generator</Text>
      <Grid.Container>
        <Grid xs={24} sm={24} md={16} style={{display: "block"}}>
          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Repl Talk URL</Text>
          <Input placeholder="https://replit.com/talk/share/HelloWorld/123456" onChange={onChangeUrl} width="24em"/>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Style</Text>
          <Select placeholder="Choose one" initialValue="1" onChange={onChangeStyle}>
            <Select.Option value="1">Flat</Select.Option>
            <Select.Option value="2">Gradient</Select.Option>
          </Select>
          <Spacer y={.5} />
          
          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Theme</Text>
          <Select placeholder="Choose one" initialValue="1">
            <Select.Option value="1">Light</Select.Option>
            <Select.Option value="2">Dark</Select.Option>
          </Select>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Alternate Text 1</Text>
          <Input placeholder="Featured On"/>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Alternate Text 2</Text>
          <Input placeholder="Repl Talk"/>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Font</Text>
          <Input placeholder="IBM Plex Sans"/>
          <Spacer y={1} />

          {/*<Button auto type="secondary-light" style={{display: "block", margin: "auto"}}>Generate badge</Button>*/}
        </Grid>
        
        <Grid xs={24} sm={24} md={8} style={{display: "block"}}>
          <Spacer y={2} />
          <Display shadow caption="Badge Preview">
            <Image src={url} alt="Error: Invalid ID"/>
          </Display>
          <Description title="Markdown" content={
            <Code block>{
              `[![Repl Talk Badge](${url})](${post})`
            }</Code>
          } />
          <Description title="HTML" content={
            <Code block>{
`<a href="${post}">
  <img src="${url}" alt="Repl Talk Badge">
</a>`
            }</Code>
          } />
        </Grid>
      </Grid.Container>
    </Page>
  )
}
