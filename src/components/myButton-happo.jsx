import React from "react";
import Button from "./myButton";
import Header from "./header";
import Footer from "./footer";
import SimpleExpansionPanel from "./expansion-panel";


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
