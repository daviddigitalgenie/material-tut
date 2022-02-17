import { Button, Container, TextField, Typography, Radio, RadioGroup, FormControlLabel } from '@material-ui/core'
import React, { useState } from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'
import { FormLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
 
  const classes = useStyles()
  const history = useHistory()
  const [title,setTitle] = useState("")
  const [details,setDetails] = useState("")
  const [titleError,setTitleError] = useState(false)
  const [detailsError,setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if (title === '') {
      setTitleError(true)
    }
    if (details === '') {
      setDetailsError(true)
    }

    if (title && details) { 
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
          title,
          details,
          category 
        })
      })
      .then(() => history.push("/") ) 
    }
  }
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
       
      >
        Create a new Note
      </Typography>
      
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="primary"
          required
          fullWidth
          className={classes.field}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="primary"
          required
          fullWidth
          multiline
          rows={4}
          className={classes.field}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={ <KeyboardArrowRightIcon />}
        >
          Submit
      </Button>
      </form>
     
    </Container>
  )
}
