import React,{useState} from 'react'

const data = [
  {
      "name": "committee-c15dw",
     
  },
  {
      "name": "midnight-wad0y",
     
  }]


 const Data = () => {
  const [query, setQuery] = useState("");
const [sort, setSort] = useState("asc");
const [page, setPage] = useState(1);
function handleQueryChange(event) {
  setQuery(event.target.value);
  setPage(1); // reset page to 1 when search query changes
}
function handleSortChange(event) {
  setSort(event.target.value);
  setPage(1); // reset page to 1 when sort order changes
}
function getFilteredAndSortedData() {
  let filteredData = data.filter(item => item.name.includes(query));
  if (sort === "asc") {
    filteredData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    filteredData = filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }
  return filteredData;
}
const itemsPerPage = 10;
const startIndex = (page - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const filteredAndSortedData = getFilteredAndSortedData();
const paginatedData = filteredAndSortedData.slice(startIndex, endIndex);

{paginatedData.map(item => (
  <div key={item.id}>{item.name}</div>
))}
  return (
    <div className='container-fluid'>
        <div className='row'>
         <div className='col-md-12'>
         <input type="text" value={query} onChange={handleQueryChange} />
<select value={sort} onChange={handleSortChange}>
  <option value="asc">A-Z</option>
  <option value="desc">Z-A</option>
</select>

         </div>
        </div>
    </div>
  )
}
export default Data