import { Dispatch } from "redux";
import { setSortingType } from "../redux/filters";

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
              dispatch(setSortingType(sortingOnject));
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
