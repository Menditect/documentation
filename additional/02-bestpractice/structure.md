# Structure

## Definition

- Het onderhouden van unit tests zal een andere frequentie hebben dan het onderhouden van proces tests.
- Menditect raadt aan om in MTA per Mendix applicatie één test configuratie voor alle unit tests te maken, en afhankelijk van de grootte, complexiteit of integratie-afhankelijkheid van de Mendix applicatie, één voor alle proces tests, of één per proces test.
- Menditect raadt aan om voor unit tests één test suite per module uit het Mendix model te maken.
- Menditect raadt aan om voor unit tests één test case per te testen microflow uit het Mendix model te maken.
- Menditect raadt aan om voor proces tests het patroon te hanteren van één test suite voor het opschonen van test data, één test suite voor het aanmaken van test data, en één of meerdere test suites per (deel)proces.



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 March 2024