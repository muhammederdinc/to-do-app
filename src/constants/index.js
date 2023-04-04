export const TodoStatus = Object.freeze({
  TODO: 'todo',
  COMPLETED: 'completed'
});

export const MenuItems = Object.freeze([
  {
    text: 'Home Page',
    value: 'home',
    path: '/'
  },
  {
    text: 'To-Do List',
    value: 'list',
    path: '/to-do-list'
  }
]);

export const ToDoListTableHeaders = Object.freeze([
  { title: '', key: 'statusAction', sortable: false },
  { title: 'ID', key: 'id', sortable: false },
  { title: 'Title', key: 'title', sortable: false },
  { title: 'End Date', key: 'endDate' },
  { title: 'Status', key: 'state' },
  { title: 'Actions', key: 'actions', sortable: false },
]);
