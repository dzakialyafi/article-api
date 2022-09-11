# Articles API Test Project

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/v6/commands/npm-install) to install dependencies from `package.json` by running the command below on your terminal app:

```bash
npm install
```

## Usage

to start the server, please run this command below on your terminal app:

```
npm run start
```

## How to use the Article API

Before you start to make a request, please download and install a [Postman](https://www.postman.com/downloads/) app.

1. `GET` request for all articles

Please ensure the request type of `GET` and type the request link into your browser or Postman app as below:

```
http://localhost:5000/articles
```

2. `POST` request to submit a new article

Please ensure the request type of `POST` and type the request link into your Postman app as below:

```
http://localhost:5000/articles
```

Then, switch to your `body` tab and choose `raw` data as `JSON`.

Please type in inside the window as the example below:

```
{
    "title": "Insert Article title here",
    "date": "YYYY-MM-DD",
    "body": "Insert Article content here",
    "tags": [
        "Insert tags here",
        "Insert tags here",
        "Insert tags here"
    ]
}
```

3. `GET` request for an article by its ID

Please ensure the request type of `GET` and type the request link into your browser or Postman app as below:

```
http://localhost:5000/articles/[Insert_ID_Here]
```

4. `GET` request for tags of all available articles

Please ensure the request type of `GET` and type the request link into your browser or Postman app as below:

```
http://localhost:5000/tags/[tags_name]/[YYYYMMDD]
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)