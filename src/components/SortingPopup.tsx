import { Dispatch } from "redux";
import { setSortBy } from "../redux/actions/filters";

export interface ISortingPopupProps {
  dispatch: Dispatch;
  sortingOnjects: Array<{ name: string; type: string }>;
}

const SortingPopup = ({ dispatch, sortingOnjects }: ISortingPopupProps) => {
  return (
    <div className='sort__popup'>
      <ul>
        {sortingOnjects.map((sortingOnject, index) => (
          <li
            key={sortingOnject.name + "_" + index}
            onClick={() => {
              dispatch(setSortBy(sortingOnject));
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
