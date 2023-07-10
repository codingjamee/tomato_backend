const { v4: uuidv4 } = require("uuid");

exports.getBest = (req, res, next) => {
  res.status(200).json({
    title: "베스트",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/500/500",
        card_title: "베스트1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/500/500",
        card_title: "베스트2",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/283/500/500",
        card_title: "베스트3",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/699/500/500",
        card_title: "베스트4",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/893/500/500",
        card_title: "베스트5",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/924/500/500",
        card_title: "베스트6",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/774/500/500",
        card_title: "베스트7",
      },
    ],
  });
};

exports.getNew = (req, res, next) => {
  res.status(200).json({
    title: "신상품",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "신상품1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "신상품2",
      },
    ],
  });
};

exports.getBasic = (req, res, next) => {
  res.status(200).json({
    title: "베이직",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "베이직1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "베이직2",
      },
    ],
  });
};

exports.getOuter = (req, res, next) => {
  res.status(200).json({
    title: "아우터",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "겉옷1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "겉옷2",
      },
    ],
  });
};

exports.getTop = (req, res, next) => {
  res.status(200).json({
    title: "상의",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "상의1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "상의2",
      },
    ],
  });
};

exports.getDress = (req, res, next) => {
  res.status(200).json({
    title: "원피스/치마",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "원피스",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "치마",
      },
    ],
  });
};

exports.getBottom = (req, res, next) => {
  res.status(200).json({
    title: "하의",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "하의1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "하의2",
      },
    ],
  });
};

exports.getBasic = (req, res, next) => {
  res.status(200).json({
    title: "베이직",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "베이직1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "베이직2",
      },
    ],
  });
};

exports.getSet = (req, res, next) => {
  res.status(200).json({
    title: "세트",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "세트1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "세트2",
      },
    ],
  });
};

exports.getSale = (req, res, next) => {
  res.status(200).json({
    title: "세일",
    results: [
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/233/350/350",
        card_title: "세일1",
      },
      {
        id: uuidv4(),
        card__imgUrl: "https://picsum.photos/id/253/350/350",
        card_title: "세일2",
      },
    ],
  });
};
