import Head from 'next/head'
import { 
  Page,
  Text,
  Image,
  Spacer,
  Input,
  Select,
  Grid
} from '@geist-ui/react'

export default function Home() {
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
          <Input placeholder="http://replit.com/talk/share/HelloWorld/123456" width="24em"/>
          <Spacer y={.5} />

          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Style</Text>
          <Select placeholder="Choose one" initialValue="1">
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
          <Spacer y={2} />
        </Grid>
        <Grid xs={24} sm={24} md={8}>
          <Image
            src="https://replit-badge.vercel.app/api?id=123456"
          />
        </Grid>
      </Grid.Container>
    </Page>
  )
}
