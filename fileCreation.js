const fs = require('fs')

function Creatingfile(filePath, filedata) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, filedata, (err) => {
      if (err) {
        reject(err)
         console.log(`File "${filePath}" failed to create.`)
      } else {
        setTimeout(() => {
            resolve()
            console.log(`File "${filePath}" created successfully.`)
        },5000)
      }
    });
  });
}

async function FileCreation() {
  const filePath = 'createdFile.txt'
  const filedata = 'Hey, Raksha here! Working on Node Assignment 1!'
  try {
    await Creatingfile(filePath, filedata);
  } catch (error) {
    console.error('Error:', error)
  }
}

FileCreation()