exports.getPosts = (req, res, next) => {
  res.status(200).json({
    results: [
      {
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "타이틀1",
      },
      {
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "타이틀2",
      },
    ],
  });
};
