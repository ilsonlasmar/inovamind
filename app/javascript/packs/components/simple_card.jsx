import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { quote: { id, attributes }, tags } = props;
  const bull = <span>•</span>;

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
          { attributes.description }
          </Typography>
          <Typography color="textSecondary">
            { attributes.author }
          </Typography>
          { tags.map(tag => {
            const result = tag.relationships.quote.data.find((q) => q.id === id);
             if(result)
             return (<Chip key={tag.id} label={tag.attributes.name} />)
           }
          )}
        </CardContent>
        <CardActions>
        <Button size="small" color="primary" onClick={() => { window.open(attributes.author_about, '_blank');}}>Mais sobre Autor</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);