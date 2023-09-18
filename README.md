# Next Server Actions Counter Example
Counter app implemented using Next.js Server Actions feature.

## Setup
Create `compose.env.yml` file.

``` yaml
services:

  web:
    environment:
      NEXTAUTH_SECRET: ...
      GITHUB_OAUTH_APP_CLIENT_ID: ...
      GITHUB_OAUTH_APP_CLIENT_SECRET: ...
```

## Run dev server
``` console
docker compose up
```

## Environment Variables
TODO