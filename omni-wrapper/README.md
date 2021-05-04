# Omni wrapper

This is a root config for a single spa application. This root config loads one and only one microfrontend defined by the environment variable `MAIN_MFE`.

This wrapper is meant to be reused with different environment variables.

# Environment variables

- `MAIN_MFE` (required):

  Controls which microfrontend is the entrypoint of this application. Usually will be something like 'admin-portal', 'supplier-portal', 'example-portal''

- `IMPORT_MAP_URL` (required):

  Defines where to look up for the import map. The import map is a json file that contains the address of each application that will be loaded by the omni wrapper. Every time a new frontend is created, its adress must be added to the import map.
