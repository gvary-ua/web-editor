// API reference: https://editorjs.io/block-tunes-api/
class VersionBlockTune {
  static get DEFAULT_VERSION() {
    return '1.0.0';
  }

  static get isTune() {
    return true;
  }

  constructor({ api, data, config, block }) {
    this.api = api;
    this.block = block;
    /**
         config:{
            blockVersions: {
              header: '1.0.0',
              list: '1.1.0'
            }
          },
         */
    this.settings = config;
    this.data = data || { version: this.getVersion() };
  }

  getVersion() {
    if (
      !!this.settings?.blockVersions &&
      this.settings.blockVersions.hasOwnProperty(this.block.name)
    ) {
      return this.settings.blockVersions[this.block.name];
    }
    return VersionBlockTune.DEFAULT_VERSION;
  }

  // Do not display this tool in the toolbar
  render() {
    return document.createElement('div');
  }

  save() {
    return this.data;
  }
}

module.exports = VersionBlockTune;
