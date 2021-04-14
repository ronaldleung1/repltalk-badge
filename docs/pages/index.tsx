import Head from 'next/head'
import { 
  Page,
  Text,
  Spacer,
  Input,
  Select,
  Row,
  Col 
} from '@geist-ui/react'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Repl Talk Badge Generator</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Text h1 size="2em" style={{textAlign:"center"}}>Repl Talk Badge Generator</Text>
      <Row>
        <Col>
          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Repl Talk URL</Text>
          <Input placeholder="http://replit.com/talk/share/HelloWorld/123456"/>
          <Spacer y={.5} />
          <Text style={{display: 'inline-block', width: '8em', textAlign: 'right', marginRight: '1em'}}>Style</Text>
          <Select placeholder="Choose one" initialValue="1">
            <Select.Option value="1">Flat</Select.Option>
            <Select.Option value="2">Gradient</Select.Option>
          </Select>
          <Spacer y={.5} />
          <Select placeholder="Theme">
            <Select.Option value="1">Option 1</Select.Option>
            <Select.Option value="2">Option 2</Select.Option>
          </Select>
        </Col>
      </Row>
    </Page>
  )
}
