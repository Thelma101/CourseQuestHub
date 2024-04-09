import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "../course.module.scss";

export const Search = ( { ...width } ) => {
    var data = require("../drop_data.json");

    const [value, setValue] = useState("");
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    const handleSearch = (searchTerm) => {
      // our api
      setValue(searchTerm);
      console.log("search", searchTerm);
    };
    return(
        <div style={width} className={style.searchCourses}>
          <label className={style.searchBox} htmlFor="search-box">
          <FontAwesomeIcon icon={faSearch} fa-5x/>
            <input 
              id="search-box"
              type="search"
              value={value}
              onChange={handleChange}
              placeholder="Search"
              className={style.input}
            />
            <button className={style.searchButton} onClick={() => handleSearch(value)}>Search</button>
          </label>
          <div className="dropdown">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const allCourse = item.course.toLowerCase();

                return (
                  searchTerm &&
                  allCourse.startsWith(searchTerm) &&
                  allCourse !== searchTerm
                );
              }).slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => handleSearch(item.course)}
                  class="m-4  text-justify"
                  key={item.course}
                >
                  {item.course}
                </div>
              ))}
          </div>
          <div className={style.courselist}>
            <p>Physiotheraphy</p>
            <p>Professional Dancer</p>
            <p>Fashion designing</p>
            <p>Political Science</p>
            <p>Economics</p>
            <p>Professional Footballer</p>
            <p>Business Development</p>
            <p>Artist</p>
            <p>Professional Makeup Artist</p>
            <p>Professional Capentry</p>
            <p>Agriculture</p>
            <p>Biology</p>
            <p>public speaking</p>
            <p>International Relations</p>

          </div>
        </div>
    )
}