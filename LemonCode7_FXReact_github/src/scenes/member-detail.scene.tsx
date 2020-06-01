import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { AppLayout } from "../layout";
import { MemberDetailComponent } from "../pods";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  }
}));

export const MemberDetailScene = () => {
  const classes = useStyles();

  React.useEffect(
    () => {
      console.log("Aqui llego");
    },
    []
  )

  return (
    <AppLayout initOpen={false}>
      <MemberDetailComponent />
    </AppLayout>
  );

};
