import React from "react";
import { Dispatch } from "redux";
import SortingPopup from "./SortingPopup";

export interface ISortingProps {
  sorting: { name: string; type: string };
  dispatch: Dispatch;
}

const Sorting = React.memo(({ dispatch, sorting }: ISortingProps) => {
  const sortingOnjects = [
    { name: "Популярности", type: "rating" },
    { name: "Цене", type: "price" },
    { name: "Алфавиту", type: "name" },
  ];

  const [popupVisibility, setPopupVisibility] = React.useState(false);
  const handleClickPopupVisibility = () => {
    setPopupVisibility(true);
  };

  const sortingRef = React.useRef<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent) => {
    if (!event.composedPath().includes(sortingRef.current as HTMLDivElement)) {
      setPopupVisibility(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, []);

  return (
    <div className='sort'>
      <div className='sort__label'>
        <b>Сортировка по:</b>
        <span onClick={handleClickPopupVisibility} ref={sortingRef}>
          {sorting.name}
        </span>
        {popupVisibility && (
          <SortingPopup dispatch={dispatch} sortingOnjects={sortingOnjects} />
        )}
      </div>
    </div>
  );
});

export default Sorting;
