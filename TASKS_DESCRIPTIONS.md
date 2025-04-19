# GYK Tasks

**Note:** This file contains a subset of the task descriptions provided during live sessions. Not all task descriptions were saved into the file.

## NodeJS Tasks

1. Create a Node.js project using npm.
2. Check package.json to ensure necessary parameters for using ESM.
3. Create a helper module utils.
4. In the utils module, create and export a function that shows the platform, number of CPUs, and total memory (totalmem) using the os API.
5. Create a server module.
6. Using the http API, create a server that returns formatted system information obtained from utils.

## TypeScript Tasks

### Main Tasks

1. Create an enum Category, which defines values like Food, Electronics, Clothing.
2. Create an interface Product, which should have id, name, price, and category.
3. Write a class StoreSystem, which manages a list of products:
   1. Method addProduct(product: Product), which adds a new product to the list.
   2. Method getProductsByCategory(category: Category), which returns all products from the specified category.
   3. Method removeProduct(id: number), which removes a product by id.
   4. Method displayProducts(), which displays all added products.
4. Use Generics to create a function searchByCriteria<T>, which filters products based on the provided criteria (given as an anonymous function), returning an array of type T.
5. Demonstrate "Union types", allowing a product to have both a discount in percentage (string) and a fixed price reduction (number).

### Extra Tasks

1. Add a new method in the class to update a product by id.
2. Allow a product to be assigned multiple categories using union types.

## Angular Tasks

### Task #1 - Personal Task Tracker

1. Add a new task to the list.
2. View a dynamically rendered task list.
3. Show a message when there are no tasks.

### Task #2 - Task Creation Time

1. Change the task from text to an object containing text and date fields.
2. Fill the date field using the Date object. Its content will be the time of the button click.
3. Inside TaskComponent, use DatePipe and display each task's time in shortTime format.
4. (Extra): Generate a new pipe that, using toLocaleTimeString with options, returns a localized date for Lithuania ('lt-lt'). Use { weekday: "long", year: "numeric", month: "long", day: "numeric" } as parameters.

### Task #3 - Move Tasks to a Service

1. Add a tasks parameter, which will be accessible externally (expose the task list).
2. Create an addTask method, which allows adding a new task. Tasks should automatically get a unique identifier (id) when added.
3. Create a getTaskById method, which will return a specific task by its id.

### Task #4 - Create Page Structures

1. Home page (“” route) - Create a home page with a greeting. This page may contain a welcome message, information about the task management system, or a link to the task list.
2. Task list page (“tasks” route) - Create a page displaying a list of all tasks. Each task should have a link leading to its individual page. On the page, fetch task info from TasksService.
3. Individual task page (“tasks/:id” route) - Create a dynamic page that displays information about a specific task. Use the ActivatedRoute Injectable. Get the task id via activatedRoute.snapshot.params['id'].
4. Navigation bar - Add a navigation menu at the top, allowing the user to easily switch between pages. The navigation should include at least these links:
   - Home (“Home”)
   - Task list (“Tasks”)

### Task #5 - Use json-server for Storing Tasks

1. npm install json-server - Install the json-server package.
2. Create a db.json file:

```json
{
  "tasks": []
}
```

3. After running npx json-server and accessing http://localhost:3000/tasks, you should now receive tasks from the server.
4. Use HttpClient and replace the local task array with HTTP requests.
5. Change TasksService's tasks parameter into a function that returns all tasks by calling GET http://localhost:3000/tasks.
6. Modify addTask to make a POST request to http://localhost:3000/tasks.
7. Modify getTaskById to fetch a task using GET http://localhost:3000/tasks/{id}.

### Task #6 - HttpClient + Subject

1. Modify TaskService so that inside the component you can write this.tasks$ = this.#service.tasks$ and always get an updated task list.
2. Use Subject inside the service - update its content with the getTasks method.
3. Use the switchMap pipeable operator to call getTasks after adding a new task in the service.
4. (Optional) Create a new service that fetches data from https://randomuser.me/api, and use combineLatest to add the "task creator" to each task.

### Task #7 - Signalify

1. Change @Input to input.
2. Change all Observable usages to signal (except for HttpClient usage within the service).
3. (Optional): Use resource and fetch instead of HttpClient.
