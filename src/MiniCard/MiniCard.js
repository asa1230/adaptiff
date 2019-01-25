import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import Modal from "../Modal/Modal";

import "./MiniCard.css";

class MiniCard extends Component {
  state = {
    loadAllThumbs: false,
    showModal: false,
    isSelectingColor: false
  };
  render() {
    const { author, authorLink, title, thumbs } = this.props;
    return (
      <>
        <Card
          link={false}
          className="mini-card"
          onClick={this.showModal}
          as="div"
        >
          <div
            className="mini-previews-scroller"
            onScroll={() => this.setState({ loadAllThumbs: true })}
          >
            <div className="mini-preview-paddle mini-preview-paddle-prev" />
            <div className="mini-preview-paddle mini-preview-paddle-next" />
            <div className="mini-previews-wrapper">
              <div
                className="mini-preview"
                style={{
                  backgroundImage: `url("${thumbs[0]}")`
                }}
              />
              {thumbs[1] && (
                <div
                  className="mini-preview"
                  style={{
                    backgroundImage:
                      this.state.loadAllThumbs && `url("${thumbs[1]}")`
                  }}
                />
              )}
              {thumbs[2] && (
                <div
                  className="mini-preview"
                  style={{
                    backgroundImage:
                      this.state.loadAllThumbs && `url("${thumbs[2]}")`
                  }}
                />
              )}
              {thumbs[3] && (
                <div
                  className="mini-preview"
                  style={{
                    backgroundImage:
                      this.state.loadAllThumbs && `url("${thumbs[3]}")`
                  }}
                />
              )}
            </div>
          </div>
          <Card.Content>
            <div className="mini-title">{title}</div>
            <span className="mini-by-author">by</span>
            {authorLink ? (
              <a href={authorLink} className="mini-author">
                {author}
              </a>
            ) : (
              <span className="mini-author">{author}</span>
            )}
          </Card.Content>
        </Card>
        {this.state.showModal && (
          <Modal
            onClose={this.closeModal}
            {...this.props}
            onStartSelectingColor={() =>
              this.setState({ isSelectingColor: true })
            }
            onStopSelectingColor={() =>
              this.setState({ isSelectingColor: false })
            }
          />
        )}
      </>
    );
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    if (this.state.isSelectingColor) {
      return;
    }
    this.setState({ showModal: false });
  };
}

export default MiniCard;
