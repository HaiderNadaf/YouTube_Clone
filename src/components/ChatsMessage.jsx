import React from "react";
import Avatar from "react-avatar";

const ChatsMessage = ({ item }) => {
  return (
    <div className="flex items-center">
      <div>
        <Avatar
          className="cursor-pointer"
          src="data:image/jpeg;base64,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"
          size={25}
          round={true}
        />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 font-bold text-sm">{item.name}</h1>
        <p className="ml-2 py-2 text-sm">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatsMessage;
