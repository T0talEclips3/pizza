import { Dispatch } from "redux";
import { setSortBy } from "../redux/actions/filters";

export interface ISortingPopupProps {
  dispatch: Dispatch;
  sortingOnjects: Array<{ name: string; type: string }>;
  setCurrentSorting: Function;
}

const SortingPopup = ({
  dispatch,
  sortingOnjects,
  setCurrentSorting,
}: ISortingPopupProps) => {
  return (
    <div className='sort__popup'>
      <ul>
        {sortingOnjects.map((sortingOnject, index) => (
          <li
            key={sortingOnject.name + "_" + index}
            onClick={() => {
              dispatch(setSortBy(sortingOnject.type));
              setCurrentSorting(sortingOnject.name);
            }}
          >
            {sortingOnject.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SortingPopup;
