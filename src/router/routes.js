
const express = require('express');
const router = express.Router();
const Warum = require('../models/Warum');
const Was = require('../models/Was');
const Aktuelles = require('../models/Aktuelles');
const isAdmin = require('../config/isAdmin');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/warum', (req, res) => {
    return Warum.find().lean()
        .then((warum) => {
            const isAdmin = req.admin;
            res.render('warum', { warum, isAdmin });
        })
});

router.get('/edit/warum/:id', isAdmin, (req, res) => {
    return Warum.findById(req.params.id)
        .then((warumToEdit) => {
            res.render('edit-content', warumToEdit);
        })
});

router.post('/edit/warum/:id', isAdmin, (req, res) => {
    return Warum.findByIdAndUpdate({ _id: req.params.id },
        { $set: req.body })
        .then(() => {
            res.redirect('/warum');
        })
        .catch(() => {
            res.redirect('/');
        });
});

router.get('/was', (req, res) => {
    return Was.find().lean()
        .then((was) => {
            const isAdmin = req.admin;
            res.render('was', { was, isAdmin });
        })
});

router.get('/edit/was/:id', isAdmin, (req, res) => {
    return Was.findById(req.params.id)
        .then((wasToEdit) => {
            res.render('edit-was', wasToEdit);
        })
});

router.post('/edit/was/:id', isAdmin, (req, res) => {
    return Was.findByIdAndUpdate({ _id: req.params.id },
        { $set: req.body })
        .then(() => {
            res.redirect('/was');
        })
        .catch(() => {
            res.redirect('/');
        });
});

router.get('/wer', async (req, res) => {
    res.render('wer');
});

router.get('/aktuelles', (req, res) => {
    return Aktuelles.find().lean()
        .then((aktuelles) => {
            const isAdmin = req.admin;
            res.render('aktuelles', { aktuelles, isAdmin });
        })
});

router.get('/add-aktuelle', isAdmin, (req, res) => {
    res.render('add-aktuelles');
})

router.post('/add-aktuelle', isAdmin, (req, res) => {
    const { title, synopsis, description } = req.body;
    return Aktuelles.create({
        title,
        synopsis,
        description
    })
        .then(() => {
            res.redirect('/aktuelles');
        });
});

router.get('/edit/aktuelle/:id', isAdmin, (req, res) => {
    return Aktuelles.findById(req.params.id)
        .then((aktuelleToEdit) => {
            res.render('edit-was', aktuelleToEdit);
        })
});

router.post('/edit/aktuelle/:id', isAdmin, (req, res) => {
    return Aktuelles.findByIdAndUpdate({ _id: req.params.id },
        { $set: req.body })
        .then(() => {
            res.redirect('/aktuelles');
        })
        .catch(() => {
            res.redirect('/');
        });
});

router.get('/aktuelles/mehr-informationen/:id', (req, res) => {
    return Aktuelles.findById(req.params.id)
        .then((details) => {
            res.render('aktuelle-details', details);
        })
});

router.get('/referenzen', (req, res) => {
    res.render('referenzen');
});

router.get('/kontakt', (req, res) => {
    res.render('kontakt');
});

router.get('/add-content', isAdmin, (req, res) => {
    res.render('add-content');
});

router.get('/add-was', isAdmin, (req, res) => {
    res.render('add-was');
});

router.post('/add-content', isAdmin, (req, res) => {
    const { title, description } = req.body;
    return Warum.create({ title, description })
        .then(() => {
            res.redirect('/warum');
        })
});

router.post('/add-was', isAdmin, (req, res) => {
    const { title, synopsis, description } = req.body;
    return Was.create({ title, synopsis, description })
        .then(() => {
            res.redirect('/was');
        })
});

router.get('/delete/:id', isAdmin, (req, res) => {
    return Warum.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/warum');
        })
});

router.get('/delete/was/:id', isAdmin, (req, res) => {
    return Was.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/was');
        })
});

router.get('/delete/aktuelle/:id', isAdmin, (req, res) => {
    return Aktuelles.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/aktuelles');
        })
})

module.exports = router;