import { Divider, Input } from 'antd';

function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;
