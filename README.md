## Description

A restful API built with nestJs framework

## Installation

```bash
$ npm install
$ cp .env.example .env
```
## Migration

copy and run the media.sql file to migrate db

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Query Endpoints

● POST localhost:5000/media
  Create a new media object

● GET localhost:5000/media?page=1&perPage=12
  Fetch a paginated list of existing media objects

● GET localhost:5000/media/:id
  Fetch a single media by id

● GET localhost:5000/media/search?query=xyz
  Search media by name and description

● PATCH localhost:5000/media/:id
  Update an existing media by id. This endpoint should only accept changes to the status field.

● DELETE localhost:5000/media/:id
  Soft delete a media item by id.


## Stay in touch

- Author - [Abdulkadir Abdulrasak](https://www.linkedin.com/in/abdulkadir-5769/)
- LinkedIN - [https://www.linkedin.com/in/abdulkadir-5769/](https://www.linkedin.com/in/abdulkadir-5769/)

## License

Nest is [MIT licensed](LICENSE).
