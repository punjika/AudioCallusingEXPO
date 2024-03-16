const React = require("react");
const { useState } = require("react");
const { Text } = require("react-native");
const RoomScreen = require("./screens/RoomScreen");
const CallScreen = require("./screens/CallScreen");
const JoinScreen = require("./screens/JoinScreen");

// Just to handle navigation
function App() {
  const screens = {
    ROOM: "JOIN_ROOM",
    CALL: "CALL",
    JOIN: "JOIN",
  };

  const [screen, setScreen] = useState(screens.ROOM);
  const [roomId, setRoomId] = useState("");

  let content;

  switch (screen) {
    case screens.ROOM:
      content = RoomScreen({
        roomId: roomId,
        setRoomId: setRoomId,
        screens: screens,
        setScreen: setScreen,
      });
      break;

    case screens.CALL:
      content = CallScreen({
        roomId: roomId,
        screens: screens,
        setScreen: setScreen,
      });
      break;

    case screens.JOIN:
      content = JoinScreen({
        roomId: roomId,
        screens: screens,
        setScreen: setScreen,
      });
      break;

    default:
      content = Text("Wrong Screen");
  }

  return SafeAreaView({ className: "flex-1 justify-center" }, content);
}

module.exports = App;
