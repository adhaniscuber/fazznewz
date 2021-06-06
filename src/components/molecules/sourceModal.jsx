import Spinner from "@components/content-loader/spinner";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json());

const SourceModal = ({ onClose, onSelect }) => {
  const [sources, setSource] = useState([]);
  const { data, error } = useSWR(`/api/news/source`, fetcher);

  const formatData = sources => {
    return sources?.sources.map(source => {
      const values = {
        label: source.name,
        value: source.id,
      };
      return values;
    });
  };

  const onSelected = number => {
    onSelect(sources[number]);
  };

  useEffect(() => {
    const newData = formatData(data);
    setSource(newData);
  }, [data]);

  if (error) return <p>An error has occurred.</p>;

  return (
    <div className="source source-modal">
      <div className="overlay" onClick={() => onClose(false)} />
      <div className="source__card">
        {!data ? (
          <Spinner />
        ) : (
          <ul className="source__list">
            {sources &&
              sources.map((source, index) => (
                <li
                  key={index}
                  className="source__item"
                  onClick={() => onSelected(index)}
                >
                  <a href="">{source.label}</a>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SourceModal;
