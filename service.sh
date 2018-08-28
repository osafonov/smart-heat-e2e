#!/bin/bash

# run e2e tests locally
run_e2e_locally() {
    ./node_modules/.bin/cypress run --env ENVIRONMENT=dev --reporter mocha-multi-reporters --reporter-options configFile=cypress.json
}

# run e2e tests on uat
run_e2e_uat() {
    ./node_modules/.bin/cypress run --env ENVIRONMENT=uat --reporter mocha-multi-reporters --reporter-options configFile=cypress.json
}

# open cypress in interactive mode locally
run_cypress_interactive_locally() {
    ./node_modules/.bin/cypress open
}

case $1 in
    run_cypress_interactive_locally)
        run_cypress_interactive_locally
        ;;
    run_e2e_locally)
        run_e2e_locally
        ;;
    run_e2e_uat)
        run_e2e_uat
        ;;
    *)
        echo "Supported actions: $0 {run_e2e_uat, run_e2e_locally, run_cypress_interactive_locally}"
esac