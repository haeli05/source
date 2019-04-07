//Chat

### Create a new user
  __POST__ */user/new* <br />
  *__Body__*: <br />
    username [String]: username of user, <br />
    password [String]: password of user

### Login a user
  __POST__ */user/login* <br />
  *__Body__*: <br />
  username [String]: username of user, <br />
  password [String]: password of user

### Logout a user
  __POST__ */user/logout* <br />
  *__Body__*: <br />
  _NONE_

### Send a message
  __POST__ */user/message* <br />
  *__Body__*: <br />
  roomID  [Int]: ID of room message is being sent to, <br />
  content [String]: Stringified content of message

### Accept room invite
  __POST__ */user/rooms/accept* <br />
  *__Body__*: <br />
  _NONE_

### Reject room invite
  __POST__ */user/rooms/reject* <br />
  *__Body__*: <br />
  _NONE_

### Get all rooms and messages for a given user
  __GET__ */user/message* <br />
  *__Body__*: <br />
  _NONE_

### Get all rooms a user is in
  __GET__ */user/rooms* <br />
  *__Body__*: <br />
  _NONE_

### Create New Room
  __POST__ */user/rooms/* <br />
  *__Body__*: <br />
  name     [String] : Name of chat room, <br />
  alias    [String] : Alias of room, <br />
  invitees [ [String] ] : Array usernames to invite into room,

### Direct Message
  __POST__ */user/dm* <br />
  *__Body__*: <br />
  name    [String] : Username of user to direct message, <br />
  content [String] : Content of message to send to user
