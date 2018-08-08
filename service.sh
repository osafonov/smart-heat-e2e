#!/bin/bash

# run e2e tests in locally
run_e2e_locally() {
    ./node_modules/.bin/cypress run --env ENVIRONMENT=dev --reporter mocha-multi-reporters --reporter-options configFile=cypress.json
}

# open cypress in interactive mode locally
run_cypress_interactive_locally() {
    ./node_modules/.bin/cypress open
}

case $1 in
    run_e2e_locally)
        run_e2e_locally
        ;;
    *)
        echo "Supported actions: $0 {run_e2e_locally, run_cypress_interactive_locally}"
esac