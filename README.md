
## Getting Started

### Step 1: Install dependencies

Navigate to the project directory and install all the required dependencies:

```bash
cd travelmate-api
npm run install
```


### Step 2: Run the development server
- copy env.example to .env run 
```bash
cp .env.example .env
# up database run
docker-compose up
# up application on dev mode runs
npm run start:dev
```

## Folder Structure
- core
    - for initialize core modules that use as a global such as database config
- modules
    - for custom module such as user, product etc
- common
    - for code base that use as a global such as global enum, global dto
- migrations
    - for database migrations
    - Automatically generate schema from entities run
      ```sh
      npm run migration:generate --name={migration name} 
        #for example
        npm run migration:generate --name=generate-schema
      ```
    - to create a new migration run 
        ```sh 
        npm run migration:create --name={migration name} 
        #for example
        npm run migration:create --name=create-user-table 
        ```
    - to apply to database stop docker and run 
        ```sh
        docker-compose up
        ```