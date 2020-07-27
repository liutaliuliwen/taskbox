import React from "react";
import { PureInboxScreen } from "./InboxScreen";
import { Provider } from "react-redux";
// import store from "./lib/redux";
import { action } from "@storybook/addon-actions";
import { defaultTasksData } from "./TaskList.stories";

export default {
  component: PureInboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

const store = {
    getState: () => {
        return {
            tasks: defaultTasksData
        };
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
};

export const Default = () => <PureInboxScreen />;

export const Error = () => <PureInboxScreen error="something" />;
