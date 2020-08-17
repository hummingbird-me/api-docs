# API Docs [![Travis]][2]

Kitsu is a modern anime discovery platform that helps you track the anime you're watching, discover new anime and socialize with other fans.

---
**<p align="center">This is our [api docs] repository.<br />Check out the [tools], [web], [mobile] and [server] repositories.</p>**

[tools]:https://github.com/hummingbird-me/hummingbird
[web]:https://github.com/hummingbird-me/hummingbird-client
[server]:https://github.com/hummingbird-me/hummingbird-server
[mobile]:https://github.com/hummingbird-me/kitsu-mobile
[api docs]:https://kitsu.docs.apiary.io

---

## Documentation

Legacy documentation is available on Apiary: https://kitsu.docs.apiary.io/

The API documentation is currently being converted from API Blueprint to OpenAPI 3. You can view the progress at: https://hummingbird-me.github.io/api-docs

## Contributing

The documentation is written with [OpenAPI 3][3] and [YAML 1.2][4]. Trivial changes can be added using GitHub's built-in editor. For bigger changes it is advised to follow the steps below.

If you have any questions you can:
- Ask us in `#api` on our [Discord server][7]
- Ping [@wopian], [@matthewdias] or [@nuck] on Kitsu.

### File Structure

The OpenAPI schema is split into multiple directories. While it looks complicated, it reduces the amount of repeated parameters and resource attributes/relationships to near zero.

Resource, relationship and filter inheritence matches the model definitions on the server repo.

```yaml
api
├───parameters  # Query Parameters
│   └───path    # Path Parameters
│
├───paths       # Endpoints, grouped by tagGroups
│
├───resources   # Top-level JSON:API resource structures (one, many, included)
│   ├───anime
│   └───error   # JSON:API error responses
│
└───schemas                       # Data Models
    ├───enums
    │
    ├───filters                   # Reusable JSON:API filter parameters
    │   ├───resource              # Root filter parameter for each resource
    │   └───resourceFilters       # Grouped filters (inheritance)
    │
    ├───links                     # JSON:API link properties
    │
    ├───meta                      # JSON:API meta properties
    │
    └───resources                 # JSON:API resources
        ├───relationships         # JSON:API relationships
        └───resourceRelationships # Grouped relationships (inheritance)
```

### Base Files

These are defined as seperate resources in the server definitions and are inherited by all other definitions. Check `anime` and `media` in `api/schemas/resources` and `api/schemas/filters/resourceFilters` to see how inheritance is applied.

#### Resources

All resources inherit from `api/schemas/resources/base.yml`

In addition:

- Sluggable resources inherit from `api/schemas/resources/base_sluggable.yml`
- Episodic resources inherit from `api/schemas/resources/base_episodic.yml`

#### Resource Relationships

- Episodic resources inherit from `api/schemas/resources/resourceRelationships/base_episodic.yml`

#### Filters

All resources inherit from `api/schemas/filters/resourceFilters/base.yml`

In addiion:

- Sluggable resources inherit from `api/schemas/filters/resourceFilters/base_sluggable.yml`
- Episodic resources inherit from `api/schemas/filters/resourceFilters/base_episodic.yml`

### Requirements

- [git](https://git-scm.com) > `2.0.0`
- [node.js](https://nodejs.org) > `12.0.0`
- [yarn](https://yarnpkg.com) > `1.22.0`

### Development

1. [Fork the repo][5]

2. Clone the repo (`git clone https://github.com/{yourusername}/api-docs.git`)

3. Create a new branch (`git checkout -b improve-docs`)

4. Install dependencies (`yarn`)

5. Make the appropriate changes in the source files
  - Check the changes locally with `yarn start`

6. Commit your changes (`git commit -am 'feat: improve docs'`)

7. Push to your branch (`git push origin improve-docs`)

8. [Create a Pull Request][6]

## Contributors

[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/0)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/0)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/1)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/1)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/2)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/2)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/3)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/3)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/4)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/4)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/5)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/5)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/6)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/6)[![](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/images/7)](https://sourcerer.io/fame/wopian/hummingbird-me/api-docs/links/7)

[0]:https://github.com/hummingbird-me/hummingbird-server
[1]:https://github.com/hummingbird-me/hummingbird-client
[2]:https://travis-ci.org/hummingbird-me/api-docs
[3]:http://spec.openapis.org/oas/v3.0.3
[4]:https://yaml.org/spec/1.2/spec.html
[5]:https://help.github.com/articles/fork-a-repo/#fork-an-example-repository
[6]:https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request
[7]:https://invite.gg/kitsu

[travis]:https://flat.badgen.net/travis/hummingbird-me/api-docs/source?label=blueprint
[@wopian]:https://kitsu.io/users/wopian
[@matthewdias]:https://kitsu.io/users/matthewdias
[@nuck]:https://kitsu.io/users/nuck
