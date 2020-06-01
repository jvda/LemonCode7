import * as React from 'react';
import { MemberEntity } from './member.vm';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    memeberCard: {
      width: '300px',
      margin:  '10px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    
    redAvatar:    {backgroundColor: '#ff0000'},
    greenAvatar:  {backgroundColor: '#00ff00'},
    blueAvatar:   {backgroundColor: '#0000ff'},
    cyanAvatar:   {backgroundColor: '#00FFFF'},
    orangeAvatar: {backgroundColor: '#FFA500'},
    yellowAvatar: {backgroundColor: '#FFFF00'},
    violetAvatar: {backgroundColor: '#EE82EE'},
  }),
);

export const MemberRow = (props: { member: MemberEntity }) => {
  const classes = useStyles();
  
  const colors = [
    classes.redAvatar ,
    classes.greenAvatar ,
    classes.blueAvatar ,
    classes.cyanAvatar ,
    classes.orangeAvatar ,
    classes.yellowAvatar ,
    classes.violetAvatar 
  ];
 
  const ramdomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <Card className={classes.memeberCard} >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={ramdomColor()} >
            {props.member.login[0]}
          </Avatar>
        }
        title={props.member.login}
      />
      <CardMedia
        className={classes.media}
        image={props.member.avatar_url}
        title={props.member.login}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.member.id}
        </Typography>
      </CardContent>
    </Card>
  )
}