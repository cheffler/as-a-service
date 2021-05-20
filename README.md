# As A Service

A project to explore and use *"as a Service"* products.

> Not abbreviating *"as a Service"* as my dyslexia will make it all to easy for me to switch an "a" with a "s".

## Motivation

I want to rediscover the growing ecosystem of *"as a Service"* products that help products get up and running quickly. By doing this I want to:

- build starter packages/setups for the key technologies (code & frameworks) I use frequently
- explore new languages
- review cloud native concepts
- accelerate ideas to the fun bit, skipping the bootstrapping
- **not** build yet another framework/accelerator
- apply DevOps/Lean/Extreme Programming concepts
- write a blog or more

## Parts

Below are the stages/parts I go through to build the platform, included are sub-sections or asides where I talk about some thinking behind my choices. Bits that don't quite fit the main topic, but help.

- [Hosting](docs/parts/1_hosting.md)

## Why *"as a Service"*

I believe the purpose of *"as a Service"* concepts are well understood throughout the technology industry; nonetheless, here is my "2 cents" on the subject. You may also want to have a look for the idea known as "Pizza as a Service", it shows a good layering of *"as a Service"* offerings.

The advent of cloud computing has provided consistent, easy and accessible machines (virtual and physical). This is the lowest layer of *"as a Service"* offerings, Infrastructure (IaaS). IaaS offers all the benefits of flexible low cost computers/servers without the massive overheads of paying for the physical aspects, e.g. specialist employees, facilities, hardware, cables and more. A uniform approach to the hardware and software allows those offering IaaS to standardise everything making the management much easier. From a basic economic point of view, the economies of scale and standardisation create a cheaper setup; similar to mass-manufacturing.

With the example of IaaS and the benefits it provides, other *"as a Service"* levels came into existence, building up to Software as a Service (SaaS). All the levels provide the same(ish) advantages of reduced cost, speed to market, simplicity and availability. With the right support, architecture and initial outlay; I believe a very small number of people can build and maintain a large product/platform that would have required a massive IT department in the past. This allows a company to focus on their actual product and delivering it to customers.

There are trade-offs when it comes to these sorts of offerings. We will relinquish control, power and (at times) flexibility for what we can get from an *"as a Service"* offering. However, we have been doing this sort of trade off for years without really knowing it. Since the advent of the GUI (e.g. Windows), we have traded the absolute power of the command line and terminal for the simplicity and speed. We would never consider having our entire company work solely on the terminal, typing commands to write documents and create presentations.

Something I often consider when designing a platform is flexibility, or avoiding *lock-in* to a vendor. There is nothing wrong with saying "I will use AWS (for example) completely, and consume all their services". This is great and allows you to move forward very quickly using large number of services and known patterns. However, if AWS becomes too expensive (as an example), you may face large development costs to move to another vendor. As a developer, I also prefer the challenge of developing something a little more dynamic (transportable), attempting to follow the points of the [12 Factor App][1] as much as possible.

A lot of the best parts of *"as a Service"* are backed up by DevOps and automation. I wont dive into this here, but will be a key part of what we build. Do the hard work of automation upfront, and your life will be much easier.

## Target

I will be building a platform that has protected parts (need to login) and provides custom sub-domains for groupings of users. Once logged in, users will be able to carry out some actions, create data and more. The full detail of what the platform will do, I  will decided later; something with complex data will be more fun.

I will be using a micro-services pattern for the backend written in NodeJS, to begin with. For some services I may explore Python, Go and perhaps host using Lambda options. For initial hosting, I will aim to use PaaS (Platform) to minimise the overhead, e.g. no sysadmin work if I can avoid it. As authentication is the first functional hurdle, we will look for an *"as a Service"* offering.

As a developer and part of my objectives are to explore the UI technologies available, I will draw the line of *"as a Service"* at the UI. There are many tools out there to create amazing websites from templates. These are really incredible; but for me, they take some of the fun out development. An example of one such tool is [DivJoy](2), this looks amazing and I think you would get down to the code eventually.

I will use what I can to speed up the boring parts of this work, using different levels of *"as a Service"*. I will use basic frameworks, bringing in some tools to help accelerate parts.

## Terminology

|      Word      | Meaning                                             |
| :------------: | --------------------------------------------------- |
|    platform    | refers to everything                                |
|    service     | an isolated backend component of the platform       |
|       UI       | a website or other tool used to interact with users |
| authentication | who you are                                         |
| authorisation  | what are you allowed to do                          |
|     authn      | short for authentication                            |
|     authz      | short for authorisation                             |

## References

[1]: https://12factor.net/
[2]: https://divjoy.com/
