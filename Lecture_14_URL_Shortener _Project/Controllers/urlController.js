import shortid from "shortid";
import urlModel from "../Models/urlModel.js";

export const shortenUrl = async (req, res) => {
    const originalUrl = req.body.longUrl;
    const shortUrl = shortid.generate();
    // const shortenedUrl = `localhost:3000/${shortUrl}`;
    const shortenedUrl = `${req.protocol}://${req.get('host')}/${shortUrl}`;
    // Save to database
    const newUrl = new urlModel({originalUrl,shortUrl});
    await newUrl.save();
    // console.log(newUrl);
    res.render('index', { shortUrl: shortenedUrl });
};

export const getOriginalUrl = async (req, res) => {
    const shortId = req.params.shortId;
    const urlEntry = await urlModel.findOne({ shortUrl: shortId });
    if (urlEntry) {
        res.redirect(urlEntry.originalUrl);
    } else {
        res.status(404).send('URL not found');
    }
};