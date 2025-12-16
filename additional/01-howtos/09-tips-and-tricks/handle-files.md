# Handle files

File handling in MTA is possible in MTA 3.0 and higher versions.

## Download a FileDocument 

If a `FileDocument` object that was [Retrieved](../../../mta/Teststep/retrieve) or [Created](../../../mta/Teststep/create) during a [Test Run](../../../mta/test-run) has Contents, it is possible to download a copy of that file to your computer. 

- Select the Teststep that returned the Filedocument (or a specialization) in the details of the Test Run.
- Click on the file name to download it.

## Upload a FileDocument 

MTA does not (yet) allow uploading a `FileDocument` into your Test App.

There are two workarounds for this. 

### 1. Create FileDocument from a Base64 string

The preferred way to fill the Contents of a FileDocument is by using a Java Action in a Microflow that converts a Base64 string into binary data and stores it in a file.

- Create (if not yet exists) an MTA extension module in the tested App.
- Add a User to the module.
- Add an entity that inherits from FileDocument or Image, for instance `MyImage`.
- Give the User full access to that entity.
- Create a microflow that decodes a String to a FileDocument using the (Java) Base64 decode to file action from the [Community Commons module](https://docs.mendix.com/appstore/modules/community-commons-function-library/). It should look like this:
![Create File from Base64 String](../images/image-from-base64.png)

An example String that decodes into the Menditect Logo can be found [here](../images/menditectlogo.txt).

Now, just add a [Teststep](../../../mta/Teststep/microflow) in MTA calling this microflow, and you can use the created file anywhere in the Test Case.

### 2. Duplicate existing FileDocument

An alternate way to fill the Contents is to duplicate an existing file and refer to the duplicate file in the test, to prevent polluting existing data.

- Create (if not yet exists) an MTA extension module in the tested App.
- Add a User to the module.
- Add an entity that inherits from FileDocument or Image, for instance `MyPdfFile`.
- Give the User full access to that entity.
- Build a NewEdit Page to upload files of this type.
- Create a microflow with only a single (Java) Duplicate File Document action from the [Community Commons module](https://docs.mendix.com/appstore/modules/community-commons-function-library/). It should look like this:
![Duplicate File Document microflow](../images/duplicate-filedoc.png)

Now, it is possible to use this pattern in a Test Case, to test processes that require a file:
1. Teststep that Creates an empty filedocument as used in the tested process (for example, a 'TemplateDocument' as is used in the Excel Importer).
2. Persist (to ensure the object is saved to the database, otherwise the Java action won't work).
3. Teststep that Retrieves the filedocument from the MTA extension module's entity.
4. Microflow call to the abovementioned microflow with parameters: teststep 1 as Target, and teststep 3 as Source.
5. Other logic to perform the actual test.
6. Optional delete logic to clean up.

## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 7 December 2025