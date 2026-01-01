import { useDraggable } from "@dnd-kit/core";

export function TaskCard({task})  {

 const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg border border-[#e0e7f5] bg-white p-4 shadow-sm hover:shadow-md"
      style={style}
    >
      <h3 className="font-medium text-gray-900">{task.title}</h3>
      <p className="mt-2 text-sm text-neutral-800">{task.description}</p>
    </div>
  );
}