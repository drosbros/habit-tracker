### Requirements

- Python 3.11
- Docker

### Installation and running

Firstly, create a `.env` file following the `.env.example` and ask a colleague for the values.

Then run:

- `poetry install`
- `pre-commit install`
- `docker compose up -d`
- `poetry run ./manage.py runserver`

To stop containers from working use the following command:

- `docker compose down`

If you want to clear the volumes as well, add `-v` to the command above
