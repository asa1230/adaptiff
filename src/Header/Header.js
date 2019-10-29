import React, { Component } from "react";
import classnames from "classnames";
import throttle from "lodash.throttle";
import { Button, Icon } from "semantic-ui-react";

import s from "./Header.module.css";
import MiniCard from "../MiniCard/MiniCard";
import linearGradient from "../_adaptationConfigs/linearGradient";
import { logStat } from "../_utils";

class Header extends Component {
  state = {
    minimized: false
  };
  constructor(props) {
    super(props);
    const onScroll = () => {
      if (window.scrollY > 0) {
        if (!this.state.minimized) {
          this.setState({ minimized: true });
        }
      } else {
        if (this.state.minimized) {
          this.setState({ minimized: false });
        }
      }
    };
    this.throttledOnScroll = throttle(onScroll, 250);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.throttledOnScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.throttledOnScroll);
  }
  render() {
    return (
      <header
        className={classnames(
          s["header"],
          this.state.minimized && s["minimized"]
        )}
      >
        <div className={classnames(s["header-inner"], "restricted-width-area")}>
          <a className={s["logo"]} href="/">
            <div className={s["logo-symbol"]}>
              <div className={s["logo-symbol-block-1"]} />
              <div className={s["logo-symbol-block-2"]} />
            </div>
            <div className={s["logo-text"]}>
              adaptiff
              <span className={s["logo-beta"]}>
                β<span className={s["logo-eta"]}>eta</span>
              </span>
            </div>
          </a>
          <div className={s["header-buttons"]}>
            <Button
              icon
              className={s["social-button"]}
              target="_blank"
              href="https://www.instagram.com/adaptiff"
            >
              <Icon name="instagram" />
            </Button>
            <Button
              icon
              className={s["social-button"]}
              target="_blank"
              href="https://www.twitter.com/adaptiff_com"
            >
              <Icon name="twitter" />
            </Button>
            <Button
              icon
              className={s["social-button"]}
              target="_blank"
              href="https://t.me/adaptiff"
            >
              <Icon name="telegram plane" />
            </Button>
            <Button
              icon
              className={s["add-code-button"]}
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSddoo8_28sRF5Pt7AZae5wtTXPH18dNYFoD8kujnf7omcKaDQ/viewform"
            >
              Contact
            </Button>
            <div className={s["submit-button-wrapper"]}>
              <Button
                color="black"
                icon
                className={s["submit-button"]}
                target="_blank"
              >
                <Icon name="add" /> Create a Design
              </Button>
              <MiniCard
                onClick={() => logStat("create")}
                clickAndShowModal={true}
                className={s["blank-card"]}
                mode="thumb-only"
                {...linearGradient}
                initState={{
                  size: { width: 1080, height: 1080 },
                  configValues: {
                    palette: ["#fefff5", "#d3f0e9"]
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
