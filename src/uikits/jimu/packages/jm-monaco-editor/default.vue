<script>
import registerLanguage from "./index";
export default {
  name: "jmMonacoEditor",

  props: {
    value: {
      default: ""
    },
    theme: {
      default: "vs-dark"
    },
    language: {
      default: "javascript"
    },
    options: {
      default: function() {
        return {};
      }
    },
    textAlign: {
      default: "left"
    },
    diffEditor: {
      default: false
    },
    original: {
      default: ""
    }
  },

  model: {
    event: "change"
  },
  computed: {
    style() {
      return {
        "text-align": this.textAlign
      };
    }
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        if (this.editor) {
          const _editor = this.getModifiedEditor();
          _editor.updateOptions(options);
          if (this.diffEditor) {
            const _originalEditor = this.editor.getOriginalEditor();
            _originalEditor.updateOptions(options);
          }
        }
      }
    },

    value(newValue) {
      if (this.editor) {
        const _editor = this.getModifiedEditor();
        if (newValue !== _editor.getValue()) {
          _editor.setValue(newValue);
        }
      }
    },
    original(newValue) {
      if (this.editor && this.diffEditor) {
        const _editor = this.editor.getOriginalEditor();
        if (newValue !== _editor.getValue()) {
          _editor.setValue(newValue);
        }
      }
    },
    language(newVal) {
      if (this.editor) {
        const _editor = this.getModifiedEditor();
        window.monaco.editor.setModelLanguage(_editor.getModel(), newVal);
        if (this.diffEditor) {
          const _originalEditor = this.editor.getOriginalEditor();
          window.monaco.editor.setModelLanguage(
            _originalEditor.getModel(),
            newVal
          );
        }
      }
    },

    theme(newVal) {
      if (this.editor) {
        window.monaco.editor.setTheme(newVal);
      }
    }
  },

  mounted() {
    if (window.monaco) {
      this.initMonaco(window.monaco);
      registerLanguage(window.monaco);
    }
  },

  beforeDestroy() {
    this.editor && this.editor.dispose();
  },

  methods: {
    getModifiedEditor() {
      return this.diffEditor ? this.editor.getModifiedEditor() : this.editor;
    },
    initMonaco(monaco) {
      const options = Object.assign(
        {
          value: this.value,
          theme: this.theme,
          language: this.language,
          automaticLayout: true,
          wordWrap: "on",
          wrappingIndent: "indent",
          acceptSuggestionOnEnter: true,
          fontSize: 14,
          formatOnPaste: true
        },
        this.options
      );

      if (this.diffEditor) {
        this.editor = monaco.editor.createDiffEditor(this.$el, options);
        const originalModel = monaco.editor.createModel(
          this.original,
          this.language
        );
        const modifiedModel = monaco.editor.createModel(
          this.value,
          this.language
        );
        this.editor.setModel({
          original: originalModel,
          modified: modifiedModel
        });
      } else {
        this.editor = monaco.editor.create(this.$el, options);
      }
      this.$emit("editorDidMount", this.editor);
      const editor = this.getModifiedEditor();
      editor.onDidChangeModelContent(event => {
        const value = editor.getValue();
        if (this.value !== value) {
          this.$emit("change", value, event);
        }
      });
      editor.onContextMenu(event => this.$emit("contextMenu", event));
      editor.onDidBlurEditorWidget(() => this.$emit("blur"));
      editor.onDidBlurEditorText(() => this.$emit("blurText"));
      editor.onDidChangeConfiguration(event =>
        this.$emit("configuration", event)
      );
      editor.onDidChangeCursorPosition(event => this.$emit("position", event));
      editor.onDidChangeCursorSelection(event =>
        this.$emit("selection", event)
      );
      editor.onDidChangeModel(event => this.$emit("model", event));
      editor.onDidChangeModelDecorations(event =>
        this.$emit("modelDecorations", event)
      );
      editor.onDidChangeModelLanguage(event =>
        this.$emit("modelLanguage", event)
      );
      editor.onDidChangeModelOptions(event =>
        this.$emit("modelOptions", event)
      );
      editor.onDidFocusEditorWidget(() => this.$emit("focus"));
      editor.onDidFocusEditorText(() => this.$emit("focusText"));
      editor.onDidLayoutChange(event => this.$emit("layout", event));
      editor.onDidScrollChange(event => this.$emit("scroll", event));
      editor.onKeyDown(event => this.$emit("keydown", event));
      editor.onKeyUp(event => this.$emit("keyup", event));
      editor.onMouseDown(event => this.$emit("mouseDown", event));
      editor.onMouseLeave(event => this.$emit("mouseLeave", event));
      editor.onMouseMove(event => this.$emit("mouseMove", event));
      editor.onMouseUp(event => this.$emit("mouseUp", event));
      editor.onDidDispose(
        event => (this.$emit("afterDispose", event), console.log("呵呵"))
      );
    },

    getMonaco() {
      return this.editor;
    },

    focus() {
      this.editor.focus();
    }
  },

  render(h) {
    return h("div", {
      style: this.style
    });
  }
};
</script>
