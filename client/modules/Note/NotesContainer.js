import { connect } from 'react-redux';
import Notes from './Notes';
import { deleteNoteRequest, editNote, updateNoteRequest, moveWithinLane } from '../Note/NoteActions';
// import * as noteActions from '../Note/NoteActions';

const mapDispatchToProps = {
  onValueClick: editNote,
  onUpdate: updateNoteRequest,
  onDelete: deleteNoteRequest,
  moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
