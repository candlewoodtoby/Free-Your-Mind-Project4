# Free-Your-Mind-Project4

Final Project#4 - WDI

Concept:
To build a productivity app based on the principles of David Allen's Getting Things Done.

Issues:
1. Issue keeping data entered by user to persist while routing from one controller/view to another controller/view unless db:migration executed first.
I do not want data migrated to db until user works through app's work-flow process first.
Resolved to keep user entered data in front end via angular's $scope and then db migrate.

2. Issue - I wrote test CRUD operations for commitmentController without associations.

3. completed preliminary setup of backend API routes for action, commitment, user, pages.

4. completed preliminary db CRUD operations for action, commitment, and user.

5. considering nested resources for route paths
