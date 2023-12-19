import React from "react";
import Notiflix from "notiflix";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChanceHandler = this.onBodyChanceHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    if (event.target.value.length > 50) {
      Notiflix.Notify.warning("Judul tidak boleh lebih dari 50 karakter.");
    } else {
      this.setState({
        title: event.target.value,
      });
    }
  }

  onBodyChanceHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {50 - this.state.title.length}
        </p>
        <input
          type="text"
          className="note-input__title"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          required
        />
        <textarea
          type="text"
          className="note-input__body"
          placeholder="Tuliskan catatanmu di sini ..."
          value={this.state.body}
          onChange={this.onBodyChanceHandler}
          required
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
