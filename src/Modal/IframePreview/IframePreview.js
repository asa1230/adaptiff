import React from "react";

import s from "./IframePreview.module.css";

export default React.memo(
  React.forwardRef((props, ref) => {
    return (
      <div
        style={{
          position: "relative",
          width: props.width,
          height: props.height,
          transform: props.scale < 1 ? `scale(${props.scale})` : undefined
        }}
        className={props.className}
      >
        {props.placeholder && (
          <img
            alt=""
            ref={!props.showIframe ? ref : undefined}
            src={props.placeholder}
            className={s["iframe-placeholder"]}
          />
        )}
        {props.showIframe && (
          <iframe
            ref={ref}
            title="preview"
            src={`/adaptations/${props.fileName}.html?v=${
              props.version
            }&object_id=${props.insertedObjectId || ""}`}
            frameBorder="0"
            onLoad={props.onLoad}
            className={s["iframe"]}
          />
        )}
        <div className={s["opaque-overlay"]} />
      </div>
    );
  })
);
