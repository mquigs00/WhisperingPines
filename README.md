Back when I graduated in 2023, I decided to create a web application to learn about full-stack development and implement what I had learned in Database Design. I had never written in JavaScript, and wasn't familiar with node.js and React. I knew basic SQL commands and had run them in MS SQL Server, but had never fully designed and created a database. I started watching Code with Mash tutorials and any YouTube videos I could find on how to build a web application and learned as I went. Between job searching and trying to learn all fo these things at once I eventually got stuck. Now, I have studied AWS and earned my Solutions Architect Associate certification. I initially used Vanilla JavaScript to code the Homepage so I will convert that to react components and add the other necessary pages before I launch my MVP on a EC2 instance with my RDS MySQL database.

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

You can view my inital repo here: https://github.com/mquigs00/LibrarySim
