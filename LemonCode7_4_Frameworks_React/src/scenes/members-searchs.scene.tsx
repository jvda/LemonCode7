import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppLayout } from "../layout";
import { MembersTableComponent } from "../pods";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));

export const MembersSearchScene = () => {
  const classes = useStyles();

  return (
    <AppLayout initOpen={true}>
      <MembersTableComponent/>
    </AppLayout>
  );
};
