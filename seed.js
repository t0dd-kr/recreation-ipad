let { createClient } = require('@supabase/supabase-js')
let dotenv = require('dotenv')
let fs = require('fs')
dotenv.config()

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function main() {
  // let people = fs.readdirSync('./people')
  // .map(folder => {
  //   let files = fs.readdirSync(`./people/${folder}`)

  //   files.forEach(async (file, s) => {
  //     fs.renameSync(`./people/${folder}/${file}`, `./people/${folder}/${folder}_${s + 1}.${file.split('.')[1]}`)
  //   })

  //   return files.map((file, s) => {
  //     return {
  //       name: file.split('.')[0],
  //       image: `${folder}_${s + 1}.${file.split('.')[1]}`,
  //       type: folder
  //     }
  //   })
  // }).flat()
  

  // const { data, error } = await supabase
  //   .from('peoples')
  //   .insert([3,4].map(e => new Array(10).fill(e)).flat().map(e => {
  //     return {
  //       type: e
  //     }
  //   }))
  
  console.log(data)
}

main()