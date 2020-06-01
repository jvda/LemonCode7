import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MemberEntity } from "./member.vm";
import { getAllMembersByPage } from "./member.api";
import { MemberRow } from "./memberRow";
import { LastSearchContext, routesLinks } from "../../core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import { trackPromise, usePromiseTracker } from 'react-promise-tracker';
import ClockLoader from "react-spinners/ClockLoader";
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import Button from "@material-ui/core/Button/Button";

const useStyles = makeStyles(theme => ({
  memberTable: {
    height: '100%'
  },
  table: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollableDiv: {
    overflow: "auto"
  },
  button: {
    margin: theme.spacing(1),
  },
  noNextPage: {
    display: 'none'
  }
}));

const useLoadMembers = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setNextPage] = React.useState<number>(1);
  const [hasMore, setHasMore] = React.useState(false);
  const [loadMore, setLoadMore] = React.useState(false);
  const { toSearch } = React.useContext(LastSearchContext);
  const PERPAGE: number = 3;

  React.useEffect(
    () => {
      if (loadMore) loadMembers();
      setLoadMore(false);
    },
    [loadMore]
  );

  React.useEffect(
    () => {
      setNextPage(1);
      setMembers([]);
      setHasMore(false);
      setLoadMore(true);
    }, 
    [toSearch]
  );

  const loadNextMembers = () => setLoadMore(true);

  const loadMembers = () => {
    if (toSearch.length > 0 && page != undefined) {
      trackPromise(getAllMembersByPage(toSearch, page, PERPAGE)
        .then(
          ({ members: newMembers, next, last }) => {
            setNextPage(next);
            setMembers(members.concat(newMembers));
            setHasMore(next != undefined);
          },
          () => {
            setMembers([]);
          }
        ))
    };
  };

  return { toSearch, members, hasMore, loadMembers }
}

interface Props extends RouteComponentProps {};

const MembersTableComponentInner = (props: Props) => {
  const { toSearch, members, hasMore, loadMembers } = useLoadMembers();
  const { promiseInProgress } = usePromiseTracker();
  const classes = useStyles();
  
  const memberDeatail = (userName : string) => {      
    props.history.push(routesLinks.detailMember(userName));
  }

  return (
    <div className={classes.memberTable}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {toSearch}
      </Typography>
      <List className={classes.list}>
        <div className={classes.list}>
          {
            members.map((member: MemberEntity, i: number) => (
              <ListItem key={i} button onClick={() => memberDeatail(member.login)}>
                <MemberRow key={member.id} member={member} />
              </ListItem>
            ))
          }
          <div>
            {
              (promiseInProgress === true) ?
                <ListItem key={0} >
                  <ClockLoader
                    size={50}
                    color={"#123abc"}
                    loading={promiseInProgress}
                  />
                </ListItem>
                :
                <div>
                  {
                    (hasMore === true) ?
                      <ListItem key={0}>
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classes.button}
                          startIcon={<ArrowDropDownCircleIcon />}
                          onClick={loadMembers}
                        >
                          Cargar más miembros
                        </Button>
                      </ListItem>
                      :
                      null
                  }
                </div>
            }
          </div>
        </div>
      </List>
    </div >
  );
};

export const MembersTableComponent = withRouter(MembersTableComponentInner);


