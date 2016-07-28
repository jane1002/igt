import React from 'react';

const list = [
  {
    id: 1,
    personalInfo: {
      firstName: 'NAME',
      lastName: 'SURNAME'
    }
  },
  {
    id: 2,
    personalInfo: {
      firstName: 'NAME2',
      lastName: 'SURNAME2'
    }
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'hello' };
  }

  render() {
    return (
      <div>
        <p id="app">{this.state.hello}</p>
        <div id="grey" >
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
            {
              list.map(p => {
                const info = p.personalInfo;
                return (
                  <tr key={p.id} >
                    <td>{info.firstName}</td>
                    <td>{info.lastName}</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
        <div id="arrow" />
        <button>button</button>
      </div>
    );
  }
}
