# API Docs [![Travis]][2]

Kitsu is a modern anime discovery platform that helps you track the
anime you're watching, discover new anime and socialize with other
fans.

---
**<p align="center">This is our [api docs] repository.<br />Check out the [meta], [client] and [server] repositories.</p>**

[meta]:https://github.com/hummingbird-me/hummingbird
[client]:https://github.com/hummingbird-me/hummingbird-client
[server]:https://github.com/hummingbird-me/hummingbird-server
[api docs]:http://docs.kitsu.apiary.io

---

## Contributing

The documentation is written with [API Blueprint][3] and [MSON][4].
Trivial changes can be added using GitHub's built-in editor. For
bigger changes it is advised to follow the steps below.

### Requirements

- [git](https://git-scm.com) >2.0.0
- [node.js](https://nodejs.org) >7.0.0
- [yarn](https://yarnpkg.com) >0.21.0

### Development

1. [Fork the repo][5]

2. Clone the repo
(`git clone https://github.com/{yourusername}/api-docs.git`)

3. Create a new branch (`git checkout -b improve-docs`)

4. Install dependencies (`yarn`)

5. Make the appropriate changes in the source files

6. Check your changes for issues (`yarn test`)

7. Commit your changes (`git commit -am 'feat: improve docs'`)

8. Push to your branch (`git push origin improve-docs`)

9. [Create a Pull Request][6]

If you have any questions, you can join our Slack by sending an
email to josh@kitsu.io or pinging [@wopian]
[@matthewdias] or [@nuck] on Kitsu.

[0]:https://github.com/hummingbird-me/hummingbird-server
[1]:https://github.com/hummingbird-me/hummingbird-client
[2]:https://travis-ci.org/hummingbird-me/api-docs
[3]:https://apiblueprint.org
[4]:https://github.com/apiaryio/mson
[5]:https://help.github.com/articles/fork-a-repo/#fork-an-example-repository
[6]:https://help.github.com/articles/creating-a-pull-request/#creating-the-pull-request

[travis]:https://img.shields.io/travis/hummingbird-me/api-docs/source.svg?style=flat-square&label=blueprint
[@wopian]:https://kitsu.io/users/wopian
[@matthewdias]:https://kitsu.io/users/matthewdias
[@nuck]:https://kitsu.io/users/nuck
