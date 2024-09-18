import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: '597xvjnnk5df',
  accessToken: 'A0Zc3klTeGgvJsGAAfzLknL20A3abn5AB56eH83Yh3M',
})

export const useFetchTools = () => {
  const [loading, setLoading] = useState(true)
  const [tools, setTools] = useState([])

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'tools' })
      const tools = response.items.map((item) => {
        const { toolTitle, toolImage, toolUrl } = item.fields
        const id = item.sys.id
        const img = toolImage?.fields?.file?.url
        return { toolTitle, toolUrl, id, img }
      })
      setTools(tools)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  return { loading, tools }
}

client
  .getEntries({ content_type: 'tools' })
  .then((response) => console.log(response))
