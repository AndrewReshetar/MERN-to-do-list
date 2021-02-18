const capitalize = (req,res,next) => {
  const words = [];
  for(let word of req.body.title.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  req.body.title = words.join(' ');
  next();
}

module.exports = {capitalize}