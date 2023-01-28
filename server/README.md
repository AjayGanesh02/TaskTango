# API Documentation

## Routes
- GET
  - tasks
    - query params:
      - user: user_email
      - group: group_id
  - groups
    - query params:
      - user_email
- POSTS
  - tasks
    - body
      - group: group id
      - initial_assignee: initial user's email
  - groups
    - body
      - group_name: group name
      - initial_user: initial user's email