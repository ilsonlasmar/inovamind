import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends React.Component {

  render() {
    return (
      <div>        
        <Dialog
          open={this.props.open}
          onClose={this.props.handleModalClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"InovaMind - Você está realmente autenticado?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              É necessário autenticação para realizar consultas na base de dados.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleModalClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.props.handleModalClose} color="primary" autoFocus>
              Entendi!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;