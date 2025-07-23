import React, { useState, useRef } from "react";

const Interrogation: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [formattedText, setFormattedText] = useState("");
  const [sheetId, setSheetId] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const handleStartRecording = async () => {
    setIsRecording(true);
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (e) => {
      audioChunks.current.push(e.data);
    };
    mediaRecorderRef.current.onstop = async () => {
      const blob = new Blob(audioChunks.current, { type: "audio/webm" });
      // TODO: ส่ง blob ไป backend เพื่อแปลงเสียงเป็นข้อความ
      setTranscript("stub transcript");
      audioChunks.current = [];
    };
    mediaRecorderRef.current.start();
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    mediaRecorderRef.current?.stop();
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Interrogation Support</h2>
      <button
        className={`px-4 py-2 rounded ${isRecording ? "bg-red-500" : "bg-green-500"} text-white`}
        onClick={isRecording ? handleStopRecording : handleStartRecording}
      >
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <div className="mt-4">
        <label className="font-semibold">Raw Transcript:</label>
        <textarea
          className="w-full h-32 border rounded p-2 mt-2"
          value={transcript}
          readOnly
        />
      </div>
      {/* ปุ่มวิเคราะห์และจัดรูปแบบ transcript */}
    </div>
  );
};

export default Interrogation;