Back when I graduated in 2023, I decided to create a web application to learn about full-stack development and implement what I had learned in Database Design. I had never written in JavaScript, and wasn't familiar with node.js and React. I knew basic SQL commands and had run them in MS SQL Server, but had never fully designed and created a database. I started watching Code with Mash tutorials and any YouTube videos I could find on how to build a web application and learned as I went. Between job searching and trying to learn all fo these things at once I eventually got stuck. Now, I have studied AWS and earned my Solutions Architect Associate certification. I initially used Vanilla JavaScript to code the Homepage so I will convert that to react components and add the other necessary pages before I launch my MVP on a EC2 instance with my RDS MySQL database.

Database Schema: https://dbdiagram.io/d/Library-Revamp-68114ef81ca52373f5e33fa1

Update 7.11.25:
I've created and loaded my Books, BookEditions, BookCopies, Publisher, Authors, and Subjects tables.
I've gone back to an RDS MySQL database instead of SQL Server just because the licensing costs are not worth it for a self-funded practice project.
I've got my basic front end setup and am starting to combine my Express backend for routing.

Update: 7.15.25:
Register form now actually inserts new user to database. Still need to work out inserting the address pieces into each of their respective table and linking the userId, premise,
streetId, and zipcodeId in User_to_Address table.

Update 7.23.25:
Got Zustand set up so when the user registers, they are navigated to their account page with the data they just entered displayed. Added
login route with bycrypt.compare to authenticate logins. Added JWT but still lots to work out with sessions and authentication

Update 8.11.25:
After I got my register, login, and my-account api calls working I realized that my server/index.js file was starting to get messy and still had lots more to go. ChatGPT recommended that I a routes folder, services folder, and controllers folder to split up the api's, logic, and database querying. I honestly worried that this was where I would dig a big whole and get stuck. Then last Monday my laptop stopped turning on. I took a few days off and bought a new laptop. I did lots of troubleshooting with ChatGPT but did not have it re-code my project, I've spent weeks reworking everything and now register is once again working. It was a struggle but I am pleased that my next few days a coding should be much smoother now that I've worked out this improved architecture.
Additionally, my address tables are correctly being loaded now when a user registers. Their street address is split into premise and street, and their address is split across the States, Localities, Streets, Zipcodes, and User_to_Address tables, where the User_to_Address stores the userId, premise, apartment number, streetId, and the zipcodeId

Update 8.12.25:
I just realized I set unique constraints for Locality name and Street name. I added composite unique constraints because it is possible for there to be multiple "Main Street"s in different city and multiple "Montgomery"s in different states.

Update 8.14.25:
Primitive catalog search is working. Users can search for a book by entering the ISBN13. This is of course the least likely field users would know off the top of their head but is the easiest to build.

Update 8.16.25:
Users can now search the catalog by Author and/or Book Title

Update 8.17.25:
Users can now click the Books ISBN13 link in the Results table to be routed to that Book's own page to view it's details before checking out. The Check Out button now displays a popup detailing the details and rules of checking out the given book.

You can view my inital repo here: https://github.com/mquigs00/LibrarySim
