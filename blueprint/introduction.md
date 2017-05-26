## Versioning

Every year, we release a new version of the API, numbered by the 
last two digits of the current year. For example, the root URL of 
this (the 2017) release is https://kitsu.io/api/17/.No fields, 
endpoints, or resources will be removed until the next year's 
release, but may be changed to return empty values (arrays, empty 
strings, etc.) before then. Fields, endpoints, and resources may be 
added throughout the lifetime of a release.In addition to these 
versioned APIs, there is access to the same API our website uses. 
However, this offers no guarantees: anything could change at any 
time. We suggest you don't use this, but if you need to, it can be 
accessed at https://kitsu.io/api/edge/.

## Life Cycle

Upon release of a new version, the previous version will be
maintained for one year or until usage drops below 2% of API 
traffic. During this period, it will not be updated to have any new
fields, endpoints, or resources.You are expected to keep your 
applications running on the latest version of the API. For most 
applications, upgrading should take no more than a few hours of 
work.

## JSON API

The Kitsu API implements the JSON API specification. This means
there are some notable semantics to how you consume it, but
understanding it will take a lot of the work of using it out of your
hands. These docs will include a short overview of the capabilities,
but you can consult the JSON API Specification for more information.

As per the JSON API specification, all requests to the API should
contain these headers:

```
Accept: application/vnd.api+json
Content-Type: application/vnd.api+json
```
