# Nightwatch For PFI

UI automated testing framework powered by [Node.js] (http://nodejs.org/). 
It uses the [Selenium WebDriver API](https://code.google.com/p/selenium/wiki/JsonWireProtocol).

***

#### [Homepage](http://nightwatchjs.org) | [Developer Guide](http://nightwatchjs.org/guide) | [API Reference](http://nightwatchjs.org/api)

### Intro
Nightwatch is a application developed for PFI to scan certain client content sites for any core changes to their structure and content.
This is based primarily out of a MNO requirement to specifically monitor client: Tekka sites in this manner
Nightwatch is a custom written framework application leveraging the nodeJS language and utilizing the selenium web driver for the core web based checks.
Nightwatch is setup to run pre-written scripts, which when run check client sites for any style changes or client side JS changes as well as detecting PFI specific payment page changes.
Nightwatch will run custom tests against an tekka PFI client site every day at 8:00am. At 9:00am it will correlate the reports ,check for any detected changes and email the PFI team if any are found.



### Run tests
The tests for nightwatch are written using [nodeunit](https://github.com/caolan/nodeunit) as the test framework. To run the nodeunit tests do:
```sh
$ ./nightwatch --config nightwatch.json --group Tekka
```

### Add tests
```sh
add too
$ /home/nightwatch/node_modules/nightwatch/run_scripts/Tekka
```

### Check run results
```sh
$ grep -i "nightwatch" /var/log/cron
```

### Check Run debug Logs
```sh
$ grep -i nightwatch /var/spool/mail/root
```

### Discuss
In addition to [Twitter](https://twitter.com/nightwatchjs), the [Mailing List/Google Group](https://groups.google.com/forum/#!forum/nightwatchjs) is also available for Nightwatch related discussions.

### Setup Guides
Browser specific setup and usage guides along with debugging instructions can be found on the [**Wiki**](https://github.com/beatfactor/nightwatch/wiki).



