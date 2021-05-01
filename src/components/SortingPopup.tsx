type SortingPopupPropsType = {
  setSortingType: Function;
  sortings: Array<string>;
};

const SortingPopup = ({ setSortingType, sortings }: SortingPopupPropsType) => {
  return (
    <div className='sort__popup'>
      <ul>
        {sortings.map((sorting, index) => (
          <li
            key={sorting + "_" + index}
            onClick={() => {
              setSortingType(index);
            }}
          >
            {sorting}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SortingPopup;
