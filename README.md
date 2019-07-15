# source
## Build Anything with a Post

source connects developers to projects and tasks.


Interested in contributing? Look up our TODOs on https://sourcenetwork.io


#Dispute Resolution
--coming soon--

## Contact
Twitter: @source_platform

Email: source@sourcenetwork.io

Telegram: https://t.me/joinchat/EbiqAxL2g2baSz4fulFeHg

#Installation and Running
1. Clone this repository
2. `cd` into FrontEnd and BackEnd respectively.
3. `npm i`
4. `gulp` (for FrontEnd SaSS)
5. `npm start`

# How to Contribute
1. Reach out to us if you want to build a component.
2. Fork a branch.
3. Submit a PR.

# Contribution Guidelines
We aim to maintain a civil and productive community that best serves our projects and users.


### For Project Managers:
1. Specify the scope of tasks, and rewards associated clearly
2. Respond to interested parties clearly. Be respectful of their time.
3. Follow up on work in progress to clarify performative standards that need to be met

### For Developers:
1. Discuss the scope of your work with the project manager
2. Start your own branch and complete the task while meeting performative standards agreed upon prior
3. Submit a Pull Request when finished

#Documentation

##Table of Contents:
- Components
- Material-UI
- WELCOME
- Global
- Board
  - Board.js
  - Column.js
  - KanbanCard.js

### Board.js
<Board isEditable={boolean} data={}/>  

####isEditable
is true for Admin and Project Managers who can edit the board. False otherwise

####data
Board data for columns and cards.

Specification:
data = {
  boardTitle: "Board Title",
  admins: ["Username"], //Users who can edit
  column
}
