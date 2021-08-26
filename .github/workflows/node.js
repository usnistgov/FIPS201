name: Build PDF

on:
  push:
    branches: [ main ]
  pull_request:
    types:
      - opened
      - synchronize
jobs:

  publishPRDraft:
    name: Build Pull Request PDF
    runs-on: ubuntu-latest
    if: github.event_name == 'pull_request' && github.ref != 'refs/heads/main'
    steps:
    - uses: actions/checkout@v2
    - name: Build the artifacts with the docker image
      run: docker-compose -f docker-compose-pdf.yml up
