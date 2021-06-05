import qs from "qs";

export default async (req, res) => {
  const params = qs.stringify(req.query);

  const data = await fetch(
    `https://newsapi.org/v2/top-headlines?${params}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
  );
  const json = await data.json();

  res.json(json);
};
