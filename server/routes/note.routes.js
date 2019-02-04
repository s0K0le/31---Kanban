import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Get all Notes
router.route('/notes').get(NoteController.getNotes);

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Edit note task by noteID
router.route('/notes/:noteId').put(NoteController.editNote);

// Delete a note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

export default router;
