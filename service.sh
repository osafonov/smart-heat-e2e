#!/bin/bash

# run e2e tests in locally
run_e2e_locally() {
    ./node_modules/.bin/cypress open --env ENVIRONMENT=dev
}

case $1 in
    run_e2e_locally)
        run_e2e_locally
        ;;
    *)
        echo "Supported actions: $0 {run_e2e_locally}"
esac