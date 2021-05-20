# Components & Hosting

A concept that I really like from the Agile/DevOps world, is the *"Walking Skeleton"*. Simply (and for my purposes here), before you do much hard work, get your process in place to publish a change to production on code commit.

In this part, I will define the basics of the components of the platform and build automation to publish changes to a live production like environment. To do this I will:

- Establish a mono-repo
- List and choose a hosting platform
- Configure Github CI (CircleCI) to push changes
- Create "hello world" components

The components are:

- UI
- Authentication service
