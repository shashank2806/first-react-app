import React, { Component, createRef } from 'react';
import axios from 'axios';

import '../styles/home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      file: '',
      previewSrc: null,
      response: {},
    };
    this.fileRef = createRef();
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fileChange = () => {
    const file = this.fileRef.current.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
        previewSrc: [reader.result],
        file: file,
      });
    }.bind(this);
    console.log(url); // Would see a path?
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.setState({ response: {} });
    let formData = new FormData();
    formData.append('file', this.state.file, this.state.file.name);

    axios
      .post('http://137.116.224.12:8002/amr', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        this.setState({
          response: {
            ...res.data,
            img: 'http://137.116.224.12:8002/output.jpg',
          },
        });
      })
      .catch((err) => console.log(err.response));
  };

  render() {
    return (
      <div className="home-wrapper">
        <h1 className="heading"> Form Upload</h1>

        <form onSubmit={this.onFormSubmit}>
          <label>First Name:</label>
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.onChange}
          />
          <br />
          <label>Last Name:</label>
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.onChange}
          />
          <br />
          <input ref={this.fileRef} type="file" onChange={this.fileChange} />
          <button type="submit"> Submit me</button>
        </form>

        <div>
          {this.state.previewSrc && (
            <img src={this.state.previewSrc} width="800px" alt="preview" />
          )}
        </div>

        <div>
          <h1>{this.state.response.Status}</h1>
          <h1>{this.state.response.reading}</h1>
        </div>
        <div>
          {this.state.response.img && (
            <img src={this.state.response.img} width="800px" alt="preview" />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
