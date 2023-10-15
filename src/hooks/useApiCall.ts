"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

interface ApiCallResult<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  invoke: (url: string, config?: AxiosRequestConfig) => void;
}

export const useApiCall = <T>(
  initialUrl: string,
  initialConfig?: AxiosRequestConfig
): ApiCallResult<T> => {
  const axiosRef = useRef(axios);
  const [url, setUrl] = useState(initialUrl);
  const [config, setConfig] = useState<AxiosRequestConfig>(initialConfig ?? {});
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  if (typeof initialUrl !== "string" || initialUrl.trim() === "") {
    throw new Error("Initial URL must be a non-empty string.");
  }

  if (initialConfig && typeof initialConfig !== "object") {
    throw new Error("Initial config must be an object or undefined.");
  }

  const fetchData = useCallback(async () => {
    setError(null);

    try {
      const response: AxiosResponse<T> = await axiosRef.current(url, config);
      setData(response.data ?? null);
    } catch (error: unknown) {
      setError(error as AxiosError | null);
    } finally {
      setLoading(false);
    }
  }, [url, config]);

  const invoke = useCallback(
    (newUrl: string, newConfig?: AxiosRequestConfig) => {
      setUrl(newUrl);
      setConfig(newConfig ?? {});
    },
    []
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return useMemo(
    () => ({ data, loading, error, invoke }),
    [data, loading, error, invoke]
  );
};
