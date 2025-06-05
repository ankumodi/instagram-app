import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsActions } from "../store/postsSlice";
import { fetchActions } from "../store/fetchSlice";

const FetchItems = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchActions.startFetching());
    fetch("http://127.0.0.1:3000/posts", { signal })
      .then((res) => res.json())
      .then(({ posts }) => {
        dispatch(fetchActions.markFetchDone());
        dispatch(fetchActions.endFetching());
        dispatch(postsActions.addInitialItems(posts));
      });
    return () => {
      controller.abort();
    };
  }, []);
  return <></>;
};
export default FetchItems;
