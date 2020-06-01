import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import { MemberDetailEntity, createDefaultMemberDetailEntity } from "./memberDetail.vm";
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import { getMembersByLogin } from "./memberDetail.api";
import TextField from "@material-ui/core/TextField/TextField";
import Card from "@material-ui/core/Card/Card";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";

const useStyles = makeStyles(theme => ({
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    justifyContent: 'center'
  },
  memeberCard: {
    width: '300px',
    margin:  '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

// Dont work. Why? -> match.params.id dont exist in RouteComponentProps type.
//                    I dont know how add it to Props
interface Props extends RouteComponentProps { }

const MemberDetailComponentInner = ({ match: { params: { userName } } }) => {
  const [memberDetail, setMemberDetail] = React.useState<MemberDetailEntity>(createDefaultMemberDetailEntity());
  const classes = useStyles();

  React.useEffect(
    () => loadMemberDetail(),
    [userName]
  )

  const loadMemberDetail = () => {
    trackPromise(getMembersByLogin(userName)
      .then(
        (member: MemberDetailEntity) => {
          setMemberDetail(member);
        },
        () => {
          setMemberDetail(createDefaultMemberDetailEntity());
        }
      ))
  }

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Detail member {userName}
      </Typography>
      <form noValidate autoComplete="off">
        <div className={classes.form}>
          <TextField id="standard-login" label="Login" value={memberDetail.login} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-id" label="ID" value={memberDetail.id} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-node_id" label="Node ID" value={memberDetail.node_id} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-avatar_url" label="Avatar" value={memberDetail.avatar_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <Card  className={classes.memeberCard} >
            <CardMedia
              className={classes.media}
              image={memberDetail.avatar_url}
            />            
          </Card>
          <TextField id="standard-gravatar_id" label="gravatar_id" value={memberDetail.gravatar_id} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-url" label="url" value={memberDetail.url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-html_url" label="URL" value={memberDetail.html_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-followers_url" label="Followers" value={memberDetail.followers_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-following_url" label="Following" value={memberDetail.following_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-gists_url" label="Gists" value={memberDetail.gists_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-starred_url" label="Starred" value={memberDetail.starred_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-subscriptions_url" label="Subscriptions" value={memberDetail.subscriptions_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-organizations_url" label="Organizations" value={memberDetail.organizations_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-repos_url" label="Repos" value={memberDetail.repos_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-events_url" label="Events" value={memberDetail.events_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-received_events_url" label="Received Events" value={memberDetail.received_events_url} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-type" label="Type" value={memberDetail.type} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-site_admin" label="Site Admin" value={memberDetail.site_admin} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-name" label="Name" value={memberDetail.name} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-company" label="Company" value={memberDetail.company} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-blog" label="Blog" value={memberDetail.blog} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-location" label="Location" value={memberDetail.location} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-email" label="email" value={memberDetail.email} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-hireable" label="Hireable" value={memberDetail.hireable} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-bio" label="Bio" value={memberDetail.bio} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-public_repos" label="Public Repos" value={memberDetail.public_repos} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-public_gists" label="Public Gists" value={memberDetail.public_gists} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-followers" label="Followers" value={memberDetail.followers} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-following" label="Following" value={memberDetail.following} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-created_at" label="Created At" value={memberDetail.created_at} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
          <TextField id="standard-updated_at" label="Updated At" value={memberDetail.updated_at} InputProps={{ readOnly: true, disableUnderline: true }} InputLabelProps={{ shrink: true }} />
        </div>
      </form>
    </>
  );
};

export const MemberDetailComponent = withRouter(MemberDetailComponentInner);
