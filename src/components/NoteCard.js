import React from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Card, IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';


export default function NoteCard( {note, handleDelete}) {
  return (
    <div>
        <Card elevation={1}>
          <CardHeader 
            action={ 
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
          />
          <CardContent>
            <Typography variant="body2">
              {note.details}
            </Typography>
          </CardContent>
        </Card>
    </div>
  )
}

