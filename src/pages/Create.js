import { Button, Container, Typography } from '@material-ui/core'
import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  
})

export default function Create() {

  const classes = useStyles()

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
      
      <Button
        onClick={() => console.log("You clicked me.")}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={ <KeyboardArrowRightIcon />}
        
      >
        Submit
      </Button>
    </Container>
  )
}
