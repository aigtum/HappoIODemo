import React from "react";
import Button from "./myButton";
import Header from "./header";
import Footer from "./footer";
import SimpleExpansionPanel from "./expansion-panel";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

export const primary = () => (
    <Button type="primary" label="Primary"/>
);
export const header = () => (
    <Header/>
);
export const footer = () => (
    <Footer/>
);
export const expansionPanel = () => (
    <SimpleExpansionPanel/>
)
