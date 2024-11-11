## Bug #7: API - Deleting a Pet with a Negative ID

- **Severity**: Medium
- **Priority**: High
- **Version**: 1.0

**Description**: When deleting a pet using a negative ID via the API, the response code returned is 200 (OK) instead of the expected 400 (Bad Request). The system does not correctly handle invalid negative IDs.

**Acceptance Criteria**: The server should respond with a 400 Bad Request status code, indicating that the provided ID is invalid.

## Bug #8: API - Creating a Pet with a Negative ID or Empty

- **Severity**: Medium
- **Priority**: High
- **Version**: 1.0

**Description**: When creating a pet using a negative ID via the API, the response code returned is 200 (OK), which indicates a successful request. However, the API should return a 400 (Bad Request).

**Acceptance Criteria**: The server should respond with a 400 Bad Request status code, indicating that the provided ID is invalid.
