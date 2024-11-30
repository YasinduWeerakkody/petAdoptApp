import React from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";

const useWarmUpBrowser = () => {
  React.useEffect(() => {
    if (Platform.OS !== "web") {
      WebBrowser.warmUpAsync();
    }
    return () => {
      if (Platform.OS !== "web") {
        WebBrowser.coolDownAsync();
      }
    };
  }, []);
};

export default useWarmUpBrowser;
