// Import Actions
import {
  CREATE_LANE,
  UPDATE_LANE,
  DELETE_LANE,
  EDIT_LANE,
  CREATE_LANES,
} from './LaneActions';

import {
  CREATE_NOTE,
  DELETE_NOTE,
} from '../Note/NoteActions';

import omit from 'lodash/omit';

// Initial State
const initialState = [];

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LANE:
    case UPDATE_LANE:
      return { ...state, [action.lane.id]: action.lane };

    // case UPDATE_LANE:
    //   return { ...state, [action.lane.id]: action.lane };
    // return state.map(lane => {
    //   return lane.id === action.lane.id ? { ...lane, ...action.lane } : lane;
    // });

    case DELETE_LANE: {
      return omit(state, action.laneId);
      // return state.filter(lane => lane.id !== action.laneId);
    }

    case EDIT_LANE: {
      const lane = { ...state[action.id], editing: true };
      return { ...state, [action.id]: lane };
    }

      // return state.map(lane => {
      //   if (lane.id === action.laneId) {
      //     lane.editing = true;
      //   }
      //   return lane;
      // });

    case CREATE_NOTE: {
      const newLane = { ...state[action.laneId] };
      newLane.notes = newLane.notes.concat(action.note.id);

      return { ...state, [action.laneId]: newLane };
    }
      // return state.map(lane => {
      //   if (lane.id === action.laneId) {
      //     const notes = [...lane.notes, action.note.id];
      //     return { ...lane, notes };
      //   }
      //   return lane;
      // });

    case DELETE_NOTE: {
      const newLane = { ...state[action.laneId] };
      newLane.notes = newLane.notes.filter(noteId => noteId !== action.noteId);

      return { ...state, [action.laneId]: newLane };
    }
      // return state.map(lane => {
      //   if (lane.id === action.laneId) {
      //     return state.filter((note) => note.id !== action.noteId);
      //   }
      //   return lane;
      // });

    case CREATE_LANES:
      return { ...action.lanes };

    default:
      return state;
  }
}
