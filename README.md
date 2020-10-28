# Movies Project

#### Перед запуском проекта:

1. Создать в корне проекта (на одном уровне с package.json) файл с именем `.env`
2. Добавить в файл следующий код:

```
# Debug
DEBUG='server:*,router:*,storage,db'

# Server
PORT=3000

# DB
DB_NAME='movies-db'
DB_URL='localhost'
DB_PORT=27017

# App
REACT_APP_PORT=3002
REACT_APP_API_URL='http://localhost'
REACT_APP_PATH='/api/movies'
```

**Обратите внимание!**

1. DB_NAME → имя базы данных выбираем следующее → никнейм
2. DB_URL → DNS имя, localhost или IP для подключения к базе данных
3. DB_PORT → порт для подключения к базе данных
