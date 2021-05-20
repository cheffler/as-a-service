# As A Service

A project to explore and use "As A Service" products.

> Not abbreviating "As A Service" as my dyslexia will make it all to easy for me to switch an "a" with a "s".

## Motivation

I want to rediscover the growing ecosystem of "As A Service" products that help products get up and running quickly. By doing this I want to:

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

## Why "As A Service"

I believe the purpose of "As A Service" concepts are well understood throughout the technology industry; nonetheless, here is my "2 cents" on the subject.

The advent of cloud computing has provided consistent, easy and accessible machines (virtual and physical). This is the lowest layer of "As A Service" offerings, Infrastructure (IaaS). IaaS offers all the benefits of flexible low cost computers/servers without the massive overheads of paying for the physical aspects, e.g. specialist employees, facilities, hardware, cables and more. A uniform approach to the hardware and software allows those offering IaaS to standardise everything making the management much easier. From a basic economic point of view, the economies of scale and standardisation create a cheaper setup; similar to mass-manufacturing.

With the example of IaaS and the benefits it provides, other "As A Service" levels came into existence, building up to Software as a Service (SaaS). All the levels provide the same(ish) advantages of reduced cost, speed to market, simplicity and availability. With the right support, architecture and initial outlay; I believe a very small number of people can build and maintain a large product/platform that would have required a massive IT department in the past. This allows a company to focus on their actual product and delivering it to customers.

There are trade-offs when it comes to these sorts of offerings. We will relinquish control, power and (at times) flexibility for what we can get from an "As A Service" offering. However, we have been doing this sort of trade off for years without really knowing it. Since the advent of the GUI (e.g. Windows), we have traded the absolute power of the command line and terminal for the simplicity and speed. We would never consider having our entire company work solely on the terminal, typing commands to write documents and create presentations.

Something I often consider when designing an platform flexibility, or avoiding *lock-in* to a provider of a service. There is nothing wrong with saying "I will use AWS (for example) completely, and consume all their services". This is great and allows you to move forward very quickly using large number of standards and known patterns. However, if AWS becomes too expensive, you may face large development bills to move on. As a developer, I also prefer the challenge of developing something a little more dynamic (transportable), attempting to follow the points of the 12-factor[^1] app as much as possible.

## Target

I will be building a platform that has protected parts (need to login) and provides custom sub-domains for groupings of users. Once logged in, users will be able to carry out some actions, create data and more. The full detail of what the platform will do will be decided later.

I will be using a micro-services pattern for the backend written in NodeJS to begin with. For some services I may explore Python, Go and perhaps host using Lambda options. For initial hosting, I will aim to use PaaS (Platform) to minimise the overhead, e.g. no sysadmin work if I can avoid it. As authentication is the first functional hurdle, we will look for an "As A Service" offering.

As I am a developer and part of my objectives are to explore the UI technologies available, I will draw the line of "As A Service" at the UI. There are many tools out there to create amazing websites from templates, these are incredible, but for me take some of the fun out. However, I will use what I can to speed up the boring parts of this work, a different level of "As A Service". Similar for the backend, we will use basic frameworks, bringing some tools to help accelerate parts.

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

[^1]: [12 Factor](https://12factor.net/)

- Walking Skeleton
- Pizza As A Service
