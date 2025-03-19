import React from "react";
import InstagramFeed from "react-instagram-feed";

function InstagramWidget() {
  return (
    <InstagramFeed
      token="YOUR_INSTAGRAM_ACCESS_TOKEN"
      counter="6"
      scrollable
    />
  );
}

export default InstagramWidget;
