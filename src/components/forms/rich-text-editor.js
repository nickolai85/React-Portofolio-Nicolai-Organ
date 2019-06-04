import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }
  onEditorStateChange(editorState) {
    this.setState(
      { editorState },
      this.props.handleRichTextEditorChange(
        //wraps data and up into HTML string that we can work with.and alawed to be parsed as html
        draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
       // *convertToRaw()This is a function that takes in the code, it takes in the editor code changes, and it parses it into something that we can actually work with
      )
    );
  }

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          wrapperClassName="demo-wrapper"
          editorClassname="demo-editor"
          // This is passed to the editor as a prop, and it expects that, that's not something that we did or anything that we made up, the draft.js component itself is expecting this prop. Whenever someone starts typing in, this prop is going to be called. They're gonna run the function, they're gonna pass in the new editor state
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    );
  }
}