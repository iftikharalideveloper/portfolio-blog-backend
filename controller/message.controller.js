import Message from "../model/message.model.js";

export const sendMessage = async (req, res) =>{
    try {
        const { name, email, message} = req.body;
        const newMessage = await Message.create({
            name,
            email,
            message
        });
        res.status(201).json({ success: true, message: "Message sent successfully"});
    } catch (error) {
        res.status(400).json({error: error.Message});
    }
};

export const getAllMessages = async (req, res) =>{
    try {
        const messages = await Message.find().sort({ createdAt: -1});
        res.status(200).json({ success: true, messages});
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

// admin message dekega unread messages. jo hum ne by default false kiya he. dekte he true hojaiga.
export const markAsRead = async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ success: false, message: "Message nahi mila" });
    }

    res.status(200).json({ success: true, read: true, updatedMessage });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);
         if (!deletedMessage){
            res.status(404).json({ success: false, message: "Message not found"});
         }
         res.status(200).json({ success: true, message: "Message Deleted Successfully"});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};