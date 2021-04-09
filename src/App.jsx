import './App.css';
import { GetServers, SERVER_STATUS, ApiInit } from './api'
import { THRESHOLD } from './config'

import React from 'react';

import "@fontsource/roboto"
import { Container, Typography, ListItem, ListItemText, List, ListItemIcon, Paper, Chip } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CloudOffIcon from '@material-ui/icons/CloudOff';

function CloudIcon(props) {
  if (props.serverStatus === SERVER_STATUS.ONLINE)
    return <CloudDoneIcon style={{color: green[500]}} />
  else if (props.serverStatus === SERVER_STATUS.OFFLINE)
    return <CloudOffIcon color='disabled' />
  else
    return <CloudOffIcon style={{color: red[500]}} />
}

function ServerItem(props) {
  let serverStatus = props.server.status === 'online' ? SERVER_STATUS.ONLINE : SERVER_STATUS.OFFLINE
  if (serverStatus === SERVER_STATUS.ONLINE && Math.abs(props.server.lastUpdate - new Date().getTime()/1000) > THRESHOLD)
    serverStatus = SERVER_STATUS.ABORTED
  return (
      <ListItem button>
        <ListItemIcon>
          <CloudIcon serverStatus={serverStatus}/>
        </ListItemIcon>
        <ListItemText primary={props.server.host} className="host-name"/>
        <Chip label={new Date(props.server.lastUpdate*1000).toLocaleString()} variant="outlined" />
      </ListItem>
  )
}

function ServerList(props) {
  const skeletonItem = (
  <ListItem button>
    <ListItemIcon>
      <Skeleton><CloudIcon/></Skeleton>
    </ListItemIcon>
    <Skeleton width='100%'/>
  </ListItem>
  )
  let skeletons = []
  if (props.loading) {
    let serverNum = Number(localStorage.getItem('serverNum'))
    if (!serverNum) serverNum = 3
    for (let i = 0; i < serverNum; i++) skeletons.push(skeletonItem)
  } else {
    localStorage.setItem('serverNum', props.servers.length)
  }
  return (
    props.loading ? 
    <Paper>
      {skeletons}
    </Paper>
    :
    <Paper>
    <List>
      {
        props.servers.map(e => 
          <ServerItem server={e}/>
        )
      }
    </List></Paper>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      servers: [],
      loading: true
    }
    ApiInit()
  }

  componentDidMount() {
    GetServers().then(s => {
      this.setState({servers: s, loading: false})
    })
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <Typography variant="h1" style={{margin: '0.2em'}}>
            UniqueLab Monitor
          </Typography>
          <ServerList servers={this.state.servers} loading={this.state.loading}/>
        </Container>
      </div>
    );
  }
}

export default App;
