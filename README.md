# Autherization REST api's : express-autherization-app

Created Autherization REST API's

## API Reference

### Authorization credentials or Login credentials

```http
POST /api/user/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | normaluser@gmail.com |
| `password` | `string` | normaluser@123 |


### Create New User or Register New User 

```http
POST /api/user/register
```

```
{
}
```

#### Get all posts

```http
  GET /api/posts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.








