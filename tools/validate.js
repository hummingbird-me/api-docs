const { readFileSync } = require('fs')
const { validate } = require('drafter.js')
const { gray, red } = require('chalk')

const file = readFileSync('apiary.apib', 'utf8')

validate(file, {
  requireBlueprintname: true
}, (err, res) => {
  if (err) console.log('\nBlueprint has errors!\n\n', err)
  if (res) {
    console.log('\nBlueprint has semantic issues!\n')
    res.content.forEach(({ element, meta, attributes, content }) => {
      console.log(`${meta.classes[0]}: ${content}\n`)

      attributes.sourceMap.forEach(asm => {
        asm.content.forEach(pos => {
          const before = file.toString().slice(pos[0] - 75, pos[0])
          const after = file.toString().slice(pos[0] + pos[1], pos[0] + pos[1] + 75)
          const highlight = file.toString().slice(pos[0], pos[0] + pos[1])
          console.log(gray(before + red(highlight) + after) + '\n')
        })

      })
    })
  }

  if (err || res) process.exit(1)
  else console.log('Blueprint is valid')
})
