export default async (req, res) => {
  const data = await fetch(
    `https://newsapi.org/v2/sources?&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  );
  const json = await data.json();

  res.json(json);
};
