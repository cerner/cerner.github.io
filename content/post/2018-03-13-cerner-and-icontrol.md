---
title: "Cerner and iControl"
authors: []
author:  Jerrod Carpenter
date: 2018-03-13
tags: [engineering, big-ip, f5]
---

At Cerner, we manage our own infrastructure and a big part of that is managing F5 load balancers. If you are a Ruby developer or a network engineer and regularly work with F5s, then I have good news! I've created a gem that abstracts iControl's REST API. It makes working with the API easy to understand and eases the effort required to automate changes across many devices.

```ruby
api = IcontrolRest::Client.new(host: '1.2.3.4', user: 'user', pass: 'pass', verify_cert: false)
=> <Icontrol::Client:0x007fb953ab7750 @options={ ... }>
```

After logging in, one can build a query via an instance method:
```ruby
api.get_sys_dns
# returns an object like this:
=> { "kind"        => "tm:sys:dns:dnsstate",
     "selfLink"    => "https://localhost/mgmt/tm/sys/dns?ver=11.5.4",
     "description" => "configured-by-dhcp",
     "nameServers" => ["1.2.3.72", "1.2.3.73"],
     "search"      => ["domain.com"]
   }
```

The gem builds REST queries given a method delimited by underscores. The first word is the REST method and the following words are the path you'd like to send your request to.

For example, if you'd like to get the version of the F5, given this [iControl REST API doc](https://devcentral.f5.com/d/icontrol-rest-api-reference-version-120)

You'd call a method that looks like this:

```ruby
api.get_sys_version
# returns an object like this:
=> { "kind" => "tm:sys:version:versionstats",
     "selfLink" => "https://localhost/mgmt/tm/sys/version?ver=12.1.2",
     "entries" => {
      "https://localhost/mgmt/tm/sys/version/0" => {
        "nestedStats" => {
          "entries" => {
            "Build"   => { "description"=>"0.0.249" },
            "Date"    => { "description"=>"Wed Nov 30 16:04:00 PST 2016" },
            "Edition" => { "description"=>"Final" },
            "Product" => { "description"=>"BIG-IP" },
            "Title"   => { "description"=>"Main Package" },
            "Version" => { "description"=>"12.1.2" }
          }
        }
      }
    }
  }
```

So in practice you could put all this together to do something like audit the versions of F5s in a collection:
```ruby
['hostname1', 'hostname2', 'hostname3'].each do |host|
  api = IcontrolRest::Client.new(host: host, user: 'user', pass: 'pass', verify_cert: false)
  result = api.get_sys_version
  version = result['entries'][‘https://localhost/mgmt/tm/sys/version/0’]['nestedStats']['entries']['Version']['description']
  puts "host: #{host} | version: #{version}" unless version == ‘12.0.0’
end
```

This would print out the hostname and version of any F5s that aren't on version 12.0.0. This is just one example, I encourage you to look through the iControl REST API docs to get a feeling for what's really possible.
