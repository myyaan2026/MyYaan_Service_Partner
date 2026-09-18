# Service partner discovery

All endpoints require a Bearer token.

## Service partner: sub-service capabilities

```text
GET /api/service-partners/capabilities/sub-services?serviceCenterId=1&serviceId=2
PUT /api/service-partners/capabilities/sub-services
```

```json
{
  "serviceCenterId": 1,
  "serviceId": 2,
  "subServiceIds": [4, 5, 6]
}
```

## Service partner: supported models

```text
GET /api/service-partners/capabilities/vehicles?serviceCenterId=1&serviceId=2&vehicleType=BIKE
PUT /api/service-partners/capabilities/vehicles
```

```json
{
  "serviceCenterId": 1,
  "serviceId": 2,
  "vehicleType": "BIKE",
  "modelIds": [1, 2, 3]
}
```

The PUT requests replace the configured capability list for that service centre, service, and vehicle category.
