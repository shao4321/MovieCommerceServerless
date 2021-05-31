import { FormControl, InputLabel, Select } from "@material-ui/core";

const SortControl = ({ sortType, handleSort }) => {
  return (
    <FormControl>
      <InputLabel className="sortLabel">Sort By</InputLabel>
      <Select
        native
        value={sortType}
        onChange={handleSort}
        className="selectSort"
      >
        <option value="" />
        <option value="AZ">Title (A - Z)</option>
        <option value="ZA">Title (Z - A)</option>
      </Select>
    </FormControl>
  );
};

export default SortControl;
