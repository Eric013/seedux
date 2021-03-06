// Action type constants as strings for testUI1
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

const undoAction = () => {
  return {
    type: 'UNDO'
  }
}

const redoAction = () => {
  return {
    type: 'REDO'
  }
}

// Action type constants declared as variables for testUI2
const ADD_TODO = 'ADD_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const TOGGLE_TODO = 'TOGGLE_TODO';
const UNDO = 'UNDO';
const REDO = 'REDO';

const addTodo2 = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

const setVisibilityFilter2 = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

const toggleTodo2 = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

const undoAction2 = () => {
  return {
    type: UNDO
  }
}

const redoAction2 = () => {
  return {
    type: REDO
  }
}

// Action type constancts as object properties for testUI3
const types = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
  UNDO: 'UNDO',
  REDO: 'REDO'
}

const addTodo3 = (text) => {
  return {
    type: types.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

const setVisibilityFilter3 = (filter) => {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  }
}

const toggleTodo3 = (id) => {
  return {
    type: types.TOGGLE_TODO,
    id
  }
}

const undoAction3 = () => {
  return {
    type: types.UNDO
  }
}

const redoAction3 = () => {
  return {
    type: types.REDO
  }
}

const constants = {
  ADD_TODO: 'ADD_TODO',
  SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO: 'TOGGLE_TODO',
  UNDO: 'UNDO',
  REDO: 'REDO'
}

const addTodo4 = (text) => {
  return {
    type: constants.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

const setVisibilityFilter4 = (filter) => {
  return {
    type: constants.SET_VISIBILITY_FILTER,
    filter
  }
}

const toggleTodo4 = (id) => {
  return {
    type: constants.TOGGLE_TODO,
    id
  }
}

const undoAction4 = () => {
  return {
    type: constants.UNDO
  }
}

const redoAction4 = () => {
  return {
    type: constants.REDO
  }
}

function moveCard(lastX, lastY, nextX, nextY) {
 return (dispatch) => {
   dispatch({ type: MOVE_CARD, lastX, lastY, nextX, nextY });
 };
}


// Simulates code injected into Redux's native bindActionCreators function
function seeduxBindActionCreatorsLogic(actionCreators, dispatch) {
  var keys = Object.keys(actionCreators);
  let seeduxObj = {};

    if (keys) {
      keys.forEach(ac => {
        if (actionCreators[ac]) { seeduxObj[ac] = actionCreators[ac].toString(); };
      });
    }
  return seeduxObj;
}

const testActionCreators = seeduxBindActionCreatorsLogic({addTodo, setVisibilityFilter, toggleTodo, undoAction, redoAction});
const testActionCreators2 = seeduxBindActionCreatorsLogic({addTodo2, setVisibilityFilter2, toggleTodo2, undoAction2, redoAction2});
const testActionCreators3 = seeduxBindActionCreatorsLogic({addTodo3, setVisibilityFilter3, toggleTodo3, undoAction3, redoAction3});
const testActionCreators4 = seeduxBindActionCreatorsLogic({addTodo4, setVisibilityFilter4, toggleTodo4, undoAction4, redoAction4});
const testActionCreators5 = seeduxBindActionCreatorsLogic({moveCard})

const answerActionCreators = {
  'name': 'Action Creators',
  'children': [
    {
      'name': 'addTodo',
      'children': [
        {
          'name': 'ADD_TODO'
        }
      ]
    },
    {
      'name': 'setVisibilityFilter',
      'children': [
        {
          'name': 'SET_VISIBILITY_FILTER'
        }
      ]
    },
    {
      'name': 'toggleTodo',
      'children': [
        {
          'name': 'TOGGLE_TODO'
        }
      ]
    },
    {
      'name': 'undoAction',
      'children': [
        {
          'name': 'UNDO'
        }
      ]
    },
    {
      'name': 'redoAction',
      'children': [
        {
          'name': 'REDO'
        }
      ]
    }
  ]
}

const answerActionCreators2 = {
  'name': 'Action Creators',
  'children': [
    {
      'name': 'addTodo2',
      'children': [
        {
          'name': 'ADD_TODO'
        }
      ]
    },
    {
      'name': 'setVisibilityFilter2',
      'children': [
        {
          'name': 'SET_VISIBILITY_FILTER'
        }
      ]
    },
    {
      'name': 'toggleTodo2',
      'children': [
        {
          'name': 'TOGGLE_TODO'
        }
      ]
    },
    {
      'name': 'undoAction2',
      'children': [
        {
          'name': 'UNDO'
        }
      ]
    },
    {
      'name': 'redoAction2',
      'children': [
        {
          'name': 'REDO'
        }
      ]
    }
  ]
}

const answerActionCreators3 = {
  'name': 'Action Creators',
  'children': [
    {
      'name': 'addTodo3',
      'children': [
        {
          'name': 'ADD_TODO'
        }
      ]
    },
    {
      'name': 'setVisibilityFilter3',
      'children': [
        {
          'name': 'SET_VISIBILITY_FILTER'
        }
      ]
    },
    {
      'name': 'toggleTodo3',
      'children': [
        {
          'name': 'TOGGLE_TODO'
        }
      ]
    },
    {
      'name': 'undoAction3',
      'children': [
        {
          'name': 'UNDO'
        }
      ]
    },
    {
      'name': 'redoAction3',
      'children': [
        {
          'name': 'REDO'
        }
      ]
    }
  ]
}

const answerActionCreators4 = {
  'name': 'Action Creators',
  'children': [
    {
      'name': 'addTodo4',
      'children': [
        {
          'name': 'ADD_TODO'
        }
      ]
    },
    {
      'name': 'setVisibilityFilter4',
      'children': [
        {
          'name': 'SET_VISIBILITY_FILTER'
        }
      ]
    },
    {
      'name': 'toggleTodo4',
      'children': [
        {
          'name': 'TOGGLE_TODO'
        }
      ]
    },
    {
      'name': 'undoAction4',
      'children': [
        {
          'name': 'UNDO'
        }
      ]
    },
    {
      'name': 'redoAction4',
      'children': [
        {
          'name': 'REDO'
        }
      ]
    }
  ]
}

const answerActionCreators5 = {
  'name': 'Action Creators',
  'children': [
    {
      'name': 'moveCard',
      'children': [
        {
          'name': 'MOVE_CARD'
        }
      ]
    }
  ]
}

module.exports = { testActionCreators, testActionCreators2, testActionCreators3, testActionCreators4, testActionCreators5, answerActionCreators, answerActionCreators2, answerActionCreators3, answerActionCreators4, answerActionCreators5 };
