import { connect } from 'react-redux';
import Lane from './Lane';
import { createNoteRequest } from '../Note/NoteActions';
import { deleteLaneRequest, updateLaneRequest, editLane } from './LaneActions';
// import * as laneActions from './LaneActions';
// import { createLaneRequest, fetchLanes } from './LaneActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId]),
    // laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
  };
};

const mapDispatchToProps = {
  editLane,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
