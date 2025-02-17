# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

## Request Body
The request body must be a JSON object containing the following fields:
- `fullname.firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
**Status Code:** `201 Created`

**Response Body:**
```json
{
  "token": "jwt-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
**Status Code:** `400 Bad Request`

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "firstname must be at least 3 character",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Missing Fields
**Status Code:** `400 Bad Request`

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "All fields are Required",
      "param": "firstname",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to log in an existing user. It requires the user's email and password.

## Request Body
The request body must be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Responses

### Success
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "token": "jwt-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Errors
**Status Code:** `400 Bad Request`

**Response Body:**
```json
{
  "errors": [
    {
      "msg": "Invalid",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "password must be atleast 6 character",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Invalid Credentials
**Status Code:** `401 Unauthorized`

**Response Body:**
```json
{
  "message": "Invalid email or password"
}
```

# Get User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to retrieve the profile of the authenticated user.

## Responses

### Success
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "_id": "user-id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Unauthorized
**Status Code:** `401 Unauthorized`

**Response Body:**
```json
{
  "message": "Unauthorized"
}
```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to log out the authenticated user. The token used for authentication will be blacklisted to prevent further use.

## Responses

### Success
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "message": "Logged out"
}
```

### Unauthorized
**Status Code:** `401 Unauthorized`

**Response Body:**
```json
{
  "message": "Unauthorized"
}
```
