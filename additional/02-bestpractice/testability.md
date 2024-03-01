# Testability

## Make your Mendix model testable

- Build microflows with unit testing in mind: keep complexity low, use submicroflows with dedicated functions. 
- Build microflows with process testing in mind: splitup governing microflows into submicroflows, provide an object as output parameter if used in a show page action and keep database retrieves and commits separated from business logic. 
- Follow Mendix best practices.
- Use microflow naming conventions based on entity names. 
- Keep your domain model readable.
- Avoid microflow logic duplication.
- Avoid if/else constructions in microflow actions.
- Avoid start- and stop transaction actions.
- Use annotations for complex microflows or when differing from Mendix practices.
- Have coworkers peer review your code.
- Avoid Java actions in microflows. 
- Plan refactoring time. 
- Consider using test driven development to reduce refactoring time.



## Feedback?
Missing anything? [Let us know!](mailto:support@menditect.com)

Last updated 1 March 2024