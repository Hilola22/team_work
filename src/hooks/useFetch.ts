import { useEffect, useState } from "react";
import { api } from "../api";

interface IParams {
    limit: number
}

export const useFetch = (entpoint: string, params?: IParams) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    api
        .get(entpoint, {params})
        .then((res) => setData(res.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
  }, [entpoint, JSON.stringify(params)]);

  return {data, error, loading}
};
