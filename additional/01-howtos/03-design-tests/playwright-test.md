---
sidebar_class_name: hidden
---

# CREATE A FRONTEND TEST WITH THE MENDITECT PLAYWRIGHT MODULE

This section describes how to create a frontend test using Playwright for a Responsive Web Mendix App. 
Playwright is a library with which you can locate elements on a web page and execute actions on these elements.
See https://playwright.dev/java/ for the relevant Playwright documentation.

## IN SHORT

- Start by importing the Menditect Playwright module. This module needs the playwright driver bundle jar file in your userlib directory. @@DEPENDENCY? The module uses an Object model to define which locators and which actions to play in sequence. @@WHY?
- Start by calling the Create_Browser, Create_BrowserContext and Create_Page microflows. 
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