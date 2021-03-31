const React = require('react');
const { mount } = require('enzyme');
const {Game}  = require('../src/Game');

const checkCardIsDisplayed = (driver) =>{
    const questions = driver.find('.card');
    expect(cards.length).toEqual(1);
} 

test("test created",()=>{
    const driver = mount(<Game/>);
    checkCardIsDisplayed(driver);
});
