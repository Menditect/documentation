# Run your first test in MTA

These step-by-step instructions will help new MTA users add and execute their first test on a single Mendix App.

## 1. Add an Application

Your very first stop is the 'Applications' tab. 
Click on the '+ Application' button to add an Application.

![Add application](images/run_first_test_1.png)

Select the application that you want to test from the list.

## 2. Add a Test Configuration

Now navigate to the 'Test settings' tab.
Click on the '+ Test configuration' button to start the wizard for adding a Test Configuration.

![Add test configuration](images/run_first_test_2.png)

The Wizard consists of 4 steps. 

### Step 1

Enter the name and optional description of the Test Configuration. Click 'Save and Next'. ![Add test configuration](images/run_first_test_3.png)

### Step 2

Selecting the Application under test. Select the Application that you just added to MTA and click 'Next'.![Add test configuration](images/run_first_test_4.png)

### Step 3

Click the 'Select revision' button. MTA will show a popup. Select the branch and revision that you want to test. Click 'Save and Next'. 
![Add test configuration](images/run_first_test_5.png)
MTA will show a message that it will start downloading this revision.

### Step 4

The last step is selecting an application instance. Click 'Application instance'.
- If you're running your Application under test on the Mendix Cloud, click 'Existing application instance'. You can select any of the application instances MTA has detected when you added the Application.
- If you're running on another cloud provider, on premise, or on a local computer, click 'New application instance'. 

![Add test configuration](images/run_first_test_6.png)

### `eof (todo)`