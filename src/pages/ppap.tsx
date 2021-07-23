import React from 'react'
import * as xml2js from 'xml2js'

export default function ppap() {
  const parser = new xml2js.Parser()
  parser.parseString(
    `<email>
		<to>Test</to>
		<from>Test1</from>
		<heading>Test email</heading>
		<body>Email regards to xml data parsing in React</body>
		</email>`,
    function (err, result) {
      console.log(result)
    }
  )
  return <div>Parse XML using ReactJs</div>
}
