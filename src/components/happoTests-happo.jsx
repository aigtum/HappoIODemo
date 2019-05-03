import React from "react";
import Button from "./myButton";
import Header from "./header";
import Footer from "./footer";
import MainComponent from "./main";
import Readme from "./readme";

export const primary = () => (
    <Button type="primary" label="Primary"/>
);
export const header = () => (
    <Header/>
);
export const footer = () => (
    <Footer/>
);
export const mainComponent = () => (
    <MainComponent/>
)
export const readme = () => (
    <Readme/>
)