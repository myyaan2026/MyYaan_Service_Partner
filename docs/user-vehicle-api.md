# User vehicle APIs

All endpoints below require `Authorization: Bearer <authToken>` from the normal-user OTP flow.

## Fetch selection data

```text
GET /api/users/vehicle-types
GET /api/users/vehicle-companies?vehicleType=Bike
GET /api/users/vehicle-models?vehicleType=Bike&companyId=1
```

`vehicleType` accepts `Bike`, `Electric Bike`, `Car`, and `Electric Car` (the API also accepts the corresponding uppercase codes). `companyId` is optional for `vehicle-models`; omit it to fetch every model for the selected vehicle type.

## Manage the user's vehicles

```text
GET /api/users/vehicle-details
POST /api/users/vehicle-details
GET /api/users/vehicle-details/:vehicleId
PUT /api/users/vehicle-details/:vehicleId
PATCH /api/users/vehicle-details/:vehicleId/primary
DELETE /api/users/vehicle-details/:vehicleId
```

Example request body:

```json
{
  "vehicleType": "Bike",
  "companyId": 1,
  "modelId": 1,
  "vehicleNumber": "DL 01 AB 1234"
}
```

The server normalizes the registration number to uppercase without spaces and verifies that the selected model belongs to the selected company and vehicle type. `POST` adds a vehicle; the first one automatically becomes primary. Include `"isPrimary": true` to make a newly added or updated vehicle primary.
