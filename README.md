# Phone Book App

This app was create with the following tech stack:
- React Front End
- C# .NET 6 Core Web API
- SQL Database using Entity Framework Core 

Code editors used:
- Visual Studio Code - UI
- Visual Studio 2022 - API

The following instrucions will be for the editors used above.

## Getting Started

First clone this repository. 

You will now have two folders in the directory you cloned the project into named PhoneBookApp.API and PhoneBookApp.UI.

### API
Open **PhoneBookApp.API.sln** found in the **PhoneBookApp.API** folder using visual studio 2022.

You will need to change the **DefaultConnection** under **ConnectionStrings** in the appsettings.json file to your local database server.

![img1](https://user-images.githubusercontent.com/42215418/197880100-62bc22f6-6679-4878-bb38-1be80737b0b9.png)


Next you will need to run the migration to create the database. To do this you will need to open the package manager console. Open Tools > NuGet Package Manager > Package Manager Console.
You should now see the following console at the bottom of visual studio:

![img2](https://user-images.githubusercontent.com/42215418/197880135-fa082c83-d67f-4fc3-8c25-1346d38a096a.png)


At the prompt (PM>) enter the following command
### `dotnet ef database update`

When this has complete if you check your local database there should be a database called PhoneBookDB and a table called dbo.Contacts on this database.

You are now ready to run the API just click the start button in Visual Studio.

![img3](https://user-images.githubusercontent.com/42215418/197880164-dc563fb8-8b57-4612-af35-1fe8ad4a88b5.png)


This will open the swagger doc in your browser. feel free to test the api functionality here.

![img4](https://user-images.githubusercontent.com/42215418/197880183-e03a79cf-0754-4bd7-be86-ce3767920a7b.png)


You are now ready to setup the front end.

### UI
Open the **PhoneBookApp.API** folder in visual studio code.
In visual studio code open the terminal. Terminal > New Terminal

![img5](https://user-images.githubusercontent.com/42215418/197880223-b0770dcf-9667-4cbc-8eda-0c4953a8775c.png)


This will open the terminal window at the foot of visual studio code and your current directory should already be **PhoneBookApp.API**. If not you will need to navigate to this folder.
![img6](https://user-images.githubusercontent.com/42215418/197880245-abbc3ecd-5b46-48b7-9890-80f27f558872.png)


From the command prompt run the following command

### `npm install`

This will install the node packges required for the app. When this is complete you are ready to run the app with the following command

### `npm start`

The Phone Book App should now open in your default browser. If it doesn't open automatically enter the following url into your browser to access:

http://localhost:3000

![img7](https://user-images.githubusercontent.com/42215418/197880273-8590bf31-f6f2-4f45-82b8-48a252effd36.png)


You can now add some contacts to the phone app!
