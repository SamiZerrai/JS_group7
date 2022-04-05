export default class Component {
  constructor(properties) {
    this.properties = properties;
    this.state = {};
    this.prevState;
    this.prevRender = null;
  }

  display = () => {
    if (this.shouldUpdate()) {
      this.prevRender = this.render();
    }
    return this.prevRender;
  };

  setState = (newState) => {
    this.prevState = this.state;
    this.state = newState;
    this.display();
    this.componentDidUpdate();
  };

  // TODO : Later
  componentDidUpdate = () => {};

  shouldUpdate = () => {
    const hasNewProperties = JSON.stringify(this.properties) != JSON.stringify(this.newProps);
    const hasNewState = JSON.stringify(this.state) != JSON.stringify(this.prevState);
    return hasNewProperties || hasNewState;
  };
}
