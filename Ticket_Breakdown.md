# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1

#### Title: Create Custom IDs for Agents
#### Description: Create a new field in the Agents table in the database to store custom IDs for the Agents.
#### Acceptance Criteria: 
- Field must be able to store any custom ID up to 10 characters long. 
- A new API call must be created to allow Facilities to set these custom IDs.
#### Time/Effort Estimate: 4 hours
#### Implementation Details: 
- Create a new field in the Agents table
- Create a new API call to allow Facilities to set custom IDs
- Validate input data to ensure custom IDs are only up to 10 characters

### Ticket 2
#### Title: Update getShiftsByFacility API
#### Description: Update the getShiftsByFacility API to return the custom ID of the Agent instead of the internal database id.
#### Acceptance Criteria: 
- The API must return the custom ID of the Agent if one is available, otherwise it should return the internal database id.
#### Time/Effort Estimate: 2 hours
#### Implementation Details: 
- Update the API to check for the existence of a custom ID for the Agent 
- If there is a custom ID, use that instead of the internal database id

### Ticket 3
#### Title: Update generateReport Function
#### Description: Update the generateReport function to use the custom ID of the Agent instead of the internal database id.
#### Acceptance Criteria: 
- The function must use the custom ID of the Agent if one is available, otherwise it should use the internal database id.
#### Time/Effort Estimate: 2 hours
#### Implementation Details: 
- Update the function to check for the existence of a custom ID for the Agent 
- If there is a custom ID, use that instead of the internal database id

### Ticket 4
#### Title: Update Report Format
#### Description: Update the report format to include the custom ID of the Agent instead of the internal database id.
#### Acceptance Criteria: 
- The report should include the custom ID of the Agent if one is available, otherwise it should use the internal database id.
#### Time/Effort Estimate: 1 hour
#### Implementation Details: 
- Update the report template to include the custom ID of the Agent 
- If there is no custom ID, use the internal database id

### Ticket 5
#### Title: Test Functionality
#### Description: Test the functionality of the custom ID feature to ensure it works as expected.
#### Acceptance Criteria: 
- The API and functions must be able to handle custom IDs of up to 10 characters
- The report must include the correct custom ID (if available)
#### Time/Effort Estimate: 2 hours
#### Implementation Details: 
- Create test cases to ensure the API and functions are able to handle custom IDs correctly
- Generate reports with different Agents to ensure the correct custom ID is being used2