FROM jifalops/node:latest

# Setup playwright
RUN sudo npx playwright install-deps &&\
  npx playwright install

# Install additional packages
RUN sudo apt-get update && sudo apt-get install -y --no-install-recommends \
  trash-cli
