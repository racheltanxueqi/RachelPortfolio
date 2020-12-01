import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.svg'

import './index.css';

const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 50,
        width: '100%',
        backgroundColor: '#cbd5f0',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: '#000000',
      fontWeight: '300',
      fontSize: '18px',
      fontFamily: 'Lato, sans-serif',
      '&:focus': {
        opacity: 5,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    padding: {
      padding: theme.spacing(1),
    },
    navMenu: {
      backgroundColor: 'transparent',
    },
  }));

function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(value)
    };

    return (
        <div className="nav-bar">
            <div className="nav-container">
                <div className="nav-title">
                    {/* replace with my own logo */}
                    {/* <h3>Rachel Tan Xue Qi</h3> */}
                    <img src={logo} style={{width:'50px'}}></img>
                </div>
                <div className={classes.navMenu}>
                    <StyledTabs value={value} onChange={handleChange}>
                        <StyledTab label="HOME" />
                        <StyledTab label="SKILLS" />
                        <StyledTab label="EXPERIENCE" />
                        <StyledTab label="MORE" />
                        <StyledTab label="CONTACT" />
                    </StyledTabs>
                </div>
            </div>
        </div>
    );
}

export default Navbar;