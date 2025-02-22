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

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

## Request Body
The request body must be a JSON object containing the following fields:
- `fullname.firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
- `fullname.lastname` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle.color` (string, required): The color of the vehicle. Must be at least 3 characters long.
- `vehicle.plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
- `vehicle.capacity` (number, required): The capacity of the vehicle. Must be a number.
- `vehicle.vehicleType` (string, required): The type of the vehicle. Must be one of 'car', 'motorcycle', or 'auto'.

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success
**Status Code:** `201 Created`

**Response Body:**
```json
{
  "token": "jwt-token",
  "captain": {
    "_id": "captain-id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
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
      "msg": "First name must be at least 3 character",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 character",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 character",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 character",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be a number",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Captain Already Exists
**Status Code:** `400 Bad Request`

**Response Body:**
```json
{
  "message": "Captain already exist"
}
```
