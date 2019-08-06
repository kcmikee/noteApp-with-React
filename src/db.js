import PouchDB from 'pouchdb';

export default class DB {
	constructor(mick) {
		this.db = new PouchDB('mick');
	}

	async getAllNotes() {
		let allNotes = await this.db.allDocs({include_docs: true});
		let notes = {};

		allNotes.rows.forEach(n => notes[n.id] = n.doc);
		return notes;
	}
	async createNote(note) {
		note.createdAt = new Date();
		note.updatedAt = new Date();

		const res = await this.db.post({
			...note
		});

		return res;
	}
}
