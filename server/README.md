# API Documentation

## Routes
- GET
  - /tasks
    - query params:
      - user: user_email OR
      - group: group_id
  - /groups
    - query params:
      - email: user's email
  - /users
    - query params:
      - email: user's email
- POSTS
  - /tasks
    - body
      - group: group id
      - initial_assignee: initial user's email
      - freq: int, minutes to remind
      - is_freq: bool, true for frequency based
  - /groups
    - body
      - group_name: group name
      - initial_user: initial user's email

  - /groups/add
    - body
      - group_id: group id
      - new_user: new user's email
  - /users
    - body
      - email: user's email
      - phone: 10 digit phone num as a string w no spaces
