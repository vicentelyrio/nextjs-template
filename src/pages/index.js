import React from 'react'
import Head from 'next/head'
import { Grid, Button } from '@mui/material'

export default function Home() {
  return (
    <>
      <Head>
        <title>App</title>
      </Head>
      <Grid container spacing={4}>
        <Grid item xs>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Button variant="contained">Button</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
