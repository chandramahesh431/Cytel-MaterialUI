import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 100,
      flexGrow: 1
    }
  }
}));
const MainGrid = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <MenuList>
              <MenuItem>Endpoints</MenuItem>
              <MenuItem>Polpulation</MenuItem>
              <MenuItem>Enrollment</MenuItem>
              <MenuItem>Dropout</MenuItem>
              <MenuItem>Designs</MenuItem>
              <MenuItem>Opertaional Costs</MenuItem>
              <MenuItem>Market Access</MenuItem>
              <MenuItem>Setup</MenuItem>
            </MenuList>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <label>Designs</label>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <table>
                    <tr>
                      <td>
                        {" "}
                        <TextField
                          id="outlined-search"
                          label="Name"
                          type="Name"
                          variant="outlined"
                        />
                      </td>
                      <td>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="age-native-simple">
                            design
                          </InputLabel>
                          <Select
                            native
                            inputProps={{
                              name: "statistical design",
                              id: "age-native-simple"
                            }}
                          >
                            <option value="" />
                            <option value={10}>Design1</option>
                            <option value={20}>Design2</option>
                            <option value={30}>Design3</option>
                          </Select>
                        </FormControl>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FormControl
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Primary Endpoint
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </td>
                      <td></td>
                    </tr>
                  </table>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Expansion Panel 2
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainGrid;
