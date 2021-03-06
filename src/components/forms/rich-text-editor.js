import React, { Component } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { resolve } from "path";
import { rejects } from "assert";
export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.getBase64 = this.getBase64.bind(this);
    this.uploadFile = this.uploadFile.bind(this);   
  }
  componentWillMount() {
    if (this.props.editMode && this.props.contentToEdit) {
      const blocksFromHtml = htmlToDraft(this.props.contentToEdit);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
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
  getBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {};
  }
  uploadFile(file) {
    return new Promise((resolve, reject) => {
      this.getBase64(file, data => resolve({ data: { link: data } }));
    });
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
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: this.uploadFile,
              alt: { present: true, mandatory: false },
              previewImage: true,
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
            }
          }}
        />
      </div>
    );
  }
}