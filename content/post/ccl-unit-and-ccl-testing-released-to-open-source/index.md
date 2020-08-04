---
title: "CCL Unit and CCL Testing released to open source"
authors: ["Fred Eckertson"]
date: 2019-08-09
tags: [engineering, oss]
---

We are pleased to announce the release of [CCL Unit](https://github.com/cerner/cclunit-framework) and [CCL Testing](https://github.com/cerner/ccl-testing) as open source code projects,
as well as the release of the CCL Testing plugin artifacts to [Maven Central](https://repo.maven.apache.org/maven2/com/cerner/ccl).  

Cerner Command Language (CCL) is a database query and scripting language used with Cerner Millennium databases. CCL Unit is a unit testing framework for CCL written in CCL. The CCL Testing plugins generate reports for viewing the results of CCL Unit tests and static analyses of CCL programs and for generating code documentation from comments in the source code for CCL programs. These tools were created to help developers improve the quality of their CCL programs.

We have released the code for these tools to open source to facilitate frictionless contributions of enhancements, corrections, and documentation improvements by the CCL developer community at large and to allow CCL developers to opt in for automatic notifications about version updates by subscribing to the CCL Unit and CCL Testing source repositories. We have released the CCL Testing plugins to Maven Central to eliminate the need to configure the location and access credentials for a proprietary plugin repository in order to use them.

We invite you to visit the change log of each repository to see the many improvements made since the original releases. Most notably:

- CCL Unit tests can now be executed directly from a CCL command prompt. A Maven installation is not required.
- CCL Unit now sports a mocking framework which makes it a snap to create and access mock database tables seeded with test specific data without affecting the integrity of any existing database data.
