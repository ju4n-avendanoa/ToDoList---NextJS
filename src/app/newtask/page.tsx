"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useTaskStore } from "@/store/taskStore";
import TaskForm from "@/components/TaskForm";

interface CreateTaskProps {
  params: {
    taskId: string;
  };
}

const CreateTask: React.FC<CreateTaskProps> = ({ params }) => {
  const { title, description, setDescription, setTitle } = useTaskStore();
  const { data: session } = useSession();

  useEffect(() => {
    if (!params.taskId) return;
    const fetchTask = async () => {
      const response = await fetch(
        process.env.NODE_ENV === "development"
          ? `http://localhost:3000/api/tasks/${params.taskId}`
          : `https://my-task-organizer.vercel.app/api/tasks/${params.taskId}`
      );
      const data = await response.json();
      setDescription(data.description);
      setTitle(data.title);
    };
    fetchTask();
  }, [setDescription, setTitle, params.taskId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TaskForm
        description={description}
        title={title}
        taskId={params.taskId}
        userId={session?.user.id}
      />
    </div>
  );
};

export default CreateTask;
