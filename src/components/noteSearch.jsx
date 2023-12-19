import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    this.setState(() => {
        return {
            title: event.target.value,
        }
    })
  }

  render() {
    return (
      <div className="note-search">
        <input type="text" placeholder="Cari catatan ..." value={this.state.title} onChange={this.onTitleChangeHandler}/>
      </div>
    );
  }
}

export default NoteSearch;