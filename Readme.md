# Sample MF

This repo consists of three projects(MFE's). These projects are run and built separately. They can be uploaded to their own repository.

## Micro Front Ends
1. [**mf-host**](./mf-host) This is the host or the stitching layer. Consumes mf-consultation
2. [**mf-bidi**](./mf-bidi) This MFE will be a bi-directional host module. Exposes itself and consumes mf-components
3. [**mf-components**](./mf-components) This MFE will act as the component library for Bahmni. It will have components from Carbon along with custom components built for Bahmni use
  
## Setup Steps
We will be able to set the project for development where each MFE will run on its own port 

### Setup Steps
1. Install nvm
2. Install node
3. Install [yarn](https://yarnpkg.com/en/docs/install)

### Development
1. Navigate to the sub folders (mf-host, mf-consultation and mf-components) and run `yarn`
2. Run `yarn start`. Note that dependent MF's server should already be started while starting. 
3. You will see all three MFE's running on three ports - http://localhost:9000 http://localhost:9001 http://localhost:9002
