import Spinner from "@components/content-loader/spinner";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { showModalSource } from "@redux/actions";

const fetcher = url => fetch(url).then(res => res.json());

const SourceModal = () => {
  const [sources, setSource] = useState([]);
  const dispatch = useDispatch();
  const { data, error } = useSWR(`/api/news/source`, fetcher);

  const formatData = sources => {
    return sources?.sources?.map(source => {
      const values = {
        label: source.name,
        value: source.id,
      };
      return values;
    });
  };

  const handleSource = index => () => {
    dispatch(updateSource(sources[index]));
  };

  const handleClose = () => {
    dispatch(showModalSource(false));
  };

  useEffect(() => {
    const newData = formatData(data);
    setSource(newData);
  }, [data]);

  if (error) return <p>An error has occurred.</p>;

  return (
    <div className="source source-modal">
      <div className="overlay" onClick={handleClose} />
      <div className="source__card">
        {!data ? (
          <Spinner />
        ) : (
          <ul className="source__list">
            {sources?.map((source, index) => (
              <li key={index} className="source__item" onClick={handleSource()}>
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
