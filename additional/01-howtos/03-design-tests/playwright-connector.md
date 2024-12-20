---
sidebar_class_name: hidden
---

# Use the Menditect Playwright Connector

This section describes how to create a frontend test using Playwright, in Mendix. 
Playwright is a library with which you can locate elements on a web page and execute actions on these elements.
See https://playwright.dev/java/ for the relevant Playwright documentation.

Menditect has created 2 modules that enable MTA customers to build frontend tests using Playwright.
- The Menditect Playwright Connector module: https://marketplace.mendix.com/link/component/235323
- The Menditect Playwright Starter Kit module: https://marketplace.mendix.com/link/component/235327

## Connector Module

The Connector Module enables the use of Playwright to define and run a frontend test from any Mendix App. The Playwright Locators and Actions defined in the Connector Module can then be used to test *any* webapplication, not just Mendix Apps. Locator and Action microflows in the Connector Module can be defined and executed from MTA.

## Starter Kit

The Starter Kit is meant for using the Connector module for Mendix apps. This starter kit contains
- A reusable Locator and Action microflows to test standard Mendix Widgets
- An example Mendix Project with an example Playwright testscript
- A Page showing Test Results with Screenshots, Trace files & Aria Snapshots

## Get started

It is not necessary to import the modules in the same Mendix App as the one under test. However for this example, this is assumed to be the case.

- Start by importing the Connector module. This module requires the playwright driver bundle jar file in your userlib directory. See the documentation in the Mendix Marketplace on how to download this jar file.
- Download the Starter Kit module to start testing the most common Mendix Widgets in Playwright.
- Create a PlaywrightTest object that will be used to associate the list of objects to. 
- Add Locators and Actions to the object list using the corresponding microflows. 
- At the end, call the Execute_Playwright microflow that executes everything in the list and returns a result.

## DEFINE THE TEST FLOW

- For defining the test flow, note what data is needed to recreate this exact flow. 
- Manually go through the pages and carefully note each action taken. Use a (Playwright) recorder if this helps.
- For each element that is touched, note the element type, the label or text for the element, and the value that is entered or selected.
- 

## CHOOSING THE RIGHT LOCATORS

There are two types of Locator microflows:
- Page locators, starting with Page_ 
Use these if you expect to uniquely identify an element on the page. The microflow takes the Page as a parameter.
- Chained locators, starting with Locator_
Use these if using any of the Page_ microflows is not specific enough (leads to a strict mode violation). The microflow takes the Locator as a parameter.

NOTE: Chaining multiple locators sometimes only works when performed in a certain order. @@WHY? 

Defining which locator to use best can be difficult. First, define what you want to do with the element on the page. Then, try low-maintainance locators first. Xpath is always the last resort.

### CLICK ELEMENT

- The least flaky locator is the Text or Label locator. Using this locator has preference over other locators. For any clickable element, use the Page_Get_By_Label or Page_Get_By_Text locator action. If there are multiple clickable elements, chain with any of below.
- If the element does not contain text that can be filtered, use the Page_Get_By_Role locator. 
- If the role cannot be determined, try using other locators, like Alt_Text or Placeholder.
- If that does not work, try surrounding the element with a container that is given a specific class. @@DOESTHISWORK?
- Usually less successful for Mendix projects, but the Get_By_Title and Get_By_TestId could work.
- Using Get_By_Selector (with "xpath=xxxx") will *always* yield a successful result, but will break with any change in the layout.



## NAMING CONVENTIONS

- use POM_ (Playwright Object Model) as prefix for microflows that 


# HOW TO USE MTA TO EXECUTE YOUR FRONTEND TEST