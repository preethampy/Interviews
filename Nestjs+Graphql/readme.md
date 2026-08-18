# Commands for nestjs
`npm i -g @nestjs/cli` - installs nestjs cli globally
`nest new project-name` - creates new project add `--strict` flag to make it typescript strict feature
`nest g resource module-name` - creates .controller/.resolver(if graphql), .service, .module files for us

# GraphQL with nestjs

```
locco_backend
├─ src
│  └─ users # module
│     ├─ dto # Defines what your API accepts as input (mutations)
│     │  ├─ create-user.input.ts
│     │  └─ update-user.input.ts
│     ├─ entities # Describes what your GraphQL API returns
│     │  └─ user.entity.ts
│     ├─ users.module.ts
│     ├─ users.resolver.ts # Its GraphQL API layer that handles the API requests & responses  
│     └─ users.service.ts
```