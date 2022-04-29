import React, { useState } from "react";
const customData = require('./data/apidata.json');
function Bday() {
  var [birthday, setFilter] = useState('');
  const [year, yearData] = useState('');
  const filter = () => {
    setFilter(birthday = customData.filter(person => new Date(person.birthday).getFullYear() == year));
  }
  return (
    <div>
      <div style={{ float: 'left' }}>
        {customData.map((item, index) => {
          return <div key={index}>
            <p>{item.name}</p>
            <p>{item.birthday}</p>
          </div>;
        })}
      </div>
      <div>
        <label>Enter year:
          <input type="number" value={year} onChange={e => yearData(e.target.value)} />
        </label>
        <button onClick={filter}>List Birthdays</button>
        {birthday &&
          <div>
            <div style={{ float: 'right' }}>
              <p>Sunday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 0).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <p>Monday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 1).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <p>Tuesday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 2).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <p>Wednesday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 3).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <p>Thursday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 4).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <p>Friday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 5).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
            <div style={{ float: 'right' }}>
              <p>Saturday</p>
              <div>
                {birthday.filter(person => new Date(person.birthday).getDay() == 6).map(filteredPerson => (
                  <p>
                    {filteredPerson.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
export default Hi;
