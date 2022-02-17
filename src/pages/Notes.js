import { Container, Grid, Paper, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: "DELETE"
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }


  return (
    <Container>  
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={4}> 
            <NoteCard note={note} handleDelete={handleDelete}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
