import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "../components/Card"
import axios from "axios"
import { useLocation } from "react-router-dom"
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;'
`

const Language = () => {
  const [videos, setVideos] = useState([])
  const path = useLocation().pathname.split("/")[2]

  useEffect(() => {
    const fetchVideos = async () => {
      console.log(path)
      const res = await axios.get(`/videos/language/${path}`)
      setVideos(res.data)
    }

    fetchVideos()
  }, [path])

  return (
    <Container>
      {videos?.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  )
}

export default Language
