import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

import api from '../utils/api';


import SimpleCard from './simple_card';
import AlertDialog from './alert_dialog';

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search: '',
        quotes: null,
        tags: null,
        jwt: null,
        open: false,
      }
    };

    async componentDidMount() {
      const jwt =  await localStorage.getItem('jwt');
      if(jwt) this.setState({ jwt });
    }

    async handleSearchPress() {
      const { search } = this.state;
      if(search.trim().length > 0){
        try {
            const result = await api.get(`quotes/${search}`);
            this.setState({ quotes: result.data, tags: result.data.included });
        } catch (error) {   
            this.handleClickModalOpen();      
        }
      }
    };

    async handleSignInPress() {
        try {
            const response = await api.post('signin', {
                email: 'ilson.lasmar@gmail.com',
                password: '123456'
            });
            await localStorage.setItem('jwt', response.data.jwt);
            this.setState({ jwt: response.data.jwt});            
        } catch (error) {
            
        }
    }

    async handleDeleteJwt() {
      await localStorage.removeItem('jwt'); 
      this.setState({ jwt: null});   
    }

    handleClickModalOpen = () => {
        this.setState({ open: true });
    };
      
    
    handleModalClose = () => {
      this.setState({ open: false });
    };   
    
    handleInput = (event) => {       
      if (event.key === 'Enter') {  
        this.handleSearchPress();
        event.preventDefault()
        return;  
      }
      this.setState({ search: event.target.value });
    };

    render() {
      return (
        <div style={{flexGrow: 1}}>
            <AlertDialog 
              open={this.state.open} 
              handleClickModalOpen={this.handleClickModalOpen.bind(this)}
              handleModalClose={this.handleModalClose.bind(this)}
            />
            <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit">
                InovaMind - Ilson Oliveira Santos Filho
                </Typography>
            </Toolbar>
            </AppBar>          
            <Grid container direction="row" justify="center" alignItems="center">
            { this.state.jwt &&
            <Chip label={ this.state.jwt } clickable onDelete={this.handleDeleteJwt.bind(this)} />    
            }

            <Grid item xs={12}>
            <Grid container direction="row" justify="center" alignItems="center">
           
              
              <Paper elevation={1} style={{padding: 100, marginTop: 20}}>
                <Grid item xs={12}>
                  <Button variant="contained" style={{marginBottom: 50, marginLeft: 50}} color="secondary" onClick={this.handleSignInPress.bind(this)}>
                    { this.state.jwt ? 'Token JWT Gerado!' :'Gerar Token JWT' }
                  </Button> 
                           
                </Grid>   
                    <TextField
                        id="search"
                        label="Digite a tag desejada"
                        type="search"                    
                        margin="normal" 
                        value={this.state.search}
                        onChange={this.handleInput.bind(this) } 
                        onKeyPress={this.handleInput.bind(this) }                       
                    />
                  <Button variant="contained" style={{marginLeft: 10}} color="primary" onClick={this.handleSearchPress.bind(this)}>
                    Pesquisar
                  </Button>
              </Paper>
              </Grid>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center" style={{backgroundColor: '#aba8a8'}}>
              <Grid item xs={3}>
              
              { this.state.quotes && this.state.quotes.data && this.state.quotes.data.map((quote) => (
                <div key={quote.id} style={{marginTop: 20}}><SimpleCard quote={quote} tags={this.state.tags}/></div>  
                ))
              }
              </Grid>
              </Grid>
            </Grid>
        </div>               
      );
    }    
}
export default Search;