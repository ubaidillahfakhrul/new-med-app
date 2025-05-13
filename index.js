const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Koneksi MongoDB (ganti URI jika pakai MongoDB Atlas)
mongoose.connect('mongodb://127.0.0.1:27017/docterapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema Note
const Note = mongoose.model('Note', {
    title: String,
    content: String
});

// Route untuk tambah note
app.post('/notes', async (req, res) => {
    const note = new Note(req.body);
    await note.save();
    res.send(note);
});

// Route untuk ambil semua note
app.get('/notes', async (req, res) => {
    const notes = await Note.find();
    res.send(notes);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
