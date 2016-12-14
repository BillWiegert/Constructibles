# Schema Information

## users
column name|data type|details
---|---|---
id|integer|not null, primary key
username|string|not null, indexed, unique
password_digest|string|not null
session_token|string|not null, indexed, unique

## projects
column name|data type|details
---|---|---
id|integer|not null, primary key
title|string|not null
cover_image_url|string|not null
intro|string|not null
keywords|string|not null, array: true, default: []
user_id|integer|not null, foreign key (references users), indexed
category_id|integer|foreign key (references categories), indexed

## comments
column name|data type|details
---|---|---
id|integer|not null, primary key
content|string|not null
user_id|integer|not null, foreign key (references users), indexed
project_id|integer|not null, foreign key (references projects), indexed

## steps
column name|data type|details
---|---|---
id|integer|not null, primary key
title|string|not null
body|text|not null
image_url|string|allow null
order|integer|not null
project_id|integer|not null, foreign key (references projects)

## categories
column name|data type|details
---|---|---
id|integer|not null, primary key
title|string|not null
