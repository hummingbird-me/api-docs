const { readFileSync } = require('fs')
const { validate } = require('drafter.js')
const chalk = require('chalk')

const file = readFileSync('apiary.apib', 'utf8')

const capitalise = str => str.length
  ? str[0].toUpperCase() +
    str.slice(1)
  : ''

function showIssues ({ content: contents }, type) {
  console.log(chalk`
 {bgRed  FAIL } {bold Blueprint has ${contents.length} ${type}s}
  `)

  contents.forEach(({ meta, attributes, content }) => {
    console.log(chalk` {bold ${capitalise(content)}}
    `)

    attributes.sourceMap.forEach(({ content: asm }) => {
      asm.forEach(pos => {

        const before = file.toString().slice(pos[0] - 75, pos[0])
        const after = file.toString().slice(pos[0] + pos[1], pos[0] + pos[1] + 75)
        const highlight = file.toString().slice(pos[0], pos[0] + pos[1])

        console.log(chalk`
{gray ${before}}
{yellow ${highlight}}
{gray ${after}}
        `)
      })
    })
  })
}

validate(file, {
  requireBlueprintName: true
}, (err, res) => {
  if (err) showIssues(err, 'error')
  if (res) showIssues(res, 'semantic issue')

  if (err || res) process.exit(1)
  else console.log(chalk`
    {bgGreen  PASS } {bold Blueprint is valid}
  `)
})
